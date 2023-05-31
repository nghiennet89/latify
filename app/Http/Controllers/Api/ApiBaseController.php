<?php

namespace App\Http\Controllers\Api;

use Exception;
use Illuminate\Http\Request;
use App\Utils\ResponseBuilder;
use App\Services\DefaultExport;
use App\Services\DefaultImport;
use App\Exceptions\ApiException;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Presenters\DefaultPresenter;
use Maatwebsite\Excel\Facades\Excel;
use Prettus\Validator\LaravelValidator;
use Illuminate\Support\Facades\Validator;
use Prettus\Repository\Presenter\FractalPresenter;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use Maatwebsite\Excel\Validators\ValidationException;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class RolesController.
 *
 * @package namespace App\Http\Controllers;
 */
class ApiBaseController extends Controller
{
    /**
     * @var RepositoryInterface
     */
    protected $repository;

    /**
     * @var Validator
     */
    protected $validator;

    /**
     * @var \Prettus\Repository\Presenter\FractalPresenter|null
     */
    protected $presenter;

    /**
     * @var Request
     */
    protected $createRequest;

    /**
     * @var Request
     */
    protected $updateRequest;

    /**
     * ApiBaseController constructor.
     *
     * @param $repository
     * @param $validator
     * @param $createRequest
     * @param $updateRequest
     */
    public function __construct(RepositoryInterface $repository,
                                $createRequest = null,
                                $updateRequest = null,
                                LaravelValidator $validator = null,
                                FractalPresenter $presenter = null)
    {
        $this->repository = $repository;
        if (!$presenter) $presenter = $this->repository->presenter() ?? DefaultPresenter::class;
        $this->presenter = $presenter;
        $this->repository->setPresenter($presenter);

        if (!$validator) $validator = $this->repository->validator() ?? app('App\Validators\DefaultValidator');
        $this->validator = $validator;

        $this->createRequest = $createRequest;
        $this->updateRequest = $updateRequest;

    }

    /**
     * @param Request $request
     *
     * @return mixed
     */
    public function index(Request $request)
    {
        $limit = $request->input('limit', config('repository.pagination.limit', 15));
        $result = $this->search($limit);
        return ResponseBuilder::SuccessGet($result);
    }

    protected function search($limit)
    {
        if ($limit == -1) return $this->repository->all();
        return $this->repository->paginate($limit);
    }

    /**
     * @param Request $request
     *
     * @return JsonResponse
     * @throws ApiException
     */
    public function store(Request $request)
    {
        $input = $request->all();

        if ($this->createRequest) {
            //convert request
            $createRequest = $this->createRequest::createFrom($request);
            if (!$createRequest->authorize()) return ResponseBuilder::Fail('Unauthorized');
            //validate request
            $createRequestValidator = Validator::make(
                $createRequest->input(),
                $createRequest->rules(),
                $createRequest->messages(),
                $createRequest->attributes()
            );

            if ($createRequestValidator->fails()) return ResponseBuilder::Fail($createRequestValidator->errors());
            $input = $createRequest->all();
        }

        try {
            $this->validator->with($input)->passesOrFail(ValidatorInterface::RULE_CREATE);

            $item = $this->createItem($input);

            return ResponseBuilder::SuccessCreate($item);

        } catch (ValidatorException $e) {

            throw new ApiException($e->getMessageBag());

        }
    }

    protected function createItem($input)
    {
        return $this->repository->create($input);
    }

    /**
     * @param $id
     *
     * @return mixed
     * @throws ApiException
     */
    public function show($id)
    {
        try {
            $item = $this->getItem($id);
        } catch (Exception $e) {
            throw new ApiException(__('data.get.ng'));
        }
        return ResponseBuilder::SuccessGet($item);
    }

    protected function getItem($id)
    {
        return $this->repository->find($id);
    }

    /**
     * @param Request $request
     * @param         $id
     *
     * @return JsonResponse
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        if ($this->updateRequest) {
            //validate request
            $updateRequest = $this->updateRequest::createFrom($request);
            if (!$updateRequest->authorize()) return ResponseBuilder::Fail('Unauthorized');
            $updateRequestValidator = Validator::make(
                $updateRequest->input(),
                $updateRequest->rules(),
                $updateRequest->messages(),
                $updateRequest->attributes()
            );
            if ($updateRequestValidator->fails()) return ResponseBuilder::Fail($updateRequestValidator->errors());

            $input = $updateRequest->all();
        }

        try {
            $this->validator->with($input)->passesOrFail(ValidatorInterface::RULE_UPDATE);
            unset($input['id']);
            $item = $this->updateItem($input, $id);
            return ResponseBuilder::SuccessUpdate($item);

        } catch (ValidatorException $e) {
            throw new ApiException($e->getMessageBag());
        }
    }

    protected function updateItem($input, $id)
    {
        return $this->repository->update($input, $id);
    }

    /**
     * @param $id
     *
     * @return JsonResponse
     * @throws \App\Exceptions\ApiException
     */
    public function destroy($id)
    {
        if (strpos($id, ',') > 0) $ids = explode(',', $id);
        else $ids = [$id];
        try {
            DB::beginTransaction();
            foreach ($ids as $id) if (!$this->deleteItem($id)) throw new Exception('Delete failed with id: ' . $id);
            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            throw new ApiException($e->getMessage());
        }
        return ResponseBuilder::SuccessDelete();
    }

    protected function deleteItem($id)
    {
        return $this->repository->delete($id);
    }

    /**
     * @param \Illuminate\Http\Request $request
     */
    public function import(Request $request)
    {
        try {
            $file = $request->file('import_file');
            $importer = $this->importer();
            $result = Excel::import(new $importer($this->repository), $file);
        } catch (ValidationException $e) {
            $failures = $e->failures();
            $message = '';
            foreach ($failures as $failure) $message .= 'Failed value ' . $failure->values() . ' on row ' . $failure->row() . ' and column ' . $failure->attribute() . ': ' . $failure->errors() . "\n";
            return ResponseBuilder::Fail($message);
        }
        return ResponseBuilder::success($result, 'Import successfully');
    }

    protected function importer()
    {
        return DefaultImport::class;
    }

    public function export(Request $request)
    {
        $exporter = $this->exporter();
        $export = new $exporter($this->repository);
        $exportType = $request->input('type', 'xlsx');
        $availableExportTypeArr = [
            'xlsx' => \Maatwebsite\Excel\Excel::XLSX,
            'csv' => \Maatwebsite\Excel\Excel::CSV,
            'xls' => \Maatwebsite\Excel\Excel::XLS,
            'xml' => \Maatwebsite\Excel\Excel::XML,
            'html' => \Maatwebsite\Excel\Excel::HTML,
            'ods' => \Maatwebsite\Excel\Excel::ODS,
        ];
        if (!isset($availableExportTypeArr[$exportType])) $exportType = 'xlsx';
        $table = $this->repository->getModel()->getTable();
        return Excel::download($export, 'export_' . $table . '.' . $exportType, $availableExportTypeArr[$exportType]);
    }

    protected function exporter()
    {
        return DefaultExport::class;
    }
}

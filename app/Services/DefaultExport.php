<?php

namespace App\Services;

use Maatwebsite\Excel\Concerns\FromArray;
use Prettus\Repository\Contracts\RepositoryInterface;

class DefaultExport implements FromArray
{

    /**
     * @var
     */
    protected $repository;


    /**
     * OrderExport constructor.
     *
     * @param $repository
     */
    public function __construct(RepositoryInterface $repository)
    {
        $this->repository = $repository->skipPresenter();
    }

    public function array(): array
    {
        $dataExport = [];
        $fillable = $this->repository->getModel()->getFillable();
        $headers = [
            'id' => 'id',
        ];
        foreach ($fillable as $field) $headers[$field] = $field;
        $dataExport[] = $headers;
        $records = $this->repository->all();
        foreach ($records as $record) {
            $record = $record->toArray();
            $row = [];
            foreach ($headers as $header) $row[$header] = $record[$header];
            $dataExport[] = $row;
        }
        return $dataExport;
    }
}

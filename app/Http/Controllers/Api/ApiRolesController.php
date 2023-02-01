<?php

namespace App\Http\Controllers\Api;

use App\Utils\ResponseBuilder;
use App\Services\RoleServices;
use App\Repositories\RoleRepository;
use App\Http\Requests\Api\RoleCreateRequest;
use App\Http\Requests\Api\RoleUpdateRequest;
use App\Http\Requests\Api\RoleSetScopeRequest;

/**
 * Class RolesController.
 *
 * @package namespace App\Http\Controllers;
 */
class ApiRolesController extends ApiBaseController
{
    /**
     * @var RoleServices
     */
    protected $roleServices;

    public function __construct(RoleRepository $repository, RoleServices $roleServices)
    {
        $this->roleServices = $roleServices;
        parent::__construct(
            $repository,
            RoleCreateRequest::class,
            RoleUpdateRequest::class
        );
    }

    public function setScopes(RoleSetScopeRequest $request)
    {
        $roleId = $request->input('role_id');
        $listScopes = $request->input('scope_ids');
        $role = $this->roleServices->setScopes($roleId, $listScopes);
        return ResponseBuilder::SuccessUpdate($role);
    }
}

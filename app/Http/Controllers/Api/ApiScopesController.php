<?php

namespace App\Http\Controllers\Api;

use App\Repositories\ScopeRepository;
use App\Http\Requests\Api\ScopeUpdateRequest;
use App\Http\Requests\Api\ScopeCreateRequest;

/**
 * Class RolesController.
 *
 * @package namespace App\Http\Controllers;
 */
class ApiScopesController extends ApiBaseController
{
    public function __construct(ScopeRepository $repository)
    {
        parent::__construct(
            $repository,
            ScopeCreateRequest::class,
            ScopeUpdateRequest::class
        );
    }
}

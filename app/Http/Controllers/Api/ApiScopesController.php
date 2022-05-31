<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\Api\ScopeCreateRequest;
use App\Http\Requests\Api\ScopeUpdateRequest;
use App\Presenters\DefaultPresenter;
use App\Repositories\ScopeRepository;
use App\Validators\DefaultValidator;
use App\Validators\ScopeValidator;

/**
 * Class RolesController.
 *
 * @package namespace App\Http\Controllers;
 */
class ApiScopesController extends ApiBaseController
{
    public function __construct(ScopeRepository $repository, DefaultValidator $validator, DefaultPresenter $presenter,)
    {
        parent::__construct(
            $repository,
            ScopeCreateRequest::class,
            ScopeUpdateRequest::class
        );
    }
}

<?php

namespace App\Repositories;

use App\Criteria\BaseCriteria;
use App\Entities\RoleScopes;
use App\Presenters\DefaultPresenter;
use App\Validators\DefaultValidator;
use App\Validators\RoleScopesValidator;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class RoleScopesRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class RoleScopesRepositoryEloquent extends BaseRepository implements RoleScopesRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return RoleScopes::class;
    }

    /**
     * Specify Validator class name
     *
     * @return mixed
     */
    public function validator()
    {
        return DefaultValidator::class;
    }

    /**
     * Specify Presenter class name
     *
     * @return mixed
     */
    public function presenter()
    {
        return DefaultPresenter::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(BaseCriteria::class));
    }

}

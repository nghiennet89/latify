<?php

namespace App\Repositories;

use App\Criteria\BaseCriteria;
use App\Entities\RoleScopes;
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
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(BaseCriteria::class));
    }

}

<?php

namespace App\Repositories;

use App\Entities\RoleScope;
use App\Criteria\BaseCriteria;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class RoleScopeRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class RoleScopeRepositoryEloquent extends BaseRepository implements RoleScopeRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return RoleScope::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(BaseCriteria::class));
    }

}

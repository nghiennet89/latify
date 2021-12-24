<?php

namespace App\Repositories;

use App\Criteria\BaseCriteria;
use App\Entities\Scope;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class ScopesRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class ScopeRepositoryEloquent extends BaseRepository implements ScopeRepository
{
    protected $fieldSearchable = [
        'name'  => 'like',
        'title' => 'like',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Scope::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(BaseCriteria::class));
    }

}

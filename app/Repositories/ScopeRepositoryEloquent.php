<?php

namespace App\Repositories;

use App\Criteria\BaseCriteria;
use App\Entities\Scope;
use App\Presenters\DefaultPresenter;
use App\Validators\DefaultValidator;
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

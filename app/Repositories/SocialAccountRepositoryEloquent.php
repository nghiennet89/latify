<?php

namespace App\Repositories;

use App\Criteria\BaseCriteria;
use App\Entities\SocialAccount;
use App\Presenters\DefaultPresenter;
use App\Validators\DefaultValidator;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class SocialAccountRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class SocialAccountRepositoryEloquent extends BaseRepository implements SocialAccountRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return SocialAccount::class;
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

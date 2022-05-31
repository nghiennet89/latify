<?php

namespace App\Repositories;

use App\Criteria\NotificationCriteria;
use App\Presenters\DefaultPresenter;
use App\Validators\DefaultValidator;
use Illuminate\Notifications\DatabaseNotification;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class UserRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class NotificationRepositoryEloquent extends BaseRepository implements NotificationRepository
{
    protected $fieldSearchable = [];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DatabaseNotification::class;
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
        $this->pushCriteria(app(NotificationCriteria::class));
    }

}

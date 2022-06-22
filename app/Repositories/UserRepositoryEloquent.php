<?php

namespace App\Repositories;

use App\Criteria\UserCriteria;
use App\Entities\User;
use App\Presenters\DefaultPresenter;
use App\Validators\UserValidator;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class UserRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class UserRepositoryEloquent extends BaseRepository implements UserRepository
{
    protected $fieldSearchable = [
        'name'    => 'like',
        'email'   => 'like',
        'role_id' => '=',
    ];

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return User::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(UserCriteria::class));
    }

}

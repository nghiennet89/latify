<?php

namespace App\Criteria;

use App\Entities\User;
use App\Exceptions\ApiException;
use Illuminate\Support\Facades\Auth;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class BaseCriteria.
 *
 * @package namespace App\Criteria;
 */
class NotificationCriteria extends BaseCriteria
{
    public function apply($model, RepositoryInterface $repository)
    {
        $user = Auth::user();
        if ($user) $model = $model->where('notifiable_type', User::class)->where('notifiable_id', $user->id);
        else throw new ApiException('User not found');
        return parent::apply($model, $repository);
    }
}

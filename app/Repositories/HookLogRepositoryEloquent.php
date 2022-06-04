<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\HookLogRepository;
use App\Entities\HookLog;
use App\Validators\HookLogValidator;

/**
 * Class HookLogRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class HookLogRepositoryEloquent extends BaseRepository implements HookLogRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return HookLog::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}

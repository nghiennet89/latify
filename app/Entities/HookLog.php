<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class HookLog.
 *
 * @package namespace App\Entities;
 */
class HookLog extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['user_id', 'hook_url', 'hook_data', 'hook_result', 'status'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

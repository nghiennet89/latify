<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;

/**
 * Class UserTransformer.
 *
 * @package namespace App\Transformers;
 */
class DefaultTransformer extends TransformerAbstract
{
    /**
     * Transform the entity.
     *
     * @param $model
     *
     * @return array
     */
    public function transform($model)
    {
        return $model->toArray();
    }
}

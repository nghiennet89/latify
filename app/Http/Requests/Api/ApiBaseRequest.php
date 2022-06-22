<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\Common\ApiFormRequestTrait;

class ApiBaseRequest extends FormRequest
{
    use ApiFormRequestTrait;
}

<?php

namespace App\Http\Requests\Api;

class UserCreateRequest extends ApiBaseRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'     => 'required|string',
            'password' => 'required|string|min:8',
            'email'    => 'required|email|unique:users,email',
        ];
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Events\BaseEvent;
use Illuminate\Http\Request;
use App\Services\UserServices;
use App\Utils\ResponseBuilder;
use Lcobucci\JWT\Configuration;
use App\Validators\UserValidator;
use Illuminate\Http\JsonResponse;
use App\Notifications\BaseBroadcast;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Api\UserCreateRequest;
use App\Http\Requests\Api\UserUpdateRequest;
use App\Http\Requests\Api\UserAddRoleRequest;
use App\Http\Requests\Api\UserRegisterRequest;
use App\Http\Requests\Api\UserChangePasswordRequest;

class ApiUsersController extends ApiBaseController
{
    /**
     * @var UserServices
     */
    protected $userServices;

    /**
     * @var mixed
     */
    protected $clientId;

    /**
     * @var mixed
     */
    protected $clientSecret;

    /**
     * ApiUsersController constructor.
     *
     * @param UserServices   $userServices
     * @param UserRepository $repository
     * @param UserValidator  $validator
     */
    public function __construct(UserRepository $repository, UserServices $userServices)
    {
        parent::__construct(
            $repository,
            UserCreateRequest::class,
            UserUpdateRequest::class
        );
        $this->userServices = $userServices;
    }

    /**
     * @param \App\Http\Requests\Api\UserCreateRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     * @throws \App\Exceptions\ApiException
     */
    public function userCreate(UserCreateRequest $request)
    {
        $registerData = $this->userServices->create($request->all());

        if (!$registerData) ResponseBuilder::FailCreate();

        return ResponseBuilder::SuccessCreate($registerData);
    }

    /**
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function logout(Request $request)
    {
        $user = $request->user();
        if ($user) $user->token()->revoke();
        return ResponseBuilder::Success(null, __('Logout success'));

    }


    /**
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function info()
    {
        if (!auth()->user()) return ResponseBuilder::FailGet();
        $userId = auth()->user()->id;
        return $this->repository->with(['role', 'role.scopes'])->find($userId);
    }

    /**
     * Register user
     *
     * @param UserRegisterRequest $registerRequest
     *
     * @return JsonResponse
     */
    public function register(UserRegisterRequest $registerRequest)
    {
        $data = $registerRequest->all();
        $registerData = $this->userServices->register($data);

        if (!$registerData) ResponseBuilder::FailCreate();

        return ResponseBuilder::Success($registerData, __('Register success'));
    }

    /**
     * Resend the email verification notification.
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function resend(Request $request)
    {
        $user = $request->user();
        if ($request->user()->hasVerifiedEmail()) return ResponseBuilder::Success($user, __('Email verified'));

        $user->sendEmailVerificationNotification();

        return ResponseBuilder::Success(null, __('Email sent'));
    }

    /**
     * @param UserChangePasswordRequest $request
     * @param                           $id
     *
     * @return JsonResponse
     */
    public function changePassword(Request $request, $id)
    {
        //check user
        $user = $this->repository->find($id);
        if (!$user) return ResponseBuilder::Fail('User not found');
        $newPassword = $request->input('password');
        //update new password for user
        $dataResponse = $this->userServices->changePassword($newPassword, $user->id);
        if (!$dataResponse) return ResponseBuilder::FailUpdate();
        return ResponseBuilder::SuccessUpdate();
    }

    /**
     * @param \App\Http\Requests\Api\UserAddRoleRequest $request
     * @param \App\Repositories\UserRepository          $userRepository
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function addRole(UserAddRoleRequest $request, UserRepository $userRepository): JsonResponse
    {
        $email = $request->user_email;
        $userId = $request->user_id;
        $roleId = $request->role_id;
        $user = $userRepository->findByField('email', $email, '*')->first();
        if (!$user) $user = $userRepository->find($userId);
        if (!$user) return ResponseBuilder::FailUpdate();

        $dataResponse = $this->userServices->addRoleForUser($roleId, $user->id);
        if (!$dataResponse) return ResponseBuilder::FailUpdate();

        return ResponseBuilder::SuccessUpdate($dataResponse);
    }

    /**
     * @param         $input
     * @param         $id
     *
     * @return JsonResponse
     */
    public function updateItem($input, $id)
    {
        $password = data_get($input, 'password');
        if ($password !== null) {
            $input['password'] = Hash::make($password);
        }
        return $this->repository->update($input, $id);
    }

    /**
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function createApiKey(Request $request): JsonResponse
    {
        $user = Auth::user();
        if ($user->api_key) {
            $tokenId = Configuration::forUnsecuredSigner()->parser()->parse($user->api_key)->claims()->get('jti');
            $token = $user->tokens()->find($tokenId);
            $token->revoke();
        }
        $scopes = $user->listScopes();
        $user->api_key = $user->createToken('API-KEY-' . $user->id, $scopes)->accessToken;
        $user->save();
        $apiKey = $user->api_key;
        return ResponseBuilder::SuccessCreate($apiKey);
    }

    /**
     * @return mixed
     */
    public function sampleNotification()
    {
        $user = Auth::user();
        return $user->notify(new BaseBroadcast('Test BaseBroadcast ' . $user->name));
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function sampleEvent()
    {
        event(new BaseEvent('Test BaseEvent'));
        return ResponseBuilder::Success();
    }
}

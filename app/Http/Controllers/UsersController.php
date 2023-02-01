<?php

namespace App\Http\Controllers;

use App\Services\UserServices;
use App\Utils\ResponseBuilder;
use App\Validators\UserValidator;
use Illuminate\Routing\Redirector;
use App\Repositories\UserRepository;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Auth\Access\AuthorizationException;
use App\Http\Requests\Api\UserChangePasswordRequest;

/**
 * Class UsersController.
 *
 * @package namespace App\Http\Controllers;
 */
class UsersController extends Controller
{
    /**
     * @var UserRepository
     */
    protected $repository;

    /**
     * @var UserValidator
     */
    protected $validator;

    protected $userServices;

    /**
     * UsersController constructor.
     *
     * @param UserRepository             $repository
     * @param UserValidator              $validator
     * @param \App\Services\UserServices $userServices
     */
    public function __construct(UserRepository $repository, UserValidator $validator, UserServices $userServices)
    {
        $this->repository = $repository;
        $this->validator = $validator;
        $this->userServices = $userServices;
    }

    /**
     * @param $id
     * @param $hash
     *
     * @return Application|RedirectResponse|Redirector
     * @throws AuthorizationException
     */
    public function verify($id, $hash)
    {
        $user = $this->repository->find($id);

        if (!hash_equals($id, (string)$user->getKey())) {
            throw new AuthorizationException;
        }
        if (!hash_equals((string)$hash, sha1($user->getEmailForVerification()))) {
            throw new AuthorizationException;
        }
        if ($user->hasVerifiedEmail()) {
            return redirect(route('verification.verified'));
        }
        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }
        return redirect(route('verification.verified'))->with('verified', true);
    }

    public function changePassword(UserChangePasswordRequest $request)
    {
        $oldPassword = $request->input('old_password');
        //check if pasword is valid
        $user = Auth::user();
        if (!Hash::check($oldPassword, $user->password)) return ResponseBuilder::Fail('Invalid password');
        $newPassword = $request->input('password');
        $dataResponse = $this->userServices->changePassword($newPassword, $user->id);
        if (!$dataResponse) return ResponseBuilder::FailUpdate();
        return ResponseBuilder::SuccessUpdate();
    }
}

<?php

namespace App\Providers;

use App\Repositories\RoleRepository;
use App\Repositories\UserRepository;
use App\Repositories\ScopeRepository;
use App\Repositories\HookLogRepository;
use Illuminate\Support\ServiceProvider;
use App\Repositories\RoleScopeRepository;
use App\Repositories\NotificationRepository;
use App\Repositories\RoleRepositoryEloquent;
use App\Repositories\UserRepositoryEloquent;
use App\Repositories\ScopeRepositoryEloquent;
use App\Repositories\SocialAccountRepository;
use App\Repositories\HookLogRepositoryEloquent;
use App\Repositories\RoleScopeRepositoryEloquent;
use App\Repositories\NotificationRepositoryEloquent;
use App\Repositories\SocialAccountRepositoryEloquent;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(RoleRepository::class, RoleRepositoryEloquent::class);
        $this->app->bind(UserRepository::class, UserRepositoryEloquent::class);
        $this->app->bind(SocialAccountRepository::class, SocialAccountRepositoryEloquent::class);
        $this->app->bind(RoleScopeRepository::class, RoleScopeRepositoryEloquent::class);
        $this->app->bind(ScopeRepository::class, ScopeRepositoryEloquent::class);
        $this->app->bind(NotificationRepository::class, NotificationRepositoryEloquent::class);
        $this->app->bind(HookLogRepository::class, HookLogRepositoryEloquent::class);
        //:end-bindings:
    }
}

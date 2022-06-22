<?php

namespace App\Providers;

use App\Repositories\HookLogRepository;
use App\Repositories\HookLogRepositoryEloquent;
use App\Repositories\NotificationRepository;
use App\Repositories\NotificationRepositoryEloquent;
use App\Repositories\RoleRepository;
use App\Repositories\RoleRepositoryEloquent;
use App\Repositories\RoleScopesRepository;
use App\Repositories\RoleScopesRepositoryEloquent;
use App\Repositories\ScopeRepository;
use App\Repositories\ScopeRepositoryEloquent;
use App\Repositories\SocialAccountRepository;
use App\Repositories\SocialAccountRepositoryEloquent;
use App\Repositories\UserRepository;
use App\Repositories\UserRepositoryEloquent;
use Illuminate\Support\ServiceProvider;

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
        $this->app->bind(RoleScopesRepository::class, RoleScopesRepositoryEloquent::class);
        $this->app->bind(ScopeRepository::class, ScopeRepositoryEloquent::class);
        $this->app->bind(NotificationRepository::class, NotificationRepositoryEloquent::class);
        $this->app->bind(HookLogRepository::class, HookLogRepositoryEloquent::class);
        //:end-bindings:
    }
}

<?php

use App\Http\Controllers\Api\ApiNotificationController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:api', 'verified']], function () {
    Route::get('/', [ApiNotificationController::class, 'index']);
    Route::get('/{id}', [ApiNotificationController::class, 'show']);
    Route::post('/mark-as-read', [ApiNotificationController::class, 'markAsRead']);
    Route::post('/count-unread', [ApiNotificationController::class, 'countUnread']);

});


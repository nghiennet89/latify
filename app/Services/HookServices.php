<?php

namespace App\Services;

use App\Entities\User;
use App\Entities\HookLog;
use App\Utils\ResponseBuilder;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;

/**
 * Class UserService
 *
 * @package App\Services
 */
class HookServices
{
    public function __construct()
    {

    }

    public static function dispatchHook(User $user, $data)
    {
        $hookUrl = $user->webhook_url;
        if (filter_var($hookUrl, FILTER_VALIDATE_URL) === false) return;

        if (is_string($data) && is_array(json_decode($data, true))) {
            $data = json_decode($data, true);
        }
        if (!is_array($data)) $data = json_decode(json_encode($data), true);
        $response = Http::post($hookUrl, $data);
        if ($user->store_hook_log) {
            $hookLog = new HookLog();
            $hookLog->user_id = $user->id;
            $hookLog->hook_url = $hookUrl;
            $hookLog->hook_data = json_encode($data);
            $hookLog->hook_result = $response->body();
            $hookLog->status = $response->status();
            $hookLog->save();
        }
    }

    public static function handleHook($data)
    {
        Log::channel('dump')->info('-------------HOOK-HANDLE-------------');
        Log::channel('dump')->info(json_encode($data));
        ResponseBuilder::Success('success');
    }
}

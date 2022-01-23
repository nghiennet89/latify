<?php

namespace App\Http\Controllers\Api;

use App\Repositories\NotificationRepository;
use App\Utils\ResponseBuilder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * Class RolesController.
 *
 * @package namespace App\Http\Controllers;
 */
class ApiNotificationController extends ApiBaseController
{

    protected $repository;

    public function __construct(NotificationRepository $repository)
    {
        $this->repository = $repository;
        parent::__construct($repository);
    }

    public function getUnread()
    {

    }

    public function markAsRead(Request $request)
    {
        try {
            $ids = $request->input('ids', 'all');
            if ($ids === 'all') Auth::user()->unreadNotifications()->get()->markAsRead();
            else {
                if (!is_array($ids)) throw new \Exception('Param ids must be an array');
                Auth::user()->unreadNotifications()->whereIn('id', $ids)->get()->markAsRead();
            }
            return ResponseBuilder::Success(null, 'Marked as read');
        } catch (\Exception $e) {
            return ResponseBuilder::Fail('Update failed : ' . $e->getMessage());
        }
    }

    public function countUnread()
    {
        try {
            $count = Auth::user()->unreadNotifications()->count();
            return ResponseBuilder::Success($count);
        } catch (\Exception $e) {
            return ResponseBuilder::Fail('Get failed : ' . $e->getMessage());
        }
    }
}

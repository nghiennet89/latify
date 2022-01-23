<?php

namespace App\Listeners;

use App\Events\BaseEvent;
use Illuminate\Support\Facades\Log;

class BaseEventListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param BaseEvent $event
     *
     * @return void
     */
    public function handle(BaseEvent $event)
    {
        Log::info('---------Base event handle------------');
        Log::info(json_encode($event->getData()));
    }
}

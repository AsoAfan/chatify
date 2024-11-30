<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMessageRequest;
use App\Models\Message;
use Auth;

class MessageController extends Controller
{
    public function store(StoreMessageRequest $request)
    {
        $message = Message::create([
            "body" => $request->body,
            "conversation_id" => $request->conversation_id,
            "user_id" => Auth::id()
        ]);

        return $this->created(['message' => $message]);
    }
}

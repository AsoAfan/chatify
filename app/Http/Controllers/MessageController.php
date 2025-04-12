<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMessageRequest;
use App\Models\Conversation;
use App\Models\Message;
use App\Notifications\MessageSentNotification;
use Auth;

class MessageController extends Controller
{
    public function store(StoreMessageRequest $request)
    {
        $user = Auth::user();
        $message = Message::create([
            "body" => $request->body,
            "conversation_id" => $request->conversation_id,
            "user_id" => $user->id
        ]);

        $conversation = Conversation::find($request->conversation_id)->first();

        $otherUser = $conversation->user1->id == $user->id ? $conversation->user2 : $conversation->user1;

        $message->load("user");

        $otherUser->notify(new MessageSentNotification($request->conversation_id, $message, $otherUser->id));
//        $user->notify(new MessageSentNotification($request->conversation_id, $message));


        return $this->created(['message' => $message]);
    }

    public function seen(Message $message)
    {
        $message->update(["is_seen" => true]);
        return $this->success();
    }
}

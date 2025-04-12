<?php

use App\Models\Conversation;

Broadcast::channel("online-users", function ($user) {
    return auth("sanctum")->check() ? $user : null;
});

Broadcast::channel("user.{id}", function ($user, $id) {
    return $user->id == $id;
});

Broadcast::channel("chat.{id}", function ($user, $id) {
    $conversation = Conversation::find($id);
    return $conversation->id == $id;
});

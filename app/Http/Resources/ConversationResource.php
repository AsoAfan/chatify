<?php

namespace App\Http\Resources;

use App\Models\Conversation;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Conversation */
class ConversationResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
//            'user1_id' => $this->user1_id,
//            'user2_id' => $this->user2_id,
            "messages" => $this->messages,
            'created_at' => $this->created_at->diffForHumans(),
            'updated_at' => $this->updated_at,
//            "user" ,
//            'messages_count' => $this->messages_count,
//            'user1_count' => $this->user1_count,
//            'user2_count' => $this->user2_count,
            'user1' => $this->user1,
            'user2' => $this->user2,
        ];
    }
}

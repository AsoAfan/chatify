<?php

namespace App\Http\Resources;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Message */
class MessageResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'body' => $this->body,
//            'conversation_id' => $this->conversation_id,
            'is_seen' => $this->is_seen,
            'created_at' => $this->created_at,
//            'updated_at' => $this->updated_at,

            'user' => new UserResource($this->whenLoaded('user')),
        ];
    }
}

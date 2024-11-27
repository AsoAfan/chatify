<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin User */
class UserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'username' => $this->username,
            'email' => $this->email,
            "image_url" => $this->image_url,
            'createdAt' => $this->created_at->diffForHumans(),
            'updatedAt' => $this->updated_at->diffForHumans(),
//            'notifications_count' => $this->notifications_count,
//            'read_notifications_count' => $this->read_notifications_count,
//            'unread_notifications_count' => $this->unread_notifications_count,
        ];
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "username" => ["required", "min:3", "unique:users,username"],
            "email" => ["required", "email"],
            "password" => ["required", "min:8", "confirmed"],
            "profile_image" => ["file", "image"]
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}

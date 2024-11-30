<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreConversationRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "user_id" => "required|exists:users,id",
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}

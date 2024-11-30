<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMessageRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'body' => ['required'],
            'conversation_id' => ['required', 'integer', "exists:conversations,id"],
//            'user_id' => ['required', 'exists:users'],
//            'is_seen' => ['boolean'],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}

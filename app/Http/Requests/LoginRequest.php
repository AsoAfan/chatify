<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
//    public function authorize(): bool
//    {
//        return false;
//    }

    public function rules(): array
    {
        return [
            "username" => "required|min:3",
            "password" => "required|min:8",
        ];
    }
}

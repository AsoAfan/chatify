<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function __invoke(LoginRequest $request)
    {
        if (!Auth::attempt($request->validated())) {
            return $this->forbidden("Invalid credentials");
        }
        $user = User::where("username", $request->username)->first();
        $token = $user->createToken("$request->username|{$request->ip()}");
        return $this->success(
            data: [
                "user" => new UserResource($user),
                "token" => $token->plainTextToken
            ]
        );
    }
}

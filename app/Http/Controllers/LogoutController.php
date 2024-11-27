<?php

namespace App\Http\Controllers;

use Auth;

class LogoutController extends Controller
{
    public function __invoke()
    {
        $user = Auth::user();
        $user->tokens()->each(fn($token) => $token->delete());
        return $this->noContent();
    }
}

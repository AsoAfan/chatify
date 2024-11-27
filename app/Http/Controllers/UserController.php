<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    public function show()
    {

        return $this->success([
            "user" => new UserResource(Auth::user())
        ]);
    }

    public function store(StoreUserRequest $request)
    {
        if ($request->hasFile("profile_image")) {
            $image = $request->file("profile_image");
            $imageExt = $image->getClientOriginalExtension();
            $uploadName = "{$request->username}_image_" . time() . "." . $imageExt;
            $path = $image->storeAs("users", $uploadName, "public");
        }

        $user = User::create([
            ...$request->only(["username", "email", "password"]),
            "image_url" => asset("/storage/" . ($path ?? null))
        ]);

        $token = $user->createToken("token")->plainTextToken;

        return $this->created([
                "user" => new UserResource($user),
                "token" => $token
            ]
        );
    }
}

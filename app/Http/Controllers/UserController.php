<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Log;

class UserController extends Controller
{
    public function index()
    {

    }

    public function show()
    {

        return $this->success([
            "user" => new UserResource(Auth::user())
        ]);
    }

    public function store(StoreUserRequest $request)
    {
        Log::error("jij" . $request->hasFile("profile_image"));
        Log::info($request->file("profile_image")->path());

        if ($request->hasFile("profile_image")) {
            $image = $request->file("profile_image");
            $imageExt = $image->getClientOriginalExtension();
            $uploadName = "{$request->username}_image_" . time() . "." . $imageExt;
            Log::error("uploading image", [$uploadName]);
            $path = $image->storeAs("users", $uploadName, "public");
        }

        $user = User::create([
            ...$request->except(["profile_image", "password_confirmation"]),
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

<?php

use App\Http\Controllers\ConversationController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::get("/users/search", [UserController::class, 'search']);

Route::middleware('guest:sanctum')->group(function () {

    Route::post("/login", LoginController::class);
    Route::post("/signup", [UserController::class, "store"]);
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post("/logout", LogoutController::class);

    Route::get("/user", [UserController::class, "show"]);

    Route::post("/conversation", [ConversationController::class, "store"]);
    Route::post("/message", [MessageController::class, "store"]);
    Route::patch("/seen/{message}", [MessageController::class, "seen"]);
}); 

<?php

use App\Http\Controllers\LogoutController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::post("/signup", [UserController::class, "store"]);

Route::post("/logout", LogoutController::class)->middleware("auth:sanctum");

Route::get("/user", [UserController::class, "show"])->middleware("auth:sanctum");

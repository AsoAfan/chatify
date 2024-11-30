<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreConversationRequest;
use App\Http\Resources\MessageResource;
use App\Models\Conversation;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;

class ConversationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreConversationRequest $request)
    {
        $conversation = Conversation::create([
            "user1_id" => Auth::id(),
            "user2_id" => $request->input("user_id"),
        ]);

        $otherUser = User::where("id", $request->input("user_id"))->first();

        return $this->success([
            "user" => $otherUser,
            "messages" => MessageResource::collection($conversation->messages),
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(StoreConversationRequest $request)
    {
    }

    /**
     * Display the specified resource.
     */
    public function show(Conversation $conversation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Conversation $conversation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Conversation $conversation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Conversation $conversation)
    {
        //
    }
}

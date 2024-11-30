<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('conversation_message', function (Blueprint $table) {
            $table->id();
            $table->foreignId("conversation_id")->constrained();
            $table->foreignId("message_id")->constrained();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('conversation_message');
    }
};

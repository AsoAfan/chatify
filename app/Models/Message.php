<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Message extends Model
{

    protected $with = ["user"];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

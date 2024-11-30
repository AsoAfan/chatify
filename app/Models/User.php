<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable, HasApiTokens;


    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function getConversations()
    {
        return Conversation::where('user1_id', $this->id)
            ->orWhere('user2_id', $this->id)
            ->get();
    }

    public function scopeSearch(Builder $query, string $search): Builder
    {

        $query->where("username", "LIKE", "%{$search}%");


        return $query->limit(5);
    }

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    protected function imageUrl(): Attribute
    {
        return Attribute::make(
            get: fn($value) => !$value ? asset("/storage/users/default.jpg") : $value,
        );
    }
}

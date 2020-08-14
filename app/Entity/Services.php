<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
    protected $fillable = ['service'];

    protected $casts = [
        'service' => 'array',
    ];
}

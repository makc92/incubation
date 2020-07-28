<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model;

class Info extends Model
{
    protected $table = 'info';
    public $timestamps = false;

    protected $fillable = [
        'university','about', 'services','contact','social'
    ];

    protected $casts = [
        'about' => 'array',
        'services' => 'array',
        'contact' => 'array',
        'social' => 'array',
    ];
}

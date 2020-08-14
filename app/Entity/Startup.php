<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model;
use KingOfCode\Upload\Uploadable;

class Startup extends Model
{
    use Uploadable;

    protected $uploadableImages = [
        'thumbnail',
    ];

    protected $fillable = [
        'title',
    ];
}

<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model;
use KingOfCode\Upload\Uploadable;

class Partner extends Model
{
    use Uploadable;
    protected $guarded = [];

    protected $uploadableImages = [
        'thumbnail'=> ['thumb' => 150],
    ];

    protected $imageResizeTypes = [
        'medium' => false,
        'normal' => false,
    ];
}

<?php

namespace App\Entity;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use KingOfCode\Upload\Uploadable;

/**
 * App\Entity\Slider
 *
 * @property int $id
 * @property string|null $thumbnail
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Slider newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Slider newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Slider query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Slider whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Slider whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Slider whereThumbnail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Slider whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Slider extends Model
{
    protected $table = 'slider';
    use Uploadable;
    protected $guarded = [];

    protected $uploadableImages = [
        'thumbnail'=> ['thumb' => 150, 'medium' => false, 'normal' => 1920],
    ];

    public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-m-Y');

    }
}

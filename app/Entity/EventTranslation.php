<?php

namespace App\Entity;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Entity\EventTranslation
 *
 * @property int $id
 * @property string $locale
 * @property int $event_id
 * @property string $title
 * @property string $slug
 * @property string $content
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\EventTranslation findSimilarSlugs($attribute, $config, $slug)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\EventTranslation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\EventTranslation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\EventTranslation query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\EventTranslation whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\EventTranslation whereEventId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\EventTranslation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\EventTranslation whereLocale($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\EventTranslation whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\EventTranslation whereTitle($value)
 * @mixin \Eloquent
 */
class EventTranslation extends Model
{
    public $timestamps = false;
    protected $fillable  = ['content'];
}

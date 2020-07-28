<?php

namespace App\Entity;

use Astrotomic\Translatable\Translatable;
use Carbon\Carbon;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use KingOfCode\Upload\Uploadable;

/**
 * App\Entity\Event
 *
 * @property int $id
 * @property string|null $thumbnail
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Entity\EventTranslation|null $translation
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Entity\EventTranslation[] $translations
 * @property-read int|null $translations_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event listsTranslations($translationField)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event notTranslatedIn($locale = null)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event orWhereTranslation($translationField, $value, $locale = null)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event orWhereTranslationLike($translationField, $value, $locale = null)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event orderByTranslation($translationField, $sortMethod = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event translatedIn($locale = null)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event whereThumbnail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event whereTranslation($translationField, $value, $locale = null, $method = 'whereHas', $operator = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event whereTranslationLike($translationField, $value, $locale = null)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event withTranslation()
 * @mixin \Eloquent
 * @property string $title
 * @property string $slug
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event findSimilarSlugs($attribute, $config, $slug)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Event whereTitle($value)
 */
class Event extends Model
{
    use Uploadable, Translatable, Sluggable;

    protected $fillable  = ['title'];

    public $translatedAttributes = ['content'];

    protected $uploadableImages = [
        'thumbnail'
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }


    public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-m-Y');

    }
}

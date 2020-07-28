<?php

namespace App\Entity;

use Astrotomic\Translatable\Translatable;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use KingOfCode\Upload\Uploadable;

/**
 * App\Entity\News
 *
 * @property int $id
 * @property string|null $thumbnail
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Entity\NewsTranslation|null $translation
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Entity\NewsTranslation[] $translations
 * @property-read int|null $translations_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\News listsTranslations($translationField)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\News newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\News newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\News notTranslatedIn($locale = null)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\News orWhereTranslation($translationField, $value, $locale = null)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\News orWhereTranslationLike($translationField, $value, $locale = null)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\News orderByTranslation($translationField, $sortMethod = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\News query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\News translated()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\News translatedIn($locale = null)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\News whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\News whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\News whereThumbnail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\News whereTranslation($translationField, $value, $locale = null, $method = 'whereHas', $operator = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\News whereTranslationLike($translationField, $value, $locale = null)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\News whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\News withTranslation()
 * @mixin \Eloquent
 */
class News extends Model
{
    use Uploadable, Translatable;


    public $translatedAttributes = ['title', 'slug', 'content'];

    protected $uploadableImages = [
        'thumbnail'
    ];

    public static function add($fields)
    {
        $post = new static;
        $post->fill($fields);
        $post->save();
        return $post;
    }

    public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-m-Y');

    }
}

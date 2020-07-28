<?php

namespace App\Entity;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Entity\NewsTranslation
 *
 * @property int $id
 * @property string $locale
 * @property int $news_id
 * @property string $title
 * @property string $slug
 * @property string $content
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\NewsTranslation findSimilarSlugs($attribute, $config, $slug)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\NewsTranslation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\NewsTranslation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\NewsTranslation query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\NewsTranslation whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\NewsTranslation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\NewsTranslation whereLocale($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\NewsTranslation whereNewsId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\NewsTranslation whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\NewsTranslation whereTitle($value)
 * @mixin \Eloquent
 */
class NewsTranslation extends Model
{
    use Sluggable;
    public $timestamps = false;
    protected $fillable  = ['title', 'content'];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
}

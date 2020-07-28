<?php

namespace App\Entity\Applications;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Entity\Applications\Tracker
 *
 * @property int $id
 * @property string|null $fullname
 * @property string|null $company
 * @property string|null $position
 * @property string|null $phone
 * @property string|null $email
 * @property string|null $sphere
 * @property string|null $university
 * @property string|null $graduate
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Tracker newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Tracker newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Tracker query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Tracker whereCompany($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Tracker whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Tracker whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Tracker whereFullname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Tracker whereGraduate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Tracker whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Tracker wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Tracker wherePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Tracker whereSphere($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Tracker whereUniversity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Tracker whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Tracker extends Model
{
    protected $table = 'tracker_applications';

    protected $fillable = ['fullname','company','position','phone','email','sphere','university', 'graduate'];
}

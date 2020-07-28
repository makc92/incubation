<?php

namespace App\Entity\Applications;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Entity\Applications\Mentor
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
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Mentor newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Mentor newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Mentor query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Mentor whereCompany($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Mentor whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Mentor whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Mentor whereFullname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Mentor whereGraduate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Mentor whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Mentor wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Mentor wherePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Mentor whereSphere($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Mentor whereUniversity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Mentor whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Mentor extends Model
{
    protected $table = 'mentor_applications';

    protected $fillable = ['fullname','company','position','phone','email','sphere','university', 'graduate'];
}

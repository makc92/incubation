<?php

namespace App\Entity\Applications;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Entity\Applications\Event
 *
 * @property int $id
 * @property string|null $fullname
 * @property string|null $university
 * @property string|null $course
 * @property string|null $faculty
 * @property string|null $phone
 * @property string|null $email
 * @property string|null $event
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Event newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Event newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Event query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Event whereCourse($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Event whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Event whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Event whereEvent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Event whereFaculty($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Event whereFullname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Event whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Event wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Event whereUniversity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Event whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Event extends Model
{
    protected $table = 'event_applications';

    protected $fillable = ['fullname','university','course','faculty','phone','email','event'];

}

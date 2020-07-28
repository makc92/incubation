<?php

namespace App\Entity\Applications;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use KingOfCode\Upload\Uploadable;

/**
 * App\Entity\Applications\Startup
 *
 * @property int $id
 * @property string|null $fullname
 * @property string|null $university
 * @property string|null $course
 * @property string|null $faculty
 * @property string|null $phone
 * @property string|null $email
 * @property string|null $program
 * @property string|null $startup
 * @property string|null $industry
 * @property string|null $idea
 * @property string|null $presentation
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Startup newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Startup newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Startup query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Startup whereCourse($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Startup whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Startup whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Startup whereFaculty($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Startup whereFullname($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Startup whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Startup whereIdea($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Startup whereIndustry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Startup wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Startup wherePresentation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Startup whereProgram($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Startup whereStartup($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Startup whereUniversity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Entity\Applications\Startup whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Startup extends Model
{
    use Uploadable;
    protected $table = 'startup_applications';

    protected $fillable = ['fullname','university','course','faculty','phone','email','program','startup','industry','idea'];

    protected $uploadableFiles = [
        'presentation'
    ];
    public $uploadFolderName = 'StartupApplications';

    public const PROGRAM_INCUBATION = 'incubation';
    public const PROGRAM_ACCELERATION = 'acceleration';

    public static function industryList(): array
    {
        return ['Agrotech', 'Autotech', 'E-Commerce', 'E-Gov', 'Fintech', 'IoT', 'Medtech', 'Online Education', 'GameDev','Other'];
    }
    public static function add($fields)
    {
        $application = new static;
        $application->fill($fields);
        $application->save();
        return $application;
    }

    public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-m-Y H:i');
    }

}

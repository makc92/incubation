<?php

namespace App\Exports;

use App\Entity\Applications\Mentor;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class MentorExport  implements FromCollection, WithHeadings, ShouldAutoSize, WithStyles
{
    /**
    * @return \Illuminate\Support\Collection
    */

    public function collection()
    {
        return Mentor::get(['fullname','company','position','phone','email','sphere','university', 'graduate']);
    }
    public function headings(): array
    {
        return [
            'ФИО','Компания','Должность','Контактный номер','Email','Ваши основные компетенции и в какой сфере?','Наименование Вуза', 'Выпускник этого ВУЗА?'
        ];
    }
    public function styles(Worksheet $sheet)
    {
        return [
            1    => ['font' => ['bold' => true]],
        ];
    }
}

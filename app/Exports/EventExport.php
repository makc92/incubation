<?php

namespace App\Exports;

use App\Entity\Applications\Event;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class EventExport  implements FromCollection, WithHeadings, ShouldAutoSize, WithStyles
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Event::get(['fullname','university','course','faculty','phone','email','event']);
    }

    public function headings(): array
    {
        return [
            'ФИО','Наименование Вуза','Курс','Факультет','Контактный номер','Email','Мероприятие'
        ];
    }
    public function styles(Worksheet $sheet)
    {
        return [
            1    => ['font' => ['bold' => true]],
        ];
    }
}

<?php

namespace App\Exports;

use App\Entity\Applications\Startup;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class StartupExport implements FromCollection, WithHeadings, ShouldAutoSize, WithStyles
{
    public function headings(): array
    {
        return [
            'ФИО','Наименование ВУЗа','Курс','Факультет','Контактный номер','E-mail','Направление программы','Название проекта','Сфера проекта','Краткое описание проекта'
        ];
    }
    public function collection()
    {
        return Startup::get(['fullname','university','course','faculty','phone','email','program','startup','industry','idea']);
    }
    public function styles(Worksheet $sheet)
    {
        return [
            1    => ['font' => ['bold' => true]],
        ];
    }
}

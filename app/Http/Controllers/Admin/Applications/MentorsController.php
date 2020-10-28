<?php

namespace App\Http\Controllers\Admin\Applications;

use App\Entity\Applications\Mentor;
use App\Exports\MentorExport;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class MentorsController extends Controller
{
    public function index() {
        $applications = Mentor::all();
        return view('admin.applications.mentors.index', compact('applications'));
    }
    public function store(Request $request)
    {
        Mentor::create($request->all());
    }

    public function show(Mentor $mentor)
    {
        return view('admin.applications.mentors.show', compact('mentor'));
    }
    public function destroy(Mentor $mentor)
    {
        $mentor->delete();
        flash('Application deleted')->success();
        return redirect()->route('admin.mentors.index');
    }
    public function export(){
        return Excel::download(new MentorExport, 'mentor.xlsx');
    }
}

<?php

namespace App\Http\Controllers\Admin\Applications;

use App\Entity\Applications\Tracker;
use App\Exports\TrackerExport;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class TrackersController extends Controller
{
    public function index() {
        $applications = Tracker::all();
        return view('admin.applications.trackers.index', compact('applications'));
    }

    public function create(Request $request)
    {
        Tracker::create($request->all());
    }
    public function show(Tracker $tracker)
    {
        return view('admin.applications.trackers.show', compact('tracker'));
    }
    public function destroy(Tracker $tracker)
    {
        $tracker->delete();
        flash('Application deleted')->success();
        return redirect()->route('admin.trackers.index');
    }
    public function export(){
        return Excel::download(new TrackerExport, 'tracker.xlsx');
    }
}

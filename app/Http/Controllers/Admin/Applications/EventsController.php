<?php

namespace App\Http\Controllers\Admin\Applications;

use App\Entity\Applications\Event;
use App\Exports\EventExport;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class EventsController extends Controller
{
    public function index() {
        $applications = Event::all();
        return view('admin.applications.events.index', compact('applications'));
    }

    public function show(Event $event)
    {
        return view('admin.applications.events.show', compact('event'));
    }
    public function create(Request $request)
    {
        Event::create($request->all());
    }
    public function destroy(Event $event)
    {
        $event->delete();
        flash('Application deleted')->success();
        return redirect()->route('admin.events.index');
    }
    public function export(){
        return Excel::download(new EventExport, 'event.xlsx');
    }
}

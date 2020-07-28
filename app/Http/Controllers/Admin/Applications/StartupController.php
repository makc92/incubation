<?php

namespace App\Http\Controllers\Admin\Applications;

use App\Entity\Applications\Startup;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StartupController extends Controller
{
    public function index() {
        $applications = Startup::all();
        return view('admin.applications.startups.index', compact('applications'));
    }

    public function show(Startup $startup)
    {
        return view('admin.applications.startups.show', compact('startup'));
    }
    public function create(Request $request)
    {
        Startup::create($request->all());
    }
    public function destroy(Startup $startup)
    {
        $startup->delete();
        flash('Application deleted')->success();
        return redirect()->route('admin.startups.index');
    }

}

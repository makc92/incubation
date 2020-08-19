<?php

namespace App\Http\Controllers\Admin;

use App\Entity\Startup;
use App\Exports\StartupExport;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;


class StartupsController extends Controller
{

    public function index()
    {
        $startups = Startup::all();
        return view('admin.startups.index', compact('startups'));
    }

    public function create()
    {
        return view('admin.startups.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'thumbnail' => 'required',
        ]);
        $startup = Startup::create($request->all());
        flash('Startup added')->success();
        return redirect()->route('admin.startup.index');
    }

    public function show(Startup $startup)
    {
        //
    }

    public function edit(Startup $startup)
    {
        return view('admin.startups.edit', compact('startup'));
    }

    public function update(Request $request, Startup $startup)
    {
        $request->validate([
            'title' => 'required',
        ]);

        $startup->update($request->all());
        flash('Startup updated')->success();
        return redirect()->route('admin.startup.index');
    }

    public function destroy(Startup $startup)
    {
       $startup->delete();
       flash('Startup deleted')->success();
       return redirect()->route('admin.startup.index');
    }


}

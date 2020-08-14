<?php

namespace App\Http\Controllers\Admin;

use App\Entity\Partner;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PartnersController extends Controller
{
    public function index()
    {
        $partners = Partner::all();
        return view('admin.partners.index', compact('partners'));
    }

    public function create()
    {
        return view('admin.partners.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'thumbnail' => 'required',
        ]);
        $partner = Partner::create($request->all());
        flash('Partner added')->success();
        return redirect()->route('admin.partner.index');
    }
    public function destroy(Partner $partner)
    {
        $partner->delete();
        flash('Partner deleted')->success();
        return redirect()->route('admin.partner.index');
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Entity\Slider;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    public function index()
    {
        $sliders = Slider::all();
        return view('admin.slider.index', compact('sliders'));
    }

    public function create()
    {
        return view('admin.slider.create');
    }


    public function store(Request $request)
    {
        $request->validate([
            'thumbnail' => 'required',
        ]);


        $news = Slider::create($request->all());
        flash('Slider added')->success();
        return redirect()->route('admin.slider.index');
    }
    public function show($id)
    {
        //
    }

    public function edit(Slider $slider)
    {
        return view('admin.slider.edit', compact('slider'));
    }


    public function update(Request $request, Slider $slider)
    {
        $request->validate([
            'thumbnail' => 'required',
        ]);
        $slider->update($request->all());
        flash('Slider update')->success();
        return redirect()->route('admin.slider.index');
    }

    public function destroy(Slider $slider)
    {
        $slider->delete();
        flash('Slider deleted')->success();
        return redirect()->route('admin.slider.index');
    }
}

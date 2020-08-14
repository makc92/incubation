<?php

namespace App\Http\Controllers\Admin;

use App\Entity\Info;
use App\Http\Controllers\Controller;
use File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;

class InfoController extends Controller
{
    public function index() {
        $info = Info::first();
        return view('admin.info.index', compact('info'));
    }
    public function contact() {
        $info = Info::first();
        return view('admin.info.contact', compact('info'));
    }
    public function updateUniversity(Request $request, Info $info)
    {

      $this->validate($request, [
            'university' => 'required',
            'about.ru' => 'required',
            'about.uz' => 'required',
            'about.en' => 'required',
        ]);
        $info->update($request->all());
        flash('Информация изменена')->success();
        return redirect()->back();
    }

    public function updateContact(Request $request, Info $info)
    {
      /*  $this->validate($request, [
            'university' => 'required',
            'about.ru' => 'required',
            'about.uz' => 'required',
            'about.en' => 'required',
            'services.ru' => 'required',
            'services.uz' => 'required',
            'services.en' => 'required',
        ]);*/
        $info->update($request->all());
        flash('Информация изменена')->success();
        return redirect()->back();
    }


    public function showLogo() {
        return view('admin.logo');
    }
    public function logoUpload(Request $request) {
        $this->validate($request, [
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('logo')) {
            $image = $request->file('logo');
            $name = 'logo.png';
            $destinationPath = public_path('/images');
            $image->move($destinationPath, $name);
            flash('Image Upload successfully')->success();
            return back()->with('success','Image Upload successfully');
        }
    }
}

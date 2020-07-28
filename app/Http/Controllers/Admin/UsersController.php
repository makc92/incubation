<?php

namespace App\Http\Controllers\Admin;

use App\Entity\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UsersController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('admin.users.index', compact('users'));
    }

    public function create()
    {
        return view('admin.users.create');
    }
    public function store(Request $request, User $user)
    {
        $this->validate($request, [
            'name' => 'required',
            'fullname' => 'required',
            'email' => 'unique:users,email',
            'password' => 'required',
        ]);
        $user->fill($request->except(['password']));
        $user->generatePassword($request->get('password'));
        $user->save();
        flash('User was created')->success();
        return redirect()->route('admin.users.index');
    }
    public function show(User $user)
    {
        return view('admin.users.show', compact('user'));
    }

    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->route('admin.users.index');
    }

    public function edit(User $user)
    {
        return view('admin.users.edit', compact('user'));
    }
    public function update(Request $request,User $user) {
        $this->validate($request, [
            'name' => 'required',
            'fullname' => 'required',
            'email' =>  Rule::unique('users')->ignore($user)
        ]);
        $user->update($request->only(['name', 'email', 'fullname']));
        $user->generatePassword($request->get('password'));
        $user->save();
        flash('User information has been changed')->success();
        return redirect()->route('admin.users.show', compact('user'));
    }

}

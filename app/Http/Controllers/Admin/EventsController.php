<?php

namespace App\Http\Controllers\Admin;

use App\Entity\Event;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EventsController extends Controller
{
    public function index()
    {
        $events = Event::all();
        return view('admin.events.index', compact('events'));
    }

    public function create()
    {
        return view('admin.events.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'ru_content' => 'required',
            'uz_content' => 'required',
            'en_content' => 'required',
            'thumbnail' => 'required',
        ]);

        $event_data = [
            'ru' => [
                'content' => $request->input('ru_content'),
            ],
            'uz' => [
                'content' => $request->input('uz_content'),
            ],
            'en' => [

                'content' => $request->input('en_content'),
            ],
            'title' => $request->input('title'),
        ];

        $event = Event::create($event_data);
        flash('Event added')->success();
        return redirect()->route('admin.event.index');
    }
    public function show(Event $event)
    {
        return view('admin.events.show', compact('event'));
    }
    public function edit(Event $event)
    {
        return view('admin.events.edit', compact('event'));
    }

    public function update(Request $request, Event $event)
    {
        $request->validate([
            'title' => 'required',
            'ru_content' => 'required',
            'uz_content' => 'required',
            'en_content' => 'required',
        ]);

        $event_data = [
            'ru' => [
                'content' => $request->input('ru_content'),
            ],
            'uz' => [
                'content' => $request->input('uz_content'),
            ],
            'en' => [
                'content' => $request->input('en_content'),
            ],
            'title' => $request->input('title'),
        ];

        $event->slug = null;

        $event->update($event_data);
        flash('Event update')->success();
        return redirect()->route('admin.event.show', compact('event'));
    }

    public function destroy(Event $event)
    {
        $event->delete();
        flash('News deleted')->success();
        return redirect()->route('admin.event.index');
    }
}

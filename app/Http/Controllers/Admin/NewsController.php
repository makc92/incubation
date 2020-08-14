<?php

namespace App\Http\Controllers\Admin;

use App\Entity\News;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::all();
        return view('admin.news.index', compact('news'));
    }

    public function create()
    {
        return view('admin.news.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'ru_title' => 'required',
            'uz_title' => 'required',
            'en_title' => 'required',
            'ru_content' => 'required',
            'uz_content' => 'required',
            'en_content' => 'required',
            'thumbnail' => 'required',
        ]);
        $news_data = [
            'ru' => [
                'title' => $request->input('ru_title'),
                'content' => $request->input('ru_content'),
            ],
            'uz' => [
                'title' => $request->input('uz_title'),
                'content' => $request->input('uz_content'),
            ],
            'en' => [
                'title' => $request->input('en_title'),
                'content' => $request->input('en_content'),
            ],
        ];

        $news = News::create($news_data);
        flash('News added')->success();
        return redirect()->route('admin.news.index');
    }

    public function show(News $news)
    {
        return view('admin.news.show', compact('news'));
    }

    public function edit(News $news)
    {
        return view('admin.news.edit', compact('news'));
    }

    public function update(Request $request, News $news)
    {
        $request->validate([
            'ru_title' => 'required',
            'uz_title' => 'required',
            'en_title' => 'required',
            'ru_content' => 'required',
            'uz_content' => 'required',
            'en_content' => 'required',
        ]);

        $news_data = [
            'ru' => [
                'title' => $request->input('ru_title'),
                'content' => $request->input('ru_content'),
            ],
            'uz' => [
                'title' => $request->input('uz_title'),
                'content' => $request->input('uz_content'),
            ],
            'en' => [
                'title' => $request->input('en_title'),
                'content' => $request->input('en_content'),
            ],
        ];

        $news->translate('ru')->slug = null;
        $news->translate('uz')->slug = null;
        $news->translate('en')->slug = null;

        $news->update($news_data);
        flash('News update')->success();
        return redirect()->route('admin.news.show', compact('news'));
    }

    public function destroy(News $news)
    {
        $news->delete();
        flash('News deleted')->success();
        return redirect()->route('admin.news.index');
    }
}

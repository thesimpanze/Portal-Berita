<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\NewsCollection;
use Carbon\Carbon;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(4));
        return Inertia::render('Homepage',[
            'title' => 'PENS NEWS',
        'description' => 'Cek berita terbaru dari Pens News',
        'news' => $news,
        
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $path = null;
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
        }
        $news = new News();
        $news->title = $request->title;
        $news->description = $request->description;
        $news->category = $request->category;
        $news->image = $path;
        $news->author = auth()->user()->name;
        $news->save();
        return redirect()->back()->with('message', 'berita berhasil di Post');

    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        $myNews = $news::where('author',auth()->user()->name)->get();
        return Inertia::render('Dashboard',[
        'myNews' => $myNews
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news, Request $request)
    {
        return Inertia::render('Edit',[
            'myNews' => $news->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {

        News::where('id', $request->id)->update([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
        ]);
        return to_route('dashboard');
    }

    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( Request $request)
    {
        $news = News::find($request->id);
        $news->delete();
        return redirect()->back()->with('message', 'berita berhasil dihapus');

    }
    public function viewNews(News $news, Request $request)
    {
        return Inertia::render('View',[
            'News' => $news->find($request->id)
        ]);
    }
}

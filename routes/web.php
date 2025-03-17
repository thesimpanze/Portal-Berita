<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\NewsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [NewsController::class, 'index']);
Route::post('/news', [NewsController::class, 'store'])->middleware(['auth', 'verified'])->name('create.news');
Route::get('/news', [NewsController::class, 'show'])->middleware(['auth', 'verified'])->name('my.news');
Route::get('/news/edit', [NewsController::class, 'edit'])->middleware(['auth', 'verified'])->name('Edit');
Route::post('/news/update', [NewsController::class, 'update'])->middleware(['auth', 'verified'])->name('Update');
Route::post('/news/delete', [NewsController::class, 'destroy'])->middleware(['auth', 'verified'])->name('DeleteNews');
Route::get('/view', [NewsController::class, 'viewNews'])->middleware(['auth', 'verified'])->name('View');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/debug-image', function() {
    $path = 'images/TiOqfk7lqM90eDLupLChseSFYEq9yZb2B4PUo22e.png';
    return [
        'exists' => Storage::disk('public')->exists($path),
        'url' => Storage::url($path),
        'full_path' => storage_path('app/public/' . $path),
        'public_path' => public_path('storage/images/TiOqfk7lqM90eDLupLChseSFYEq9yZb2B4PUo22e.png'),
        'file_exists' => file_exists(public_path('storage/images/TiOqfk7lqM90eDLupLChseSFYEq9yZb2B4PUo22e.png'))
    ];
});
require __DIR__.'/auth.php';

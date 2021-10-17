<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'MainController@getPedidosMainView')->name('pedidos');
Route::middleware('auth:api')->post('/fileupload', 'FileUploadController@fileupload');
Route::middleware('auth:api')->get('/getimg', 'FileUploadController@getStorageImage');
Route::middleware('auth:api')->get('/getfecha', 'FileUploadController@getfecha');
Route::middleware('auth:api')->post('/getpdfreport', 'PDFReportsController@getPDFReport');
Route::get('/foo', function () {
    Artisan::call('storage:link');
});

//Route::get('/home', 'HomeController@index')->name('home');
/*
Route::get('/links', 'LinksController@getLinksView')->name('links');
Route::post('/links', 'LinksController@saveLink')->name('links');
*/

Auth::routes();
<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', 'Api\AuthController@login');
Route::post('/register', 'Api\AuthController@register');
Route::middleware('auth:api')->post('/registerfull', 'Api\AuthController@registerfull');
Route::middleware('auth:api')->post('/logout', 'Api\AuthController@logout');
Route::middleware('auth:api')->post('/whoami', 'Api\AuthController@whoami');
Route::middleware('auth:api')->post('/usersbyrole', 'Api\AuthController@usersbyrole');
Route::middleware('auth:api')->post('/userbyid', 'Api\AuthController@userbyid');
Route::middleware('auth:api')->post('/updateuser', 'Api\AuthController@updateuser');
Route::middleware('auth:api')->post('/deleteuser', 'Api\AuthController@deleteuser');
<?php

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

Route::get( '/{path?}', function(){ return view('app' ); })->where('path', '.*');


// Route::get('/', 'PagesController@index')->name('home');

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
// // Clients
// Route::get('/clients', 'PagesController@clients');
// Route::POST('/add-clients', 'PagesController@storeClients');
// Route::get('/get_client_data','WorldController@getclientdata');
// Route::POST('/edit-clients', 'PagesController@editClients');

// // password
// Route::get('/password', 'PagesController@password');
// Route::POST('/add-password', 'PagesController@storepassword');
// Route::get('/get_password_data','WorldController@getpassworddata'); 
// Route::POST('/update-password', 'PagesController@updatepassword');


// // Coding
// Route::get('/codes', 'PagesController@codes');
// Route::get('/coding/{id}', 'PagesController@codes');
// Route::POST('/add-codes', 'PagesController@storecodes');
// Route::get('/get_codes_data','WorldController@getcodesdata'); 
// Route::get('/edit-codes/{id}', 'PagesController@editCode');
// Route::POST('/edit-codes/{id}', 'PagesController@updatecodes');

// // Coding
// Route::get('/sales', 'PagesController@sales');
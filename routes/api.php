<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['jwt.auth','api-header']], function (){
  
    // all routes to protected resources are registered here  
    Route::get('users/list', function(){
        $users = App\User::all();
        
        $response = ['success'=>true, 'data'=>$users]; 
        return response()->json($response, 201);
    });
});

Route::group(['middleware' => 'api-header'], function (){
    Route::post('/v1/register', 'UserController@register');
    Route::post('/v1/login', 'UserController@login');
    Route::post('/v1/forgotPassword', 'UserController@forgotPassword');
    Route::post('/v1/resetPassword', 'UserController@resetPassword');
});

Route::get('/v1/fetchGyan/{id}', 'PagesController@fetchGyan');
Route::get('/v1/fetchBasics', 'PagesController@fetchBasics');

Route::post('/v1/addGyan', 'PagesController@addGyan');
Route::post('/v1/updateGyan', 'PagesController@updateGyan');

Route::get('/v1/fetchClients/{active}', 'PagesController@fetchClients');
Route::post('/v1/addClient', 'PagesController@addClient');
Route::post('/v1/updateClient', 'PagesController@updateClient');

Route::get('/v1/fetchPayments', 'PagesController@fetchPayments');
Route::post('/v1/addPayment', 'PagesController@addPayment');
Route::post('/v1/updatePayment', 'PagesController@updatePayment');

Route::get('/v1/fetchLeads', 'PagesController@fetchLeads');
Route::post('/v1/addLead', 'PagesController@addLead');
Route::post('/v1/updateLead', 'PagesController@updateLead');

Route::get('/v1/offPage', 'PagesController@offPage');
Route::post('/v1/updateOffPage', 'PagesController@updateOffPage');
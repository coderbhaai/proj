<?php

namespace App\Http\Controllers;
use App\Client;
use App\Password;
use App\gyan;
use Illuminate\Http\Request;

class WorldController extends Controller
{
    public function getclientdata(request $request){
        $clientData   = Client::where('id', $request->id)->first();
        return response()->json($clientData);
    }

    public function getpassworddata(request $request){
        $data   = Password::where('id', $request->id)->first();
        return response()->json($data);
    }

    public function getcodesdata(request $request){
        $data   = gyan::where('id', $request->id)->first();
        return response()->json($data);
    }






    
}

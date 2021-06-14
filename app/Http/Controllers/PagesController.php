<?php

namespace App\Http\Controllers;
use DB;
use File;
use App\Gyan;
use App\Leads;
use App\OffPage;
use App\Inputs;
use App\Client;
use App\Password;
use App\Financials;
use Illuminate\Http\Request;

class PagesController extends Controller
{

    public function fetchGyan($id){
        $gyan           = Gyan::select('id', 'uid', 'quest', 'ans')->where('uid', $id)->get();
        $response = ['success'=>true, 'gyan'=>$gyan, $id ];
        return response()->json($response, 201);
    }

    public function fetchBasics(){
        $coding           = Inputs::select('type', 'name')->where('type', 'Coding')->get();
        $accounts         = Inputs::select('type', 'name')->where('type', 'Accounts')->get();
        $all              = Inputs::select('type', 'name')
                            ->where('type', 'Coding')
                            ->orWhere('type', 'Graphics')
                            ->get();
        $response = ['success'=>true, 'coding'=>$coding, 'all'=>$all, 'accounts'=>$accounts ];
        return response()->json($response, 201);
    }

    public function addGyan(request $request){
        $dB                 =   new Gyan;
        $dB->quest          =   $request->quest;
        $dB->ans            =   $request->ans;
        $dB->uid            =   $request->field;
        $dB->save();

        $data               =   Gyan::select('id', 'uid', 'quest', 'ans')->limit(1)->orderBy('id', 'desc')->first();
        $response = ['success'=>true, 'data'=>$data, 'message'=>'Gyan added succesfully' ];
        return response()->json($response, 201);
    }

    public function updateGyan(request $request){
        $data               =   $request->all();
        $dB                 =   Gyan::where('id', $request->id)->first();
        $dB->quest          =   $request->quest;
        $dB->ans            =   $request->ans;
        $dB->save();

        $data               =   Gyan::select('id', 'uid', 'quest', 'ans')->where('id', $request->id)->first();
        $response = ['success'=>true, 'data'=>$data, 'message'=>'Gyan updated succesfully' ];
        return response()->json($response, 201);
    }

    public function fetchClients($active){
        $clients         = Client::where('status', $active)->get();
        $response = ['success'=>true, 'clients'=>$clients, 'active'=> $active ];
        return response()->json($response, 201);
    }

    public function addClient(request $request){
        $dB                     =   new Client;
        $dB->name               =   $request->name;
        $dB->website            =   $request->website;
        $dB->status             =   $request->status;
        $dB->services           =   $request->services;
        $dB->credential         =   $request->credential;
        $dB->remarks            =   $request->remarks;
        $dB->contact            =   $request->contact;
        $dB->remember_token     =   '22';
        $dB->save();

        $data               =   Client::select('*')->limit(1)->orderBy('id', 'desc')->first();
        $response = ['success'=>true, 'data'=>$data, 'message'=>'Gyan added succesfully' ];
        return response()->json($response, 201);
    }

    public function updateClient(request $request){
        $dB                     =   Client::where('id', $request->id)->first();
        $dB->name               =   $request->name;
        $dB->website            =   $request->website;
        $dB->status             =   $request->status;
        $dB->services           =   $request->services;
        $dB->credential         =   $request->credential;
        $dB->remarks            =   $request->remarks;
        $dB->contact            =   $request->contact;
        $dB->save();

        $data               =   Client::select('*')->where('id', $request->id)->first();
        $response = ['success'=>true, 'data'=>$data, 'message'=>'Client updated succesfully' ];
        return response()->json($response, 201);
    }

    public function fetchPayments(){
        $payments         = Financials::orderBy('id', 'desc')->get();
        $response = ['success'=>true, 'payments'=>$payments ];
        return response()->json($response, 201);
    }

    public function addPayment(request $request){
        $dB                     =   new Financials;
        $dB->business           =   $request->business;
        $dB->date               =   $request->date;
        $dB->type               =   $request->type;
        $dB->fromTo             =   $request->fromTo;
        $dB->mode               =   $request->mode;
        $dB->purpose            =   $request->purpose;
        $dB->amount             =   $request->amount;
        $dB->number             =   $request->number;
        $dB->remarks            =   $request->remarks;
        $dB->save();
        $data               =   Financials::select('*')->limit(1)->orderBy('id', 'desc')->first();
        $response = ['success'=>true, 'data'=>$data, 'message'=>'Financials added succesfully' ];
        return response()->json($response, 201);
    }

    public function updatePayment(request $request){
        $dB                     =   Financials::where('id', $request->id)->first();
        $dB->business           =   $request->business;
        $dB->date               =   $request->date;
        $dB->type               =   $request->type;
        $dB->fromTo             =   $request->fromTo;
        $dB->mode               =   $request->mode;
        $dB->purpose            =   $request->purpose;
        $dB->amount             =   $request->amount;
        $dB->number             =   $request->number;
        $dB->remarks            =   $request->remarks;
        $dB->save();
        $data               =   Financials::select('*')->where('id', $request->id)->first();
        $response = ['success'=>true, 'data'=>$data, 'message'=>'Financials updated succesfully' ];
        return response()->json($response, 201);
    }

    public function fetchLeads(){
        $leads         = Leads::orderBy('id', 'desc')->get();
        $response = ['success'=>true, 'leads'=>$leads ];
        return response()->json($response, 201);
    }

    public function addLead(request $request){
        $dB                     =   new Leads;
        $dB->name               =   $request->name;
        $dB->phone              =   $request->phone;
        $dB->email              =   $request->email;
        $dB->followUp           =   $request->followUp;
        $dB->source             =   $request->source;
        $dB->requirement        =   $request->requirement;
        $dB->status             =   $request->status;
        $dB->save();
        $data               =   Leads::select('*')->limit(1)->orderBy('id', 'desc')->first();
        $response = ['success'=>true, 'data'=>$data, 'message'=>'Lead added succesfully' ];
        return response()->json($response, 201);
    }

    public function updateLead(request $request){
        $dB                     =   Leads::where('id', $request->id)->first();
        $dB->name               =   $request->name;
        $dB->phone              =   $request->phone;
        $dB->email              =   $request->email;
        $dB->followUp           =   $request->followUp;
        $dB->source             =   $request->source;
        $dB->requirement        =   $request->requirement;
        $dB->status             =   $request->status;
        $dB->save();
        $data               =   Leads::select('*')->where('id', $request->id)->first();
        $response = ['success'=>true, 'data'=>$data, 'message'=>'Lead updated succesfully'];
        return response()->json($response, 201);
    }

    public function offPage(){
        $offPage         = OffPage::where('status', 0)->get();
        $response = ['success'=>true, 'offPage'=>$offPage ];
        return response()->json($response, 201);
    }

    public function updateOffPage(request $request){
        $dB                         =   OffPage::where('id', $request->id)->first();
        $dB->client                 =   $request->client;
        $dB->url                    =   $request->url;
        $dB->keyword                =   $request->keyword;
        $dB->date                   =   $request->date;
        $dB->type                   =   $request->type;
        $dB->amount                 =   $request->amount;
        $dB->status                 =   $request->status;
        $dB->save();
        $data               =   OffPage::select('*')->where('id', $request->id)->first();
        $response = ['success'=>true, 'data'=>$data, 'message'=>'Lead updated succesfully'];
        return response()->json($response, 201);
    }












    public function clients(){        
        $clients        =   Client::get();   
        return view('pages.clients')->with([
            'clients'       =>  $clients,
        ]);
    }

    public function storeClients(request $request){
        $client                         = new Client;
        $client->c_name                 = $request->input('c_name'); 
        $client->uid                    = $request->input('uid'); 
        $client->c_web                  = $request->input('c_web'); 
        $client->seo                    = $request->input('seo'); 
        $client->smm                    = $request->input('smm');
        $client->graphics               = $request->input('graphics');
        $client->website                = $request->input('website');
        $client->c_country              = $request->input('c_country');
        $client->remarks                = $request->input('remarks'); 
        $client->remember_token         = $request->input('remember_token'); 

        if($request->hasFile('c_logo')){
            $filenameWithExt2 = $request->file('c_logo')->getClientOriginalName();
            $filename2 = pathinfo($filenameWithExt2, PATHINFO_FILENAME);
            $extension2 = $request->file('c_logo')->getClientOriginalExtension();
            $fileNameToStore2 = $filename2.'_'.time().'.'.$extension2;
            $path = $request->file('c_logo')->storeAs('public/clients', $fileNameToStore2);
            $client->c_logo  = $fileNameToStore2;
        }
        $client->save();
        return redirect()->back()->with([
            'success'       =>  ' Client Data Added Successfully '
        ]);
    }

    public function editClients(request $request){
        $client                         = Client::where('uid', $request->uid)->first();
        $client->seo                    = $request->input('seo'); 
        $client->smm                    = $request->input('smm');
        $client->graphics               = $request->input('graphics');
        $client->website                = $request->input('website');
        $client->remarks                = $request->input('remarks'); 
        $client->updated_at             = $request->input('updated_at'); 
        if($request->hasFile('c_logo')){
            $filenameWithExt1 = $request->file('c_logo')->getClientOriginalName();
            $filename1 = pathinfo($filenameWithExt1, PATHINFO_FILENAME);
            $extension1 = $request->file('c_logo')->getClientOriginalExtension();
            $fileNameToStore1 = $filename1.'_'.time().'.'.$extension1;
            $path = $request->file('c_logo')->storeAs('public/clients', $fileNameToStore1);

            if(!is_null($client->c_logo)){
                $usersImage = public_path("storage/clients/{$client->c_logo}");
                if (isset($usersImage)) {
                    dd($usersImage);
                    file::delete($usersImage);
                }                  
            }     
            $client->c_logo  = $fileNameToStore1;       
        }
        $client->save();

        return redirect()->back()->with([
            'success'       =>  ' Client Data Added Succesfully '
        ]);
    }

    public function password(){        
        $clients         =   Client::get();
        // dd($clients);
        $inputs         =   Inputs::select('name')->get();
        $passwords      =   Password::get();
        return view('pages.password')->with([
            'clients'       =>  $clients,
            'inputs'       =>  $inputs,
            'passwords'    =>  $passwords,
        ]);
    }

    public function storepassword(request $request){
        $password               = new Password;
        $data                   =   $request->all();
        $team = [];
        for($i=0; $i<count($data['account']); $i++){
   	        $member = array($data['account'][$i], $data['url'][$i], $data['user'][$i], $data['password'][$i]);
            array_push($team, $member);
        }
        $password->credential      = json_encode($team);
        $password->client          = $request->input('client');
        $password->remarks         = $request->input('remarks');
        $password->remember_token  = $request->input('_token'); 
        $password->save();
        return redirect()->back()->with([
            'success'       =>  ' Credentials Added Successfully '
        ]);
    }

    public function updatepassword(request $request){
        $password               = Password::where('id', $request->id)->first();
        $data                   =   $request->all();
        $team = [];
        for($i=0; $i<count($data['account']); $i++){
   	        $member = array($data['account'][$i], $data['url'][$i], $data['user'][$i], $data['password'][$i]);
            array_push($team, $member);
        }
        $password->credential      = json_encode($team);
        $password->client          = $request->input('client');
        $password->remarks         = $request->input('remarks');
        $password->remember_token  = $request->input('_token'); 
        $password->save();
        
        return redirect()->back()->with([
            'success'       =>  ' Credentials updated Successfully '
        ]);
    }

    public function codes($id){
        $codes           = Gyan::where('uid', $id)->get();
        return view('pages.codes')->with([
            'codes'             =>  $codes,
            'id'                =>  $id
        ]);
    }

    public function storecodes(request $request){
        // dd($request->all());
        $gyan                   = new Gyan;
        $gyan->uid            = $request->input('uid');
        $gyan->quest            = $request->input('quest');
        $gyan->ans              = $request->input('ans');
        $gyan->remember_token  = $request->input('_token'); 
        $gyan->save();
        return redirect()->back()->with([
            'success'       =>  ' Credentials Added Successfully '
        ]);

    }

    public function editCode($id){
        $editCodes           = Gyan::where('id', $id)->first();
        return view('pages.edit-code')->with([
            'editCodes'         =>  $editCodes,
        ]);
    }

    public function updatecodes(request $request, $id){
        $gyan                   = Gyan::where('id', $id)->first();
        $gyan->quest            = $request->input('quest');
        $gyan->ans              = $request->input('ans');
        $gyan->updated_at       = $request->input('updated_at'); 
        $gyan->save();
        return redirect()->back()->with([
            'success'       =>  ' Codes updated Successfully '
        ]);

    }

    public function sales(){
        // $editCodes           = Gyan::where('id', $id)->first();
        return view('pages.sales')->with([
            // 'editCodes'         =>  $editCodes,
        ]);
    }



    
}

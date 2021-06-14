@extends('layouts.app')
@section('content')
    <div class="left-content">
        <div class="mother-grid-inner">
            <div class="inbox-mail">
                <div class="col-md-2 compose w3layouts">
                    <h2>Clients</h2>
                    <nav class="nav-sidebar">
                        <ul class="nav tabs">
                            @if(!is_null($clients)) 
                                @foreach($clients as $clientPassword)
                                    <li><a href="#tab{{$clientPassword->id}}" data-toggle="tab" aria-expanded="true">{{ucfirst($clientPassword->c_name)}} <div class="clearfix"></div></a></li>
                                @endforeach
                            @endif
                        </ul>
                    </nav>
                </div>
                <div class="col-md-10 tab-content tab-content-in w3">
                <span style="float:right;"><a href="#" class="show-modal btn btn-success" data-toggle="modal" data-target="#add-password"><i class="glyphicon glyphicon-plus"></i> Add Credentials</a></span>
                    @if(!is_null($passwords))
                        @foreach($passwords as $password)
                            <div class="tab-pane text-style" id="tab{{$password->id}}">
                                <div class="inbox-right">
                                    <div class="mailbox-content">
                                        <table class="table">
                                            <tbody>
                                                <tr class="table-row" style="background-color: #1b93e1;">
                                                    <td style="color: #fff;">Account</td>
                                                    <td style="color: #fff;">URL</td>
                                                    <td style="color: #fff;">User Name</td>
                                                    <td style="color: #fff;">Password</td>
                                                </tr>
                                                @if(!is_null($password->credential))
                                                    @foreach(json_decode($password->credential) as $aa)
                                                        <tr class="table-row">
                                                            <td>{{$aa[0]}} </td>
                                                            <td><a href="{{$aa[1]}}" target="_blank">{{$aa[1]}} </a></td>
                                                            <td>{{$aa[2]}} </td>
                                                            <td>{{$aa[3]}} </td>
                                                        </tr>
                                                    @endforeach
                                                @endif
                                            </tbody>
                                        </table>
                                        <div class="clearfix"></div>
                                        <div class="panel-footer">
                                            <div class="row">
                                                <a href="#" class="show-modal table-footer-btn password-edit-btn" data-toggle="modal" data-target="#edit-password" data-id="{{$password->id}}">Edit</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    @endif
                </div>
            </div>
        </div>
        <div class="clearfix"> </div>
    </div>   
    {{--  Add Passwords  --}}
        <div id="add-password" class="modal fade" role="dialog">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Add Passwords here</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                {!! Form::open(['url'=>['/add-password'], 'method'=>'POST', 'autocomplete'=>'on', 'enctype'=>'multipart/form-data']) !!}
                    @CSRF
                    <div class="form-group col-sm-5">
                        <label>Client Name</label>
                        <select class="form-control" name="client">
                        <option>Select Client</option>
                        @if(isset($clients) && !is_null($clients))
                            @foreach($clients as $clientAdd)
                            <option value="{{$clientAdd->uid}}">{{$clientAdd->c_name}}</option> 
                            @endforeach
                        @endif
                        </select>
                    </div>
                    <span style="float:right;"><a href="#" class="btn btn-success add-account"><i class="glyphicon glyphicon-plus"></i> Add Accounts </a></span>
                    <div class="clearfix"></div>
                    <div class="add-hf-accounts"></div>
                    <div class="form-group col-sm-12">
                    <textarea style="width: 100%; height: 200px; padding: 10px;" placeholder="Remarks" name="remarks"></textarea>
                    </div>
                    <div class="clearfix"></div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2">
                                <button class="btn-primary btn">Submit</button>
                            </div>
                        </div>
                    </div>
                {!! Form::close() !!}
                {{--  Hidden HTML to be Added  --}}
                    <div class="hide hidden_accounts">
                    <div class="hidden_event">
                        <div class="form-group col-sm-2"> 
                            <label>Account</label>
                            <select class="form-control" name="account[]">
                            <option>Select Account</option>
                            @if(isset($inputs) && !is_null($inputs))
                                @foreach($inputs as $input)
                                <option value="{{$input->name}}">{{$input->name}}</option>
                                @endforeach
                            @endif
                            </select>
                        </div>
                        <div class="form-group col-sm-3">
                            <label>URL</label>
                            <input type="text" class="form-control" placeholder="Account URL" name="url[]">
                        </div>
                        <div class="form-group col-sm-3">
                            <label>Username</label>
                            <input type="text" class="form-control" placeholder="User Name" name="user[]">
                        </div>
                        <div class="form-group col-sm-3">
                            <label>Password</label>
                            <input type="text" class="form-control" placeholder="Password" name="password[]">
                        </div>
                        <div class="form-group col-sm-1 acc-btn"> <br>
                            <button class="btn btn-danger remove " type="button"><i class="glyphicon glyphicon-remove"></i></button>
                        </div>
                    </div>
                    </div>  
                {{--  Hidden HTML to be Added  --}}
                </div>
                <div class="modal-footer">
                <button type="button" class="btn modal-btn" data-dismiss="modal">Close</button>
                </div>
            </div>
            </div>
        </div>
    {{--  //Add Passwords  --}}
    {{--  Edit Passwords  --}}
        <div id="edit-password" class="modal fade" role="dialog">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Edit Passwords here</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                {!! Form::open(['url'=>['/update-password'], 'method'=>'POST', 'autocomplete'=>'on', 'enctype'=>'multipart/form-data']) !!}
                    @CSRF
                    <div class="form-group col-sm-5">
                        <label>Client Name</label>
                        <select class="form-control" name="client" id="edit-password-client"></select>
                    </div>
                    <span style="float:right;"><a href="#" class="btn btn-success add-account"><i class="glyphicon glyphicon-plus"></i> Add Accounts </a></span>
                    <div class="clearfix"></div>
                    <div class="add-hf-accounts"></div>
                    <div class="form-group col-sm-12">
                    <textarea style="width: 100%; height: 200px; padding: 10px;" placeholder="Remarks" name="remarks" id="edit-password-remarks"></textarea>
                    </div>
                    <div class="clearfix"></div>
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-sm-8 col-sm-offset-2">
                                <button class="btn-primary btn">Submit</button>
                            </div>
                        </div>
                    </div>
                     <input type="hidden" name="id" id="edit-password-id">                    
                {!! Form::close() !!}
                {{--  Hidden HTML to be Added  --}}
                    <div class="hide hidden_accounts">
                    <div class="hidden_event">
                        <div class="form-group col-sm-2"> 
                            <label>Account</label>
                            <select class="form-control" name="account[]">
                            <option>Select Account</option>
                            @if(isset($inputs) && !is_null($inputs))
                                @foreach($inputs as $input)
                                <option value="{{$input->name}}">{{$input->name}}</option>
                                @endforeach
                            @endif
                            </select>
                        </div>
                        <div class="form-group col-sm-3">
                            <label>URL</label>
                            <input type="text" class="form-control" placeholder="Accoutn URL" name="url[]">
                        </div>
                        <div class="form-group col-sm-3">
                            <label>Username</label>
                            <input type="text" class="form-control" placeholder="User Name" name="user[]">
                        </div>
                        <div class="form-group col-sm-3">
                            <label>Password</label>
                            <input type="text" class="form-control" placeholder="Password" name="password[]">
                        </div>
                        <div class="form-group col-sm-1 acc-btn"> <br>
                            <button class="btn btn-danger remove " type="button"><i class="glyphicon glyphicon-remove"></i></button>
                        </div>
                    </div>
                    </div>  
                {{--  Hidden HTML to be Added  --}}
                </div>
                <div class="modal-footer">
                <button type="button" class="btn modal-btn" data-dismiss="modal">Close</button>
                </div>
            </div>

            </div>
        </div>
    {{--  //Edit Passwords  --}}
   @include('pages.edit-modal')
@endsection
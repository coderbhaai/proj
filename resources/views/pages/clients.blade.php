@extends('layouts.app')
@section('content')
    <div class="left-content">
        <div class="mother-grid-inner">
            <div class="agile-grids">	
                <div class="agile-tables">
                    <div class="w3l-table-info admin">
                        <h2>Clientelle</h2>
                        <span><a href="#" class="show-modal btn btn-success" data-toggle="modal" data-target="#add-client"><i class="glyphicon glyphicon-plus"></i> Add Client</a></span>
                        <table id="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Website</th>
                                    <th>Servcies</th>
                                    <th>Created_at</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            @foreach($clients as $client)
                                <tr>
                                    <td>{{$client->c_name}}</td>
                                    @if(!is_null($client->c_web))
                                        <td>{{$client->c_web}}</td>
                                    @else
                                        <td class="blank">No Website</td>
                                    @endif    
                                    <td>
                                        @if(!is_null($client->seo)) SEO @endif
                                        @if(!is_null($client->smm)) , SMM @endif
                                        @if(!is_null($client->graphics)) , Graphics @endif
                                        @if(!is_null($client->website)) , Website @endif
                                    </td>
                                    <td>{{date('j M y', strtotime($client->created_at))}}</td>
                                    <td><a href="#" class="hvr-icon-drop col-6 client-edit-btn" data-id="{{$client->id}}" data-toggle="modal" data-target="#edit-client" style="display:block;">Edit</a></td>
                                </tr>
                            @endforeach    
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{--  Add Clients  --}}
        <div id="add-client" class="modal fade" role="dialog">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Add Client Details here</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                {!! Form::open(['url'=>['/add-clients'], 'method'=>'POST', 'autocomplete'=>'on', 'enctype'=>'multipart/form-data']) !!}
                    @CSRF
                    <div class="form-group col-sm-5">
                        <label>Client Name</label>
                        <input type="text" class="form-control" placeholder="Client Name" name="c_name">
                    </div>
                    <div class="form-group col-sm-5">
                        <label>Client Website</label>
                        <input type="text" class="form-control" placeholder="Client Website" name="c_web">
                    </div>
                    <div class="form-group col-sm-2">
                        <label>Client Website</label>
                        <input type="text" class="form-control" placeholder="UID" name="uid" required>
                    </div>
                    <div class="form-group col-sm-4">
                        <label>Logo</label>
                        <input type="file" name="c_logo">
                    </div>
                    <div class="form-group col-sm-8" style="display: flex; justify-content: space-around;">
                        <label style="padding-right: 10px;"><input type="checkbox" name="seo"> SEO </label>
                        <label style="padding-right: 10px;"><input type="checkbox" name="smm"> SMM </label>
                        <label style="padding-right: 10px;"><input type="checkbox" name="graphics"> GRAPHICS </label>
                        <label style="padding-right: 10px;"><input type="checkbox" name="website"> WEBSITE </label>
                        <label><input type="checkbox" name="c_country"> International? </label>
                    </div>
                    <div class="form-group col-sm-12">
                    <textarea style="width: 100%; height: 200px; padding: 10px;" placeholder="Remarks" name="remarks" ></textarea>
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
                </div>
                <div class="modal-footer">
                <button type="button" class="btn modal-btn" data-dismiss="modal">Close</button>
                </div>
            </div>

            </div>
        </div>
    {{--  //Add Clients  --}}
    {{--  Edit Clients  --}}
        <div id="edit-client" class="modal fade" role="dialog">
            <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Edit Client Details here</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                {!! Form::open(['url'=>['/edit-clients'], 'method'=>'POST', 'autocomplete'=>'on', 'enctype'=>'multipart/form-data']) !!}
                    @CSRF
                    <div class="form-group col-sm-5">
                        <label>Client Name</label>
                        <input type="text" class="form-control" placeholder="Client Name" name="c_name" id="edit-client-name" readonly>
                    </div>
                    <div class="form-group col-sm-5">
                        <label>Client Website</label>
                        <input type="text" class="form-control" placeholder="Client Website" name="c_web" id="edit-client-web" readonly>
                    </div>
                    <div class="form-group col-sm-2">
                        <label>Client Website</label>
                        <input type="text" class="form-control" placeholder="Client UID" name="uid" id="edit-client-uid" readonly>
                    </div>
                    <div class="form-group col-sm-4" id="edit-client-logo">
                        <label>Logo</label>
                        <input type="file" name="c_logo">
                    </div>
                    <div class="form-group col-sm-8" style="display: flex; justify-content: space-around;">
                    <div id="edit-client-seo"></div>
                    <div id="edit-client-smm"></div>
                    <div id="edit-client-graphics"></div>
                    <div id="edit-client-website"></div>
                    <div id="edit-client-int"></div>
                        {{--  <label style="padding-right: 10px;"><input type="checkbox" name="seo"> SEO </label>
                        <label style="padding-right: 10px;"><input type="checkbox" name="smm"> SMM </label>
                        <label style="padding-right: 10px;"><input type="checkbox" name="graphics"> GRAPHICS </label>
                        <label style="padding-right: 10px;"><input type="checkbox" name="website"> WEBSITE </label>  --}}
                        {{--  <label><input type="checkbox" name="c_country"> International? </label>  --}}
                    </div>
                    <div class="form-group col-sm-12">
                    <textarea style="width: 100%; height: 200px; padding: 10px;" placeholder="Remarks" name="remarks" id="edit-client-remarks"></textarea>
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
                </div>
                <div class="modal-footer">
                <button type="button" class="btn modal-btn" data-dismiss="modal">Close</button>
                </div>
            </div>

            </div>
        </div>
    {{--  //Edit Clients  --}}
   @include('pages.edit-modal')
@endsection
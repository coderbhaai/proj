@extends('layouts.app')
@section('content')
    <div class="left-content">
        <div class="mother-grid-inner">
            <div class="inbox-mail">
                <div class="col-md-5 compose w3layouts">
                    <h2>{{$id}}</h2>
                    <nav class="nav-sidebar">
                        <ul class="nav tabs">
                        @if(!is_null($codes))
                            @foreach($codes as $code)
                                <li><a href="#tab{{$code->id}}" data-toggle="tab" aria-expanded="true">{{ucfirst($code->quest)}} <div class="clearfix"></div></a></li>
                            @endforeach
                        @endif
                        </ul>
                    </nav>
                </div>
                <div class="col-md-7 tab-content tab-content-in w3">
                    <span style="float:right;"><a href="#" class="show-modal btn btn-success" data-toggle="modal" data-target="#add-gyan"><i class="glyphicon glyphicon-plus"></i> Add Codes</a></span>
                    @if(!is_null($codes))
                        @foreach($codes as $code)
                            <div class="tab-pane text-style" id="tab{{$code->id}}">
                                <div class="inbox-right">
                                    <div class="mailbox-content">
                                        <code class="css"><p>{!!$code->ans!!}</p></code>
                                        <a href="/edit-codes/{{$code->id}}" class="btn btn-success" data-id="{{$code->id}}"><i class="glyphicon glyphicon-plus"></i> Edit Code</a>
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
    {{--  Add Gyan  --}}
        <div id="add-gyan" class="modal fade" role="dialog">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Add Passwords here</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                {!! Form::open(['url'=>['/add-codes'], 'method'=>'POST', 'autocomplete'=>'on', 'enctype'=>'multipart/form-data']) !!}
                    @CSRF
                    <div class="form-group col-sm-5">
                        <label>Client Name</label>
                        <select class="form-control" name="uid">
                        <option>Select Language</option>
                        @if(isset($languages) && !is_null($languages))
                            @foreach($languages as $language)
                            <option value="{{$language->uid}}">{{$language->name}}</option>
                            @endforeach
                        @endif
                        </select>
                    </div>
                    <div class="clearfix"></div>
                    <div class="form-group col-sm-12">
                        <label>Question</label>
                        <input type="text" class="form-control" placeholder="Add Question" name="quest">
                    </div>
                    <div class="form-group col-sm-12">
                    <label>Answer</label>
                    {{form:: textarea('ans', '', ['placeholder'=>'Add Answer', 'style'=>"width:100%; padding: 10px;", 'id' =>'article-ckeditor1'])}}
                    {{--  <textarea style="width: 100%; height: 200px; padding: 10px;" placeholder="Add Answer" name="ans" ></textarea>  --}}
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
    {{--  //Add Gyan  --}}
   @include('pages.edit-modal')
@endsection 
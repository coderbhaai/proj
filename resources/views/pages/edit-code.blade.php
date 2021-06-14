@extends('layouts.app')
@section('content')
    <div class="left-content">
        <div class="mother-grid-inner">
            <div class="inbox-mail">
                <div class="col-sm-12">
                    <span style="float:right;"><a href="#" class="show-modal btn btn-success" data-toggle="modal" data-target="#add-gyan"><i class="glyphicon glyphicon-plus"></i> Add Codes</a></span>
                    {!! Form::open(['url'=>['/edit-codes', $editCodes->id], 'method'=>'POST', 'autocomplete'=>'on', 'enctype'=>'multipart/form-data']) !!}
                        @CSRF
                        <div class="form-group col-sm-5">
                            <label>Language</label>
                            <select class="form-control" name="uid">
                                <option>{{$editCodes->uid}}</option>
                            </select>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group col-sm-12">
                            <label>Question</label>
                            {{form:: text('quest', $editCodes->quest , ['class'=>'form-control', 'placeholder'=>'Add Question'])}}
                        </div>
                        <div class="form-group col-sm-12">
                        <label>Answer</label>
                        {{form:: textarea('ans', $editCodes->ans, ['placeholder'=>'Add Answer', 'style'=>"width:100%; padding: 10px;", 'id' =>'article-ckeditor1'])}}
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
            </div> 
        </div>
        <div class="clearfix"> </div>
    </div>   
   @include('pages.edit-modal')
@endsection
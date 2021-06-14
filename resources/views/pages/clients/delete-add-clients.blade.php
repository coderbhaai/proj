@extends('layouts.app')
@section('content')
    <div class="left-content">
        <div class="mother-grid-inner">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="/"> Home</a><i class="fa fa-angle-right"></i>
                    <a href="#"> Clients Summary <i class="fa fa-angle-right"></i></a> 
                    <a href="#">Clients</a>
                </li>
            </ol>
            <div class="grid-form">
                <div class="grid-form1">
                    <h2 id="forms-example" class="">Add Clients</h2>
                    {!! Form::open(['url'=>['/add-clients'], 'method'=>'POST', 'autocomplete'=>'on', 'enctype'=>'multipart/form-data']) !!}
                        @CSRF
                        <div class="form-group col-sm-6">
                            <label>Client Name</label>
                            <input type="text" class="form-control" placeholder="Client Name" name="c_name">
                        </div>
                        <div class="form-group col-sm-6">
                            <label>Client Website</label>
                            <input type="text" class="form-control" placeholder="Client Website" name="c_web">
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
                        <textarea style="width: 100%; height: 200px; padding: 10px;" placeholder="Remarks" ></textarea>
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
    </div>  
@endsection 
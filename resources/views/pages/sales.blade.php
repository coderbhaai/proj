@extends('layouts.app')
@section('content')
    <div class="left-content">
        <div class="mother-grid-inner">
            <div class="agile-grids">	
                <div class="agile-tables">
                    <div class="w3l-table-info admin">
                        <h2>Sales & BD</h2>
                        <span><a href="#" class="show-modal btn btn-success" data-toggle="modal" data-target="#add-lead"><i class="glyphicon glyphicon-plus"></i> Add Lead</a></span>
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
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
   @include('pages.edit-modal')
@endsection
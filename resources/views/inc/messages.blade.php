@if( count($errors)>0 )
{{--  error is an object so used all()  --}}
    @foreach($errors->all() as $error)
        <div class="alert alert-danger alert-dismissable fade in print-error-msg custom_alert">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            {{$error}}
        </div>
    @endforeach
@endif

@if(session('success'))
    <div class="alert alert-success alert-dismissable fade in custom_alert">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Success!</strong>{{session('success')}}
    </div>
@endif



@if(session('error'))
    <div class="alert alert-error alert-dismissable fade in custom_alert">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Error!</strong>{{session('error')}}
    </div>
@endif
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
    <link href="{{asset('css/bootstrap.min.css')}}" rel='stylesheet' type='text/css' />
    <link href="{{asset('css/style.css')}}" rel='stylesheet' type='text/css' />
    <link href="{{asset('css/morris.css')}}" rel="stylesheet" type="text/css"/>
    <link href="{{asset('css/font-awesome.css')}}" rel="stylesheet"> 
    <link href="{{asset('css/table-style.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('css/basictable.css')}}" rel="stylesheet" type="text/css" />
    <script src="{{asset('js/jquery-2.1.4.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/jquery.basictable.min.js')}}"></script>
    <link href='//fonts.googleapis.com/css?family=Roboto:700,500,300,100italic,100,400' rel='stylesheet' type='text/css'/>
    <link href='//fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="{{asset('css/icon-font.min.css')}}" type='text/css' />
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
</head>
<body>
    <div class="page-container">
        @yield('content')
        @include('inc.navbar')
        @include('inc.messages')
    </div>
    <script>
        var toggle = true;
        $(".sidebar-icon").click(function() {                
            if (toggle){
                $(".page-container").addClass("sidebar-collapsed").removeClass("sidebar-collapsed-back");
                $("#menu span").css({"position":"absolute"});
            }else{
                $(".page-container").removeClass("sidebar-collapsed").addClass("sidebar-collapsed-back");
                setTimeout(function() {
                $("#menu span").css({"position":"relative"});
                }, 400);
            }
            toggle = !toggle;
        });
    </script>
    <script src="{{asset('js/jquery.nicescroll.js')}}"></script>
    <script src="{{asset('js/scripts.js')}}"></script>
    <script src="{{asset('js/bootstrap.min.js')}}"></script>
    <script src="{{asset('js/raphael-min.js')}}"></script>
    <script src="/vendor/unisharp/laravel-ckeditor/ckeditor.js"></script>
    <script src="{{asset('js/application.js')}}"></script>
    <script>
            CKEDITOR.replace( 'article-ckeditor1' );
            CKEDITOR.replace( 'article-ckeditor2' );
    </script>
    <script>
        setTimeout(function() {
        $(".alert").fadeOut().empty();
        }, 3000);
    </script>
</body>
</html>

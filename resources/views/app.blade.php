<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="description">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="{{ asset('images/icons/favicon.png')}}">
    <link href="{{asset('css/font-awesome.css')}}" rel='stylesheet' type='text/css' />
    <link href="{{asset('css/bootstrap.min.css')}}" rel='stylesheet' type='text/css' />
    <link href="{{asset('css/icon-font.min.css')}}" rel='stylesheet' type='text/css' />
    <link href="{{asset('css/prism.css')}}" rel='stylesheet' type='text/css' />
    <link href="{{asset('css/style.css')}}" rel='stylesheet' type='text/css' />
</head>
    <body>
        <div id="root"></div>
        <script src="{{asset('js/app.js')}}"></script>
        <!-- <script src="{{asset('js/jquery-2.1.4.min.js')}}"></script> -->
        <!-- <script src="{{asset('js/jquery.nicescroll.js')}}"></script>
        <script src="{{asset('js/scripts.js')}}"></script> -->
        <!-- <script src="{{asset('js/bootstrap.min.js')}}"></script> -->
        <script src="{{asset('js/application.js')}}"></script>
        <!-- <script>
            setTimeout(function() {
            $(".alert").fadeOut().empty();
            }, 3000);
        </script> -->
         <script>
            // $(document).ready(function() {
            //     var navoffeset=$(".header-main").offset().top;
            //     $(window).scroll(function(){
            //         var scrollpos=$(window).scrollTop(); 
            //         if(scrollpos >=navoffeset){
            //             $(".header-main").addClass("fixed");
            //         }else{
            //             $(".header-main").removeClass("fixed");
            //         }
            //     });
                
            // });
        </script>
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
    </body>
</html>
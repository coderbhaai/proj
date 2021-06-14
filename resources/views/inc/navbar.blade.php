<div class="sidebar-menu">
    <header class="logo1">
        <a href="#" class="sidebar-icon"> <span class="fa fa-bars"></span> </a> 
    </header>
    <div style="border-top:1px ridge rgba(255, 255, 255, 0.15)"></div>
    <div class="menu">
        <ul id="menu">
            <li id="menu-academico" ><a href="#"><i class="fa fa-list-ul" aria-hidden="true"></i><span> Access</span> <span class="fa fa-angle-right" style="float: right"></span><div class="clearfix"></div></a>
                <ul id="menu-academico-sub" >
                    @guest
                        @if (Route::has('register'))
                            <li class="menu-academico-avaliacoes"><a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a></li>
                        @endif
                        <li class="menu-academico-avaliacoes"><a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a></li>
                    @else
                        <li>
                            <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">{{ __('Logout') }}</a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </li>
                    @endguest
                </ul>
            </li>
            <li><a href="/clients"><i class="fa fa-tachometer"></i> <span>Clients</span><div class="clearfix"></div></a></li>
            <li><a href="/password"><i class="fa fa-tachometer"></i> <span>Password</span><div class="clearfix"></div></a></li>
            <li id="menu-academico" ><a href="#"><i class="fa fa-list-ul" aria-hidden="true"></i><span> Coding</span> <span class="fa fa-angle-right" style="float: right"></span><div class="clearfix"></div></a>
                <ul id="menu-academico-sub" >
                    @if(!is_null($languages))
                        @foreach($languages as $language)
                            <li><a href="/coding/{{$language->uid}}">{{ucfirst($language->name)}} <div class="clearfix"></div></a></li>
                        @endforeach
                    @endif
                </ul>
            </li>
            <li id="menu-academico" ><a href="#"><i class="fa fa-list-ul" aria-hidden="true"></i><span> Graphics</span> <span class="fa fa-angle-right" style="float: right"></span><div class="clearfix"></div></a>
                <ul id="menu-academico-sub" >
                    <li><a class="dropdown-item" href="/photoshop">Photoshop</a></li>
                    <li><a class="dropdown-item" href="/illustrator">Illustrator</a></li>
                    <li><a class="dropdown-item" href="/corel-draw">CorelDraw</a></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="clearfix"></div>	
</div>
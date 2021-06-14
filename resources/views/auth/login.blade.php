@extends('layouts.app')

@section('content')
    <div class="main-wthree">
        <div class="container">
            <div class="sin-w3-agile">
                <h2>Login</h2>
                <form method="POST" action="{{ route('login') }}">
                    @csrf
                    <div class="username">
                        <span class="username">Email</span>
                        <input id="email" type="email" class="name @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="Enter Email">
                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        <div class="clearfix"></div>
                    </div>
                    <div class="username">
                        <span class="username">Password</span>
                        <input id="password" type="password" class="name @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="Enter Password">
                            @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        <div class="clearfix"></div>
                    </div>
                    @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}" style="color: #fff;">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                    <div class="login-w3">
                            <input type="submit" class="login" value="Sign Up">
                    </div>
                    <div class="clearfix"></div>
                </form>
                <div class="back">
                    <a href="/" style="color: #fff;">Back to home</a>
                </div>
            </div>
        </div>
    </div>
@endsection

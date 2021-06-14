@extends('layouts.app')
@section('content')
    <div class="main-wthree">
        <div class="container">
            <div class="sin-w3-agile">
                <h2>Register</h2>
                <form method="POST" action="{{ route('register') }}">
                    @csrf
                    <div class="username">
                        <span class="username">Username:</span>
                        <input id="name" type="text" class="name  @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus placeholder="Enter Name">
                            @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        <div class="clearfix"></div>
                    </div>
                    <div class="username">
                        <span class="username">Email:</span>
                        <input id="email" type="email" class="name  @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Enter official email">
                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        <div class="clearfix"></div>
                    </div>
                    <div class="password-agileits">
                        <span class="username">Password:</span>
                        <input id="password" type="password" class="password @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="Enter Password">
                            @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        <div class="clearfix"></div>
                    </div>
                    <div class="password-agileits">
                        <span class="username">Confirm Password:</span>
                        <input id="password-confirm" type="password" class="password" name="password_confirmation" required autocomplete="new-password"  placeholder="Confirm Password">
                        <div class="clearfix"></div>
                    </div>
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
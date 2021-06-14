@extends('layouts.app')
@section('content')
    <div class="main-wthree">
        <div class="container">
            <div class="sin-w3-agile">
                <h2>{{ __('Reset Password') }}</h2>
                <form method="POST" action="{{ route('password.update') }}">
                    @csrf
                    <input type="hidden" name="token" value="{{ $token }}">
                    <div class="username">
                        <span class="username">{{ __('E-Mail Address') }}</span>
                        <input id="email" type="email" class="name @error('email') is-invalid @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus paleholder="Registered Email">
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                        <div class="clearfix"></div>
                    </div>
                    <div class="username">
                        <span class="username">{{ __('Password') }}</span>
                        <input id="password" type="password" class="name @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="Password">
                        @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                        <div class="clearfix"></div>
                    </div>
                    <div class="username">
                        <span class="username">{{ __('Confirm Password') }}</span>
                        <input id="password-confirm" type="password" class="name" name="password_confirmation" required autocomplete="new-password" placeholder="Confirm Password">
                        <div class="clearfix"></div>
                    </div>
                    <div class="login-w3">
                        <button type="submit" class="btn btn-primary">{{ __('Reset Password') }}</button>
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

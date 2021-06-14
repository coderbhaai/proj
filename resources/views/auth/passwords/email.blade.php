@extends('layouts.app')

@section('content')
<div class="main-wthree">
    <div class="container">
        <div class="sin-w3-agile">
            <h2>Reset Password</h2>
            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif
            <form method="POST" action="{{ route('password.email') }}">
                @csrf
                <div class="username">
                    <span class="username">{{ __('E-Mail Address') }}</span>
                    <input id="email" type="email" class="name @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="Registered Email">
                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                    
                    <div class="clearfix"></div>
                </div>
                <div class="login-w3">
                        {{--  <input type="submit" class="login" value="Sign Up">  --}}
                        <button type="submit" class="btn btn-primary">
                                    {{ __('Send Password Reset Link') }}
                                </button>
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

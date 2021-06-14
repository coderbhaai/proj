<?php

namespace App;
use request;
use Illuminate\Database\Eloquent\Model;

class Inputs extends Model
{
    public static function inputs(){
            return static::select('*')
            ->where('inputs.type', '=' , 'Coding')
            ->get();
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Zone extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'user_id'
    ];

    public function teacher(){
        return $this->belongsTo(User::class);
    }

    public function subzones(){
        return $this->hasMany(Subzone::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subzone extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'user_id'
    ];

    public function tutor(){
        return $this->belongsTo(User::class);
    }

    public function zone(){
        return $this->belongsTo(Zone::class);
    }
}

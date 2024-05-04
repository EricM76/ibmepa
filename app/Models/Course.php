<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image',
        'description',
        'price',
        'file',
        'visible'
    ];

    public function units()
    {
        return $this->hasMany(Unit::class);
    }
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}

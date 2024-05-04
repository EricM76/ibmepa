<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    use HasFactory;

    
    protected $fillable = [
        'name',
        'image',
        'description'
    ];

    public function blocks()
    {
        return $this->hasMany(Block::class);
    }
    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}

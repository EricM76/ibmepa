<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Block extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content'
    ];

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }
}

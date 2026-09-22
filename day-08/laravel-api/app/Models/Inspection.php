<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inspection extends Model
{
    protected $table = 'inspections';

    protected $fillable = [
        'facility_id',
        'user_id',
        'inspection_date',
        'cleanliness_score',
        'status'
    ];

    public function facility()
    {
        return $this->belongsTo(Facility::class);
    }
}
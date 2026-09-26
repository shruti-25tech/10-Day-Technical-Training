<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Complaint extends Model
{
    protected $table = 'complaints';

    protected $fillable = [
        'facility_id',
        'user_id',
        'complaint_text',
        'complaint_date',
        'status'
    ];

    public function facility()
    {
        return $this->belongsTo(Facility::class);
    }
}
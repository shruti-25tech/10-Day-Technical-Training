<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    protected $table = 'facilities';

    protected $fillable = [
        'facility_name',
        'location',
        'hygiene_score'
    ];

    public function inspections()
    {
        return $this->hasMany(Inspection::class);
    }

    public function complaints()
    {
        return $this->hasMany(Complaint::class);
    }
}

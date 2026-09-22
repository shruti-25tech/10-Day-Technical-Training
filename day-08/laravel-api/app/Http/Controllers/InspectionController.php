<?php

namespace App\Http\Controllers;

use App\Models\Inspection;
use Illuminate\Http\Request;

class InspectionController extends Controller
{
    public function index()
    {
        return Inspection::all();
    }

   public function store(Request $request)
{
    $validated = $request->validate([
        'facility_id' => 'required|integer',
        'user_id' => 'nullable|integer',
        'inspection_date' => 'required|date',
        'cleanliness_score' => 'required|numeric|min:0|max:100',
        'status' => 'required|string|max:50',
    ]);

    $inspection = Inspection::create($validated);

    return response()->json($inspection, 201);
}


    public function show(Inspection $inspection)
    {
        return $inspection;
    }

   public function update(Request $request, Inspection $inspection)
{
    $validated = $request->validate([
        'facility_id' => 'required|integer',
        'user_id' => 'nullable|integer',
        'inspection_date' => 'required|date',
        'cleanliness_score' => 'required|numeric|min:0|max:100',
        'status' => 'required|string|max:50',
    ]);

    $inspection->update($validated);

    return $inspection;
}

    public function destroy(Inspection $inspection)
    {
        $inspection->delete();

        return response()->json(['message' => 'Inspection deleted']);
    }
}
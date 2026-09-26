<?php

namespace App\Http\Controllers;

use App\Models\Facility;
use Illuminate\Http\Request;

class FacilityController extends Controller
{
    public function index()
    {
        return Facility::all();
    }

  public function store(Request $request)
{
    $validated = $request->validate([
        'facility_name' => 'required|string|max:100',
        'location' => 'required|string|max:100',
        'hygiene_score' => 'required|numeric|min:0|max:100',
    ]);

    $facility = Facility::create($validated);

    return response()->json($facility, 201);
}

    public function show(Facility $facility)
    {
        return $facility;
    }

    public function update(Request $request, Facility $facility)
{
    $validated = $request->validate([
        'facility_name' => 'required|string|max:100',
        'location' => 'required|string|max:100',
        'hygiene_score' => 'required|numeric|min:0|max:100',
    ]);

    $facility->update($validated);

    return $facility;
}

    public function destroy(Facility $facility)
    {
        $facility->delete();

        return response()->json(['message' => 'Facility deleted']);
    }
}
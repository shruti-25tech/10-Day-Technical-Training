<?php

namespace App\Http\Controllers;

use App\Models\Complaint;
use Illuminate\Http\Request;

class ComplaintController extends Controller
{
    public function index()
    {
        return Complaint::all();
    }

   public function store(Request $request)
{
    $validated = $request->validate([
        'facility_id' => 'required|integer',
        'user_id' => 'nullable|integer',
        'complaint_text' => 'required|string|max:255',
        'complaint_date' => 'required|date',
        'status' => 'required|string|max:50',
    ]);

    $complaint = Complaint::create($validated);

    return response()->json($complaint, 201);
}

    public function show(Complaint $complaint)
    {
        return $complaint;
    }

   public function update(Request $request, Complaint $complaint)
{
    $validated = $request->validate([
        'facility_id' => 'required|integer',
        'user_id' => 'nullable|integer',
        'complaint_text' => 'required|string|max:255',
        'complaint_date' => 'required|date',
        'status' => 'required|string|max:50',
    ]);

    $complaint->update($validated);

    return $complaint;
}

    public function destroy(Complaint $complaint)
    {
        $complaint->delete();

        return response()->json(['message' => 'Complaint deleted']);
    }
}

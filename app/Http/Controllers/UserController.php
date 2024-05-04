<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $role = $request->query('role');
        $show_fields = ['id','name','surname','photo','email','bio','role_id','visible'];
        if($role){
            $users = User::with('role')
            ->select($show_fields)
            ->where('role_id',$role)
            ->where('visible',true)
            ->orderBy('surname')
            ->get();
            
        }else {

            $users = User::with('role')->get();
            
        }

        return response()->json([
            'ok' => true,
            'data' => $users
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        return response()->json([
            'ok' => true,
            'message' => 'Usuario agregado con éxito.'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //

        dd($request);
        return response()->json([
            'ok' => true,
            'message' => 'Usuario actualizado con éxito.',
            'data' => $request->files
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function upload(Request $request, string $id)
    {
        //
        return response()->json([
            'ok' => true,
            'message' => 'Imagen guardada con éxito.',
            'data' => $request->type
        ]);
    }
}

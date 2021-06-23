<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClienteController extends Controller
{
    public function listarClientes()
    {
    	 
       try {
       	$clientes = DB::select("SELECT * FROM cliente");
        return $clientes;
       } catch (Exception $e) {
       	return "Error";
       }
    }

    public function mostrarCliente($id)
    {
    	try {
       	$clientes = DB::select("SELECT * FROM cliente WHERE id="{$id});
        return $clientes;
       } catch (Exception $e) {
       	return "Error";
       }
       
    }
     public function editarCliente(Request $request, $id)
    {
        $nombre = $request->get('nombre');
        $apellido_p = $request->get('apellido_p');
        $apellido_m = $request->get('apellido_m');
        $correo = $request->get('correo');
        $edad = $request->get('edad');
        $sexo = $request->get('sexo');
        $fecha_registro = $request->get('fecha_registro');
      
        try {
            DB::insert(
                "UPDATE cliente SET 
            nombre = ?,  
            apellido_p = ?,  
            apellido_m = ?,  
            correo = ?,  
            edad = ?,  
            sexo = ?,  
            fecha_registro = ? WHERE id = ?",

                [$nombre, $apellido_p, $apellido_m, $correo, $edad, $sexo, $fecha_registro, $id]
            );
            return "Actualizacion exitosa";
        } catch (\Throwable $th) {
            return "ERROR";
        }
        return "ERROR";
    }

    public function eliminarCliente($id)
    {
       try {
       	DB::delete("DELETE FROM cliente WHERE id = {$id}");
            return "Eliminacion exitosa";
       } catch (Exception $e) {
       	return "Error";
       }
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RentaController extends Controller
{
     public function rentaContenido($id_c,$id_con,$numero_tarjeta, $fecha_exp, $codigo_seg)
    {
    	try {
            DB::insert("INSERT INTO pago VALUES 
            (NULL,
            '{$numero_tarjeta}',
            '{$fecha_exp}',
            '{$codigo_seg}',
            '{$id_c}'
            )");
            try {
            	 $id_p = DB::select("SELECT MAX(id) FROM pago");
            	DB::insert("INSERT INTO renta VALUES 
            (NULL,
            '{$id_p}',
            '{$id_con}'
            )");
            	return "RENTA COMPLETADA";
            } catch (Exception $e) {
            	
            }
        } catch (\Throwable $th) {
            return "ERROR AL INSERTAR" . $th;
        }

    }
    public function contenidoRentado($id)
    {
		  try {
		  	$data=DB::select("select* from contenido join renta on renta.contenido_id= contenido.id join pago on renta.pago_id= pago.id where cliente_id="{$id});
		  	return $data;
		  } catch (Exception $e) {
		  	return "ERROR";
		  }
        

    }
    public function cantidadGastada($id)
    {
    	try {
		  	
		  } catch (Exception $e) {
		  	return "ERROR";
		  }
    }
}



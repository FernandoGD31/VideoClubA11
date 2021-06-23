<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::post('/RegistrarContenido', 'ApiController@RegistrarContenido');
Route::post('/EditarContenido/{id}', 'ApiController@EditarContenido');
Route::get('/EliminarContenido/{id}', 'ApiController@EliminarContenido');
Route::get('/MostrarContenido', 'ApiController@MostrarContenido');
Route::post('/MostrarClientes','ClienteController@listarClientes');
Route::post('/MostrarCliente/{id}','ClienteController@mostrarCliente');
Route::post('/EditarCliente/{id}','ClienteController@editarCliente');
Route::post('/EliminarCliente/{id}','ClienteController@eliminarCliente');
Route::post('/RentaContenido/{id_c}/{id_con}/{numero_tarjeta}/{fecha_exp}/{codigo_seg}','RentaController@rentaContenido');
Route::post('/ContenidoRentado/{id}','RentaController@contenidoRentado');

<?php

namespace PEDIDOS;

use Illuminate\Database\Eloquent\Model;

class Pedidos extends Model
{
    protected $table = 'pedidos';
	
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'numero_pedido', 'id_cliente', 'id_producto', 'id_estado_pedido', 
        'cantidad', 'precio', 'precio_total', 
        'tiene_descuento_porprod', 'descuento_porprod', 'precio_descuento_porprod', 'precio_total_descuento_porprod',
        'tiene_descuento_pormrc', 'descuento_pormrc', 'precio_descuento_pormrc', 'precio_total_descuento_pormrc'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at', 'deleted_at',
        'user_create', 'user_update', 'user_delete',
    ];
}

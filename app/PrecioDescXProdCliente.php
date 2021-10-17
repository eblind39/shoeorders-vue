<?php

namespace PEDIDOS;

use Illuminate\Database\Eloquent\Model;

class PrecioDescXProdCliente extends Model
{
    protected $table = 'precio_desc_x_prod_cliente';
	
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_cliente', 'id_producto', 'descuento', 'precio', 'observaciones', 
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'id', 
        'created_at', 'updated_at', 'deleted_at',
        'user_create', 'user_update', 'user_delete',
    ];
}

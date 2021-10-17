<?php

namespace PEDIDOS;

use Illuminate\Database\Eloquent\Model;

class MarcasXCliente extends Model
{
    protected $table = 'marcas_x_cliente';
	
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'id_cliente', 'id_marca', 'descuento', 'observaciones', 
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

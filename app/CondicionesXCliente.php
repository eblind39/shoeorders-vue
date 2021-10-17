<?php

namespace PEDIDOS;

use Illuminate\Database\Eloquent\Model;

class CondicionesXCliente extends Model
{
    protected $table = 'condiciones_x_cliente';
	
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_cliente', 'tipo_pago', 'limite_credito', 'costo_por_envio'
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

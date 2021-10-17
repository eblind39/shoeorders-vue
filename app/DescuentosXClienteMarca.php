<?php

namespace PEDIDOS;

use Illuminate\Database\Eloquent\Model;

class DescuentosXClienteMarca extends Model
{
    protected $table = 'descuentos_x_cliente_marca';
	
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_cliente', 'id_marca', 'descuento', 
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

<?php

namespace PEDIDOS;

use Illuminate\Database\Eloquent\Model;

class SecAccesos extends Model
{
    protected $table = 'sec_accesos';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'id', 
        'id_sec_rol', 'id_sec_opcion_menu',
        'created_at', 'updated_at', 'deleted_at',
        'user_create', 'user_update', 'user_delete',
    ];
}

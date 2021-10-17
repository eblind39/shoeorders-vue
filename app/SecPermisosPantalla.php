<?php

namespace PEDIDOS;

use Illuminate\Database\Eloquent\Model;

class SecPermisosPantalla extends Model
{
    protected $table = 'sec_permisos_pantalla';
	
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre',
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

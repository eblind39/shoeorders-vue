<?php

namespace PEDIDOS;

use Illuminate\Database\Eloquent\Model;

class SecOpcionesMenu extends Model
{
    protected $table = 'sec_opciones_menu';
    protected $primaryKey = 'id_opcion_menu';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'descripcion', 'ruta', 'componente_ruta', 'nombre_ruta', 
        'es_form_registro', 'icon_fa', 'imagen', 'tip'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'id_opcion_menu', 'id_opcion_menu_padre', 
        'created_at', 'updated_at', 'deleted_at',
        'user_create', 'user_update', 'user_delete'
    ];
}

<?php

namespace PEDIDOS;

use Illuminate\Database\Eloquent\Model;

class Catalogos extends Model
{
    protected $table = 'catalogos';
    protected $primaryKey = 'id_catalogo';
	
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_catalogo', 'id_catalogo_padre', 'codigo_catalogo', 'valor',
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

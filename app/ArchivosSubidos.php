<?php

namespace PEDIDOS;

use Illuminate\Database\Eloquent\Model;

class ArchivosSubidos extends Model
{
    protected $table = 'archivos_subidos';
	
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'es_imagen', 'nombre_original', 'imagen_original_uid', 'imagen_lowres_uid',
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

<?php

namespace PEDIDOS;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $table = 'productos';
	
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'referencia_cod_prov', 'nombre', 'descripcion', 'id_archivo_subido_img', 'id_color', 'id_marca', 
        'id_tipo_material', 'id_genero', 'id_categoria', 'precio', 'total_unidades',
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

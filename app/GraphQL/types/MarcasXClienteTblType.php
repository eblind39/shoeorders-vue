<?php

namespace PEDIDOS\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class MarcasXClienteTblType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'MarcasXClienteTbl',
        'description' => 'Details about a MarcasXClienteTbl',
    ];

    public function fields() : array
    {
        return [
            'id' => [
                'type' => Type::int(),
                'description' => 'Id de la MarcasXCliente'
            ],
            'id_cliente' => [
                'type' => Type::int(),
                'description' => 'Id del Cliente'
            ],
            'id_marca' => [
                'type' => Type::int(),
                'description' => 'Id de la Marca'
            ],
            'nombre_marca' => [
                'type' => Type::string(),
                'description' => 'Nombre de la marca'
            ],
            'id_archivo_subido_img' => [
                'type' => Type::int(),
                'description' => 'Id imagen de marca'
            ],
            'imagen_lowres_uid' => [
                'type' => Type::string(),
                'description' => 'Imagen en baja calidad'
            ],
            'imagen_original_uid' => [
                'type' => Type::string(),
                'description' => 'Imagen original'
            ],
            'url_imagen_lowres_uid' => [
                'type' => Type::string(),
                'description' => 'URL Imagen en baja calidad'
            ],
            'url_imagen_original_uid' => [
                'type' => Type::string(),
                'description' => 'URL Imagen original'
            ],
            'descuento' => [
                'type' => Type::int(),      // DEBE SER DECIMAL CURRENCY
                'description' => 'descuento de marcas x cliente'
            ],
            'observaciones' => [
                'type' => Type::string(),
                'description' => 'Observaciones de vinculacion marcasXCliente'
            ],
        ];
    }
}
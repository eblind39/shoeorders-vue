<?php

namespace PEDIDOS\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class MarcaImgType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'MarcaImg',
        'description' => 'Details about a Marca',
    ];

    public function fields() : array
    {
        return [
            'id' => [
                'type' => Type::int(),
                'description' => 'Id de Marca'
            ],
            'nombre_marca' => [
                'type' => Type::string(),
                'description' => 'Name of the Marca'
            ],
            'id_archivo_subido_img' => [
                'type' => Type::int(),
                'description' => 'Logo of Marca'
            ],
            'imagen_lowres_uid' => [
                'type' => Type::string(),
                'description' => 'URL del logo en baja calidad'
            ],
            'imagen_original_uid' => [
                'type' => Type::string(),
                'description' => 'URL del logo original'
            ],
            'url_imagen_lowres_uid' => [
                'type' => Type::string(),
                'description' => 'URL del logo en baja calidad'
            ],
            'url_imagen_original_uid' => [
                'type' => Type::string(),
                'description' => 'URL del logo original'
            ],
        ];
    }
}
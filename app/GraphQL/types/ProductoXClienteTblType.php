<?php

namespace PEDIDOS\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class ProductoXClienteTblType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'ProductoXClienteTbl',
        'description' => 'Details about a ProductoXCliente',
    ];

    public function fields() : array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'Id del ProductoXCliente'
            ],
            'id_cliente' => [
                'type' => Type::int(),
                'description' => 'Id de cliente asignado'
            ],
            'id_producto' => [
                'type' => Type::int(),
                'description' => 'Id de producto asignado'
            ],
            'precio' => [
                'type' => Type::int(),
                'description' => 'Id Imagen del producto'
            ],
            'descuento' => [
                'type' => Type::int(),
                'description' => 'Precio especial para el cliente'
            ],
            'observaciones' => [
                'type' => Type::string(),
                'description' => 'Observaciones generales'
            ],
            'referencia_cod_prov' => [
                'type' => Type::string(),
                'description' => 'Código del producto de referencia del proveedor'
            ],
            'nombre_producto' => [
                'type' => Type::string(),
                'description' => 'Nombre del producto'
            ],
            'id_marca' => [
                'type' => Type::int(),
                'description' => 'Id de marca del producto'
            ],
            'nombre_marca' => [
                'type' => Type::string(),
                'description' => 'Nombre de la marca del producto'
            ],
            'id_archivo_subido_img' => [
                'type' => Type::int(),
                'description' => 'Id de la imágen asociada al producto'
            ],
            'imagen_lowres_uid' => [
                'type' => Type::string(),
                'description' => 'Imagen en baja calidad del producto'
            ],
            'imagen_original_uid' => [
                'type' => Type::string(),
                'description' => 'Imagen original asociada'
            ],
            'url_imagen_lowres_uid' => [
                'type' => Type::string(),
                'description' => 'URL de Imagen en baja calidad'
            ],
            'url_imagen_original_uid' => [
                'type' => Type::string(),
                'description' => 'URL de Imagen original asociada'
            ],
        ];
    }
}
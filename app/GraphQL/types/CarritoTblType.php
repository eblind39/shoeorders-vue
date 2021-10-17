<?php

namespace PEDIDOS\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class CarritoTblType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'CarritoTbl',
        'description' => 'Details about a CarritoTbl',
    ];

    public function fields() : array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'Id de Carrito'
            ],
            'id_estado_carrito' => [
                'type' => Type::int(),
                'description' => 'Estado del Carrito (DRAFT, CHECKOUT, APPROVED)'
            ],
            'id_cliente' => [
                'type' => Type::int(),
                'description' => 'Id del cliente dueño del carrito'
            ],
            'id_producto' => [
                'type' => Type::int(),
                'description' => 'Id del producto a comprar'
            ],
            'referencia_cod_prov' => [
                'type' => Type::string(),
                'description' => 'Codigo de referencia del producto'
            ],
            'prod_descripcion' => [
                'type' => Type::string(),
                'description' => 'Descripcion del producto'
            ],
            'cantidad' => [
                'type' => Type::int(),
                'description' => 'Cantidad del producto'
            ],
            'precio' => [
                'type' => Type::int(),
                'description' => 'Precio unitario del producto'
            ],
            'precio_total' => [
                'type' => Type::int(),
                'description' => 'Precio total por producto'
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
        ];
    }
}
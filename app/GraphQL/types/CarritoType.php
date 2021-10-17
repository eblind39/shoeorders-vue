<?php

namespace PEDIDOS\GraphQL\Types;

use PEDIDOS\Carrito;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class CarritoType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'Carrito',
        'description' => 'Details about a Carrito',
        'model' => Carrito::class
    ];

    public function fields() : array
    {
        return [
            'id' => [
                'type' => Type::int(),
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
            'tiene_descuento_porprod' => [
                'type' => Type::int(),
                'description' => 'Indica si el producto tiene descuento'
            ],
            'descuento_porprod' => [
                'type' => Type::int(),
                'description' => 'Descuento por producto'
            ],
            'precio_descuento_porprod' => [
                'type' => Type::int(),
                'description' => 'Precio unitario del producto con descuento'
            ],
            'precio_total_descuento_porprod' => [
                'type' => Type::int(),
                'description' => 'Precio total del pedido con descuento'
            ],
            'tiene_descuento_pormrc' => [
                'type' => Type::int(),
                'description' => 'Indica si el producto tiene descuento'
            ],
            'descuento_pormrc' => [
                'type' => Type::int(),
                'description' => 'Descuento por marca'
            ],
            'precio_descuento_pormrc' => [
                'type' => Type::int(),
                'description' => 'Precio unitario del producto con descuento'
            ],
            'precio_total_descuento_pormrc' => [
                'type' => Type::int(),
                'description' => 'Precio total del pedido con descuento'
            ],
        ];
    }
}
<?php

namespace PEDIDOS\GraphQL\Types;

use PEDIDOS\PrecioDescXProdCliente;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class ProductoXClienteType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'ProductoXCliente',
        'description' => 'Details about a ProductoXCliente',
        'model' => PrecioDescXProdCliente::class
    ];

    public function fields() : array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'Id de ProductoXCliente'
            ],
            'id_cliente' => [
                'type' => Type::int(),
                'description' => 'id_cliente asignado'
            ],
            'id_producto' => [
                'type' => Type::int(),
                'description' => 'id_producto asignado'
            ],
            'descuento' => [
                'type' => Type::int(),      // DEBE SER DECIMAL CURRENCY
                'description' => 'descuento de producto x cliente'
            ],
            'precio' => [
                'type' => Type::int(),      // DEBE SER DECIMAL CURRENCY
                'description' => 'precio de producto x cliente'
            ],
            'observaciones' => [
                'type' => Type::string(),
                'description' => 'Observaciones of the PrecioDescXProdCliente'
            ],
        ];
    }
}
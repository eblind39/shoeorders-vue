<?php

namespace PEDIDOS\GraphQL\Types;

use PEDIDOS\MarcasXCliente;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class MarcasXClienteType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'MarcasXCliente',
        'description' => 'Details about a Marca',
        'model' => MarcasXCliente::class
    ];

    public function fields() : array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'Id de MarcasXCliente'
            ],
            'id_cliente' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'id_cliente de MarcasXCliente'
            ],
            'id_marca' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'id_marca de MarcasXCliente'
            ],
            'descuento' => [
                'type' => Type::int(),      // DEBE SER DECIMAL CURRENCY
                'description' => 'descuento de marcas x cliente'
            ],
            'observaciones' => [
                'type' => Type::string(),
                'description' => 'Observaciones of the MarcasXCliente'
            ],
        ];
    }
}
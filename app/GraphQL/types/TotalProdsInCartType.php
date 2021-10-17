<?php

namespace PEDIDOS\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class TotalProdsInCartType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'TotalProdsInCart',
        'description' => 'Details about a TotalProdsInCart',
    ];

    public function fields() : array
    {
        return [
            'totalprods' => [
                'type' => Type::int(),
                'description' => 'Total de productos'
            ],
        ];
    }
}
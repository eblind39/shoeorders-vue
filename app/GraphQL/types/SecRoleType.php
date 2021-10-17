<?php

namespace PEDIDOS\GraphQL\Types;

use PEDIDOS\SecRole;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class SecRoleType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'SecRole',
        'description' => 'Details about a SecRole',
        'model' => SecRole::class
    ];

    public function fields() : array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'Id del SecRole'
            ],
            'name' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Name of the SecRole'
            ],
            'codigo' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Codigo of the SecRole'
            ],
            'description' => [
                'type' => Type::string(),
                'description' => 'Description of SecRole'
            ],
        ];
    }
}
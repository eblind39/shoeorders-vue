<?php

namespace PEDIDOS\GraphQL\Types;

use PEDIDOS\SecOpcionesMenu;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class SecOpcionMenuTreeType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'SecOpcionMenuTree',
        'description' => 'Details about a SecOpcionMenuTree',
    ];

    public function fields() : array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'Id del SecOpcionMenuTree'
            ],
            'icon' => [
                'type' => Type::string(),
                'description' => 'Indicates if the node is file or folder'
            ],
            'esfrmreg' => [
                'type' => Type::boolean(),
                'description' => 'Indicates if the node represents a crud form'
            ],
            'inode' => [
                'type' => Type::boolean(),
                'description' => 'Is the node a folder or file?'
            ],
            'label' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Text to show in the node'
            ],
            'open' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Is the node opened?'
            ],
        ];
    }
}
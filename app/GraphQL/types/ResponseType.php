<?php

namespace PEDIDOS\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class ResponseType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'Response',
        'description' => 'Details about a HTTP response'
    ];
    
    public function fields() {
        return [
            'message' => [
                'type' => Type::string(),
                'description' => 'Message returned'
            ]
        ];
    }
}
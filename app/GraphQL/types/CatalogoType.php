<?php

namespace PEDIDOS\GraphQL\Types;

use PEDIDOS\Catalogos;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class CatalogoType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'Catalogo',
        'description' => 'Details about a Catalogo',
        'model' => Catalogos::class
    ];

    public function fields() : array
    {
        return [
            'id_catalogo' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'Id del Catalogo'
            ],
            'id_catalogo_padre' => [
                'type' => Type::int(),
                'description' => 'Id del padre de Catalogo'
            ],
            'codigo_catalogo' => [
                'type' => Type::string(),
                'description' => 'Catalogo code'
            ],
            'valor' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Catalogo value'
            ],
        ];
    }
}
<?php

namespace PEDIDOS\GraphQL\Types;

use PEDIDOS\Marcas;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class MarcaType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'Marca',
        'description' => 'Details about a Marca',
        'model' => Marcas::class
    ];

    public function fields() : array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'Id de Marca'
            ],
            'nombre' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Name of the Marca'
            ],
            'id_archivo_subido_img' => [
                'type' => Type::int(),
                'description' => 'Logo of Marca'
            ],
        ];
    }
}
<?php

namespace PEDIDOS\GraphQL\Types;

use PEDIDOS\User;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class UserGraphType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'UserGraph',
        'description' => 'Details about an User',
        'model' => User::class
    ];

    public function fields() : array
    {
        return [
            'id' => [
                'type' => Type::int(),
                'description' => 'Id of the User'
            ],
            'username' => [
                'type' => Type::string(),
                'description' => 'Name of the User'
            ],
            'email' => [
                'type' => Type::string(),
                'description' => 'Email of User'
            ],
            'id_archivo_subido_img' => [
                'type' => Type::int(),
                'description' => 'User,s photo'
            ],
            'nombre_completo' => [
                'type' => Type::string(),
                'description' => 'Full name of User'
            ],
            'telefono_fijo' => [
                'type' => Type::string(),
                'description' => 'Landline of User'
            ],
            'telefono_celular' => [
                'type' => Type::string(),
                'description' => 'Mobil number of User'
            ],
            'id_ciudad' => [
                'type' => Type::int(),
                'description' => 'City Id'
            ],
            'id_zona' => [
                'type' => Type::int(),
                'description' => 'Zone Id'
            ],
            'talla_zapato' => [
                'type' => Type::float(),
                'description' => 'Zone Id'
            ],
            'cedula' => [
                'type' => Type::string(),
                'description' => 'Document Id User'
            ],
            'direccion' => [
                'type' => Type::string(),
                'description' => 'User Address'
            ],
            'id_tipo_pago' => [
                'type' => Type::int(),
                'description' => 'Id type of payment'
            ],
            'limite_credito' => [
                'type' => Type::float(),
                'description' => 'Credit limit'
            ],
            'costo_por_envio' => [
                'type' => Type::float(),
                'description' => 'Shipping cost'
            ],
        ];
    }
}
<?php

namespace PEDIDOS\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class UserTblType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'UserTbl',
        'description' => 'Details about a UserTbl',
    ];

    public function fields() : array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'Id del UserTbl'
            ],
            'username' => [
                'type' => Type::string(),
                'description' => 'Nombre de usuario'
            ],
            'email' => [
                'type' => Type::string(),
                'description' => 'Correo electronico'
            ],
            'id_archivo_subido_img' => [
                'type' => Type::int(),
                'description' => 'Id de su photo'
            ],
            'nombre_completo' => [
                'type' => Type::string(),
                'description' => 'Nombre completo del usuario'
            ],
            'telefono_fijo' => [
                'type' => Type::string(),
                'description' => 'Telefono fijo'
            ],
            'telefono_celular' => [
                'type' => Type::string(),
                'description' => 'Telefono movil'
            ],
            'id_ciudad' => [
                'type' => Type::int(),
                'description' => 'Id ciudad'
            ],
            'ciudad' => [
                'type' => Type::string(),
                'description' => 'Nombre de la ciudad'
            ],
            'id_zona' => [
                'type' => Type::int(),
                'description' => 'Id de zona'
            ],
            'zona' => [
                'type' => Type::string(),
                'description' => 'Nombre de la zona'
            ],
            'talla_zapato' => [
                'type' => Type::int(),
                'description' => 'Talla de zapato'
            ],
            'cedula' => [
                'type' => Type::string(),
                'description' => 'Cedula'
            ],
            'direccion' => [
                'type' => Type::string(),
                'description' => 'Direccion'
            ],
            'url_imagen_lowres_uid' => [
                'type' => Type::string(),
                'description' => 'Imagen en baja resolucion'
            ],
            'url_imagen_original_uid' => [
                'type' => Type::string(),
                'description' => 'Imagen en calidad original'
            ],
            'id_tipo_pago' => [
                'type' => Type::int(),
                'description' => 'Id payment type'
            ],
            'tipo_pago' => [
                'type' => Type::string(),
                'description' => 'Description of payment type'
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
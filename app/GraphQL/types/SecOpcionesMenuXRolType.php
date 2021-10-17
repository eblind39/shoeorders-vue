<?php

namespace PEDIDOS\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class SecOpcionesMenuXRolType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'SecOpcionesMenuXRol',
        'description' => 'Details about a SecOpcionesMenuXRol',
    ];

    public function fields() : array
    {
        return [
            'id_acceso' => [
                'type' => Type::int(),
                'description' => 'Id del acceso'
            ],
            'id_opcion_menu' => [
                'type' => Type::string(),
                'description' => 'Id de la opcion de menu'
            ],
            'id_opcion_menu_padre' => [
                'type' => Type::int(),
                'description' => 'Id de la opcion de menu padre'
            ],
            'ruta' => [
                'type' => Type::string(),
                'description' => 'Ruta definida para la opción'
            ],
            'nombre_ruta' => [
                'type' => Type::string(),
                'description' => 'Nombre interno en el sistema para la ruta'
            ],
            'componente_ruta' => [
                'type' => Type::string(),
                'description' => 'Componente Vue'
            ],
            'descripcion' => [
                'type' => Type::string(),
                'description' => 'Leyenda que se muestra al usuario'
            ],
            'icon_fa' => [
                'type' => Type::string(),
                'description' => 'Icono font-awesome si tiene'
            ],
            'tip' => [
                'type' => Type::string(),
                'description' => 'tip on hover'
            ],
            'imagen' => [
                'type' => Type::string(),
                'description' => 'Imagen, si tiene'
            ],
            'es_form_registro' => [
                'type' => Type::int(),
                'description' => 'Indica si es form de registro'
            ],
        ];
    }
}
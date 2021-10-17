<?php

namespace PEDIDOS\GraphQL\Types;

use PEDIDOS\SecOpcionesMenu;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class SecOpcionMenuType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'SecOpcionMenu',
        'description' => 'Details about a SecOpcionMenu',
        'model' => SecOpcionesMenu::class
    ];

    public function fields() : array
    {
        return [
            'id_opcion_menu' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'Id del SecOpcionesMenu'
            ],
            'id_opcion_menu_padre' => [
                'type' => Type::int(),
                'description' => 'Id del padre de SecOpcionesMenu'
            ],
            'descripcion' => [
                'type' => Type::string(),
                'description' => 'Description of the SecOpcionesMenu'
            ],
            'ruta' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Definition of route from SecOpcionesMenu'
            ],
            'componente_ruta' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Ubicación del Vue componente'
            ],
            'nombre_ruta' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Nombre de la ruta'
            ],
            'es_form_registro' => [
                'type' => Type::nonNull(Type::boolean()),
                'description' => 'Indicates if la ruta hace referencia a un form de registro'
            ],
            'icon_fa' => [
                'type' => Type::string(),
                'description' => 'Icono que acompaña a la opción de menú'
            ],
            'imagen' => [
                'type' => Type::string(),
                'description' => 'Imágen que acompaña a la opción de menú'
            ],
            'tip' => [
                'type' => Type::string(),
                'description' => 'Tip que acompaña a la opción de menú'
            ]
        ];
    }
}
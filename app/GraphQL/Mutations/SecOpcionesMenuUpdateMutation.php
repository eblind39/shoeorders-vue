<?php
namespace PEDIDOS\GraphQL\Mutations;

//use Closure;
use PEDIDOS\SecOpcionesMenu;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class SecOpcionesMenuUpdateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'secOpcionesMenuUpdate'
    ];

    public function type(): Type
    {
        return GraphQL::type('SecOpcionMenu');
    }

    public function args(): array
    {
        return [
            'id_opcion_menu' => ['name' => 'id_opcion_menu', 'type' => Type::int()],
            'id_opcion_menu_padre' => ['name' => 'id_opcion_menu_padre', 'type' => Type::int()],
            'descripcion' => ['name' => 'descripcion', 'type' => Type::string()],
            'ruta' => ['name' => 'ruta', 'type' => Type::string()],
            'componente_ruta' => ['name' => 'componente_ruta', 'type' => Type::string()],
            'nombre_ruta' => ['name' => 'nombre_ruta', 'type' => Type::string()],
            'es_form_registro' => ['name' => 'es_form_registro', 'type' => Type::boolean()],
            'icon_fa' => ['name' => 'icon_fa', 'type' => Type::string()],
            'imagen' => ['name' => 'imagen', 'type' => Type::string()],
            'tip' => ['name' => 'tip', 'type' => Type::string()]
        ];
    }

    protected function rules(array $args = []): array
    {
        return [
            'id_opcion_menu' => ['required'],
            'descripcion' => ['required', 'max:100']
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        // return \PEDIDOS\SecOpcionesMenu::ValidationErrorMessages();
        return [
            'id_opcion_menu.required' => 'Debe proporcionar un id de menu',
            'descripcion.required' => 'Debe ingresar una descripción',
            'descripcion.max:100' => 'Se acepta un mínimo de 100 caracteres'
        ];
    }

    public function resolve($root, $args) //, $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of SecOpcionesMenu model
        $secoptmnu = \PEDIDOS\SecOpcionesMenu::where('id_opcion_menu', '=', $args['id_opcion_menu'])->firstOrFail();
        if (!$secoptmnu) return null;
        
        $secoptmnu->id_opcion_menu_padre = $args['id_opcion_menu_padre'];
        $secoptmnu->descripcion = $args['descripcion'];
        $secoptmnu->ruta = $args['ruta'];
        $secoptmnu->componente_ruta = $args['componente_ruta'];
        $secoptmnu->nombre_ruta = $args['nombre_ruta'];
        $secoptmnu->es_form_registro = $args['es_form_registro'];
        $secoptmnu->icon_fa = $args['icon_fa'];
        $secoptmnu->imagen = $args['imagen'];
        $secoptmnu->tip = $args['tip'];
        $secoptmnu->updated_at = now();
        $secoptmnu->user_update = auth()->user()->username;
        
        // Save the model
        $secoptmnu->save();
        //$secoptmnu->update(['id_opcion_menu' => $args['id_opcion_menu']]);


        /*$secoptmnu = \PEDIDOS\SecOpcionesMenu::updateOrCreate(
            [
                    'id_opcion_menu' => $args['id_opcion_menu']
            ],
            [
                    'id_opcion_menu_padre' => $args['id_opcion_menu_padre'],
                    'descripcion' => $args['descripcion'],
                    'componente_ruta' => $args['componente_ruta'],
                    'nombre_ruta' => $args['nombre_ruta'],
                    'es_form_registro' => $args['es_form_registro'],
                    'icon_fa' => $args['icon_fa'],
                    'imagen' => $args['imagen'],
                    'updated_at' => now(),
                    'user_update' => 'admin'
            ]
        );*/

        // return $secoptmnu;
        return SecOpcionesMenu::where('id_opcion_menu', '=', $args['id_opcion_menu'])->firstOrFail();
    }
}
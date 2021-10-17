<?php
namespace PEDIDOS\GraphQL\Mutations;

// Logging
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\FirePHPHandler;

//use Closure;
use PEDIDOS\SecOpcionesMenu;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class SecOpcionesMenuCreateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'secOpcionMenuCreate'
    ];

    public function type(): Type
    {
        return GraphQL::type('SecOpcionMenu');
    }

    public function args(): array
    {
        return [
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
            'descripcion' => ['required', 'max:100']
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        // return \PEDIDOS\Link::ValidationErrorMessages();
        return [
            'descripcion.required' => 'Debe ingresar una descripción',
            'descripcion.max:100' => 'Se acepta mínimo de 100 caracteres'
        ];
    }

    public function resolve($root, $args) // , $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of Link model
        $secoptmnu = new \PEDIDOS\SecOpcionesMenu;
        $secoptmnu->id_opcion_menu_padre = $args['id_opcion_menu_padre'];
        $secoptmnu->descripcion = $args['descripcion'];
        $secoptmnu->ruta = $args['ruta'];
        $secoptmnu->componente_ruta = $args['componente_ruta'];
        $secoptmnu->nombre_ruta = $args['nombre_ruta'];
        $secoptmnu->es_form_registro = $args['es_form_registro'];
        $secoptmnu->icon_fa = $args['icon_fa'];
        $secoptmnu->imagen = $args['imagen'];
        $secoptmnu->tip = $args['tip'];
        $secoptmnu->updated_at = null;
        $secoptmnu->user_create = auth()->user()->username;;
    
        // Save the model
        $secoptmnu->save();

//Logging
// Create the logger
$logger = new Logger('pedidos');
// Now add some handlers
$logger->pushHandler(new StreamHandler(__DIR__.'/pedidos.log', Logger::DEBUG));
$logger->pushHandler(new FirePHPHandler());
// You can now use your logger
$logger->addInfo('SecOpcionesMenuQuery creado satisfactoriamente');
//Logging*/

        // return $secoptmnu;
        return SecOpcionesMenu::where('id_opcion_menu', '=', SecOpcionesMenu::max('id_opcion_menu'))->firstOrFail();
    }
}
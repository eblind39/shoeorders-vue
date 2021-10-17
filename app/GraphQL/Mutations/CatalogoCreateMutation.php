<?php
namespace PEDIDOS\GraphQL\Mutations;

// Logging
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\FirePHPHandler;

//use Closure;
use PEDIDOS\Catalogos;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class CatalogoCreateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'catalogoCreate'
    ];

    public function type(): Type
    {
        return GraphQL::type('Catalogo');
    }

    public function args(): array
    {
        return [
            'id_catalogo_padre' => ['name' => 'id_catalogo_padre', 'type' => Type::int()],
            'codigo_catalogo' => ['name' => 'codigo_catalogo', 'type' => Type::string()],
            'valor' => ['name' => 'valor', 'type' => Type::string()],
        ];
    }

    protected function rules(array $args = []): array
    {
        return [
            'codigo_catalogo' => ['required', 'max:50'],
            'valor' => ['required', 'max:255'],
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        // return \PEDIDOS\Link::ValidationErrorMessages();
        return [
            'codigo_catalogo.required' => 'Debe ingresar un código',
            'codigo_catalogo.max:50' => 'Se acepta máximo de 50 caracteres',
            'valor.required' => 'Debe ingresar un valor',
            'valor.max:100' => 'Se acepta máximo de 255 caracteres',
        ];
    }

    public function resolve($root, $args) // , $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of Link model
        $cat = new \PEDIDOS\Catalogos;
        $cat->id_catalogo_padre = $args['id_catalogo_padre'];
        $cat->codigo_catalogo = $args['codigo_catalogo'];
        $cat->valor = $args['valor'];
        $cat->updated_at = null;
        $cat->user_create = auth()->user()->username;;
    
        // Save the model
        $cat->save();

//Logging
// Create the logger
$logger = new Logger('pedidos');
// Now add some handlers
$logger->pushHandler(new StreamHandler(__DIR__.'/pedidos.log', Logger::DEBUG));
$logger->pushHandler(new FirePHPHandler());
// You can now use your logger
$logger->addInfo('SecOpcionesMenuQuery creado satisfactoriamente');
//Logging*/

        // return $cat;
        return Catalogos::where('id_catalogo', '=', Catalogos::max('id_catalogo'))->firstOrFail();
    }
}
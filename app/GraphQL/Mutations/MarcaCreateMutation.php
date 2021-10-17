<?php
namespace PEDIDOS\GraphQL\Mutations;

// Logging
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\FirePHPHandler;

//use Closure;
use PEDIDOS\Marcas;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class MarcaCreateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'marcaCreate'
    ];

    public function type(): Type
    {
        return GraphQL::type('Marca');
    }

    public function args(): array
    {
        return [
            'nombre' => ['name' => 'nombre', 'type' => Type::string()],
            'id_archivo_subido_img' => ['name' => 'id_archivo_subido_img', 'type' => Type::int()],
        ];
    }
    
    protected function rules(array $args = []): array
    {
        return [
            'nombre' => ['required', 'max:50']
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'nombre.required' => 'Debe ingresar un nombre',
            'nombre.max:50' => 'Se acepta un mínimo de 50 caracteres'
        ];
    }

    public function resolve($root, $args) // , $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of Link model
        $marca = new \PEDIDOS\Marcas;
        $marca->nombre = $args['nombre'];
        $marca->id_archivo_subido_img = $args['id_archivo_subido_img'];
        $marca->updated_at = null;
        $marca->user_create = auth()->user()->username;
    
        // Save the model
        $marca->save();

        // return $marca;
        return Marcas::where('id', '=', Marcas::max('id'))->firstOrFail();
    }
}
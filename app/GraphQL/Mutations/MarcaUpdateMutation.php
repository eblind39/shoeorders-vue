<?php
namespace PEDIDOS\GraphQL\Mutations;

//use Closure;
use PEDIDOS\Marcas;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class MarcaUpdateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'marcaUpdate'
    ];

    public function type(): Type
    {
        return GraphQL::type('Marca');
    }

    public function args(): array
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()],
            'nombre' => ['name' => 'nombre', 'type' => Type::string()],
            'id_archivo_subido_img' => ['name' => 'id_archivo_subido_img', 'type' => Type::int()],
        ];
    }

    protected function rules(array $args = []): array
    {
        return [
            'id' => ['required'],
            'nombre' => ['required', 'max:50']
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'id.required' => 'Debe proporcionar un id de marca',
            'nombre.required' => 'Debe ingresar un nombre',
            'nombre.max:50' => 'Se acepta un mínimo de 50 caracteres'
        ];
    }

    public function resolve($root, $args) //, $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of Marcas model
        $marca = \PEDIDOS\Marcas::where('id', '=', $args['id'])->firstOrFail();
        if (!$marca) return null;
        
        $marca->nombre = $args['nombre'];
        $marca->id_archivo_subido_img = $args['id_archivo_subido_img'];
        $marca->updated_at = now();
        $marca->user_update = auth()->user()->username;
        
        // Save the model
        $marca->save();
        //$marca->update(['id' => $args['id']]);


        /*$marca = \PEDIDOS\marca::updateOrCreate(
            [
                    'id' => $args['id']
            ],
            [
                    'name' => $args['name'],
                    'description' => $args['description'],
                    'updated_at' => now(),
                    'user_update' => 'admin'
            ]
        );*/

        // return $marca;
        return Marcas::where('id', '=', $args['id'])->firstOrFail();
    }
}
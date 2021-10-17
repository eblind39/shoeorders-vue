<?php
namespace PEDIDOS\GraphQL\Mutations;

//use Closure;
use PEDIDOS\SecRole;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class SecRoleUpdateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'secRoleUpdate'
    ];

    public function type(): Type
    {
        return GraphQL::type('SecRole');
    }

    public function args(): array
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()],
            'codigo' => ['name' => 'codigo', 'type' => Type::string()],
            'name' => ['name' => 'name', 'type' => Type::string()],
            'description' => ['name' => 'description', 'type' => Type::string()],
        ];
    }

    protected function rules(array $args = []): array
    {
        return [
            'id' => ['required'],
            'codigo' => ['required', 'max:50'],
            'name' => ['required', 'max:50']
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'id.required' => 'Debe proporcionar un id de rol',
            'codigo.required' => 'Debe ingresar un codigo',
            'codigo.max:50' => 'Se acepta un mínimo de 50 caracteres',
            'name.required' => 'Debe ingresar un nombre',
            'name.max:50' => 'Se acepta un mínimo de 50 caracteres'
        ];
    }

    public function resolve($root, $args) //, $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of SecRole model
        $secrole = \PEDIDOS\SecRole::where('id', '=', $args['id'])->firstOrFail();
        if (!$secrole) return null;
        
        $secrole->name = $args['name'];
        $secrole->codigo = $args['codigo'];
        $secrole->description = $args['description'];
        $secrole->updated_at = now();
        $secrole->user_update = auth()->user()->username;
        
        // Save the model
        $secrole->save();
        //$secrole->update(['id' => $args['id']]);


        /*$secrole = \PEDIDOS\SecRole::updateOrCreate(
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

        // return $secrole;
        return SecRole::where('id', '=', $args['id'])->firstOrFail();
    }
}
<?php
namespace PEDIDOS\GraphQL\Mutations;

// Logging
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\FirePHPHandler;

//use Closure;
use PEDIDOS\SecRole;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class SecRoleCreateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'secRoleCreate'
    ];

    public function type(): Type
    {
        return GraphQL::type('SecRole');
    }

    public function args(): array
    {
        return [
            'codigo' => ['name' => 'codigo', 'type' => Type::string()],
            'name' => ['name' => 'name', 'type' => Type::string()],
            'description' => ['name' => 'description', 'type' => Type::string()],
        ];
    }

    protected function rules(array $args = []): array
    {
        return [
            'codigo' => ['required', 'max:50'],
            'name' => ['required', 'max:50']
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'codigo.required' => 'Debe ingresar un codigo',
            'codigo.max:50' => 'Se acepta un mínimo de 50 caracteres',
            'name.required' => 'Debe ingresar un nombre',
            'name.max:50' => 'Se acepta un mínimo de 50 caracteres',
        ];
    }

    public function resolve($root, $args) // , $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of Link model
        $secrol = new \PEDIDOS\SecRole;
        $secrol->codigo = $args['codigo'];
        $secrol->name = $args['name'];
        $secrol->description = $args['description'];;
        $secrol->updated_at = null;
        $secrol->user_create = auth()->user()->username;
    
        // Save the model
        $secrol->save();

        // return $secrol;
        return SecRole::where('id', '=', SecRole::max('id'))->firstOrFail();
    }
}
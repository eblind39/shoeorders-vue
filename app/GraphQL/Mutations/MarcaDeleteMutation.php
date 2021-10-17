<?php
namespace PEDIDOS\GraphQL\Mutations;

use PEDIDOS\Marcas;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class MarcaDeleteMutation extends Mutation
{
    protected $attributes = [
        'name' => 'marcaDelete'
    ];

    public function type(): Type
    {
        return Type::string();
    }

    public function args(): array
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()]
        ];
    }

    protected function rules(array $args = []): array
    {
        return [
            'id' => ['required']
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'id.required' => 'Debe proporcionar un id de marca'
        ];
    }

    public function resolve($root, $args) //, $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of Link model
        // $marca = \PEDIDOS\marca::find($args['id']);
        $marca = \PEDIDOS\Marcas::where('id', '=', $args['id'])->firstOrFail();
        if (!$marca) return null;

        // delete the marca
        $marca->deleted_at = now();
        $marca->user_delete = auth()->user()->username;
        
        // Save the model
        $marca->save();
        // $marca->delete();
        return "OK";
    }
}
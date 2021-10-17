<?php
namespace PEDIDOS\GraphQL\Mutations;

use PEDIDOS\Producto;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class ProductoDeleteMutation extends Mutation
{
    protected $attributes = [
        'name' => 'productoDelete'
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
            'id.required' => 'Debe proporcionar un id de producto'
        ];
    }

    public function resolve($root, $args) //, $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of Link model
        // $marca = \PEDIDOS\marca::find($args['id']);
        $prod = \PEDIDOS\Producto::where('id', '=', $args['id'])->firstOrFail();
        if (!$prod) return null;

        // delete the producto
        $prod->deleted_at = now();
        $prod->user_delete = auth()->user()->username;
        
        // Save the model
        $prod->save();
        // $prod->delete();
        return "OK";
    }
}
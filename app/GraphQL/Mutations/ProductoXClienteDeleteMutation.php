<?php
namespace PEDIDOS\GraphQL\Mutations;

use PEDIDOS\PrecioDescXProdCliente;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class ProductoXClienteDeleteMutation extends Mutation
{
    protected $attributes = [
        'name' => 'productoXClienteDelete'
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
            'id.required' => 'Debe proporcionar un id de registro'
        ];
    }

    public function resolve($root, $args) //, $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance
        $mxcli = \PEDIDOS\PrecioDescXProdCliente::where('id', '=', $args['id'])->firstOrFail();
        if (!$mxcli) return null;

        // delete the record
        $mxcli->delete();
        return "OK";
    }
}
<?php
namespace PEDIDOS\GraphQL\Mutations;

use PEDIDOS\MarcasXCliente;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class MarcaXClienteDeleteMutation extends Mutation
{
    protected $attributes = [
        'name' => 'marcaXClienteDelete'
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
        // Create instance of Link model
        // $marca = \PEDIDOS\marca::find($args['id']);
        $mxcli = \PEDIDOS\MarcasXCliente::where('id', '=', $args['id'])->firstOrFail();
        if (!$mxcli) return null;

        // delete the marca por cliente
        $mxcli->deleted_at = now();
        $mxcli->user_delete = auth()->user()->username;
        
        // Save the model
        $mxcli->save();
        //$mxcli->delete();
        return "OK";
    }
}
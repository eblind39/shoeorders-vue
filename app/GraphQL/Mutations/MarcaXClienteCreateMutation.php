<?php
namespace PEDIDOS\GraphQL\Mutations;

// Logging
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\FirePHPHandler;

//use Closure;
use PEDIDOS\MarcasXCliente;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class MarcaXClienteCreateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'marcaXClienteCreate'
    ];

    public function type(): Type
    {
        return GraphQL::type('MarcasXCliente');
    }

    public function args(): array
    {
        return [
            'id_cliente' => ['name' => 'id_cliente', 'type' => Type::int()],
            'id_marca' => ['name' => 'id_marca', 'type' => Type::int()],
            'descuento' => ['name' => 'descuento', 'type' => Type::int()],
            'observaciones' => ['name' => 'observaciones', 'type' => Type::string()],
        ];
    }
    
    protected function rules(array $args = []): array
    {
        return [
            'id_cliente' => ['required'],
            'id_marca' => ['required'],
            'descuento' => ['required'],
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'id_cliente.required' => 'Debe seleccionar un cliente',
            'id_marca.required' => 'Debe seleccionar una marca',
            'descuento.required' => 'Debe indicar un descuento',
        ];
    }

    public function resolve($root, $args) // , $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of Link model
        $mxcli = new \PEDIDOS\MarcasXCliente;
        $mxcli->id_cliente = $args['id_cliente'];
        $mxcli->id_marca = $args['id_marca'];
        $mxcli->descuento = $args['descuento'];
        $mxcli->observaciones = $args['observaciones'];
        $mxcli->updated_at = null;
        $mxcli->user_create = auth()->user()->username;;
    
        // Save the model
        $mxcli->save();

        // return $mxcli;
        return MarcasXCliente::where('id', '=', MarcasXCliente::max('id'))->firstOrFail();
    }
}
<?php
namespace PEDIDOS\GraphQL\Mutations;

//use Closure;
use PEDIDOS\MarcasXCliente;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class MarcaXClienteUpdateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'marcaXClienteUpdate'
    ];

    public function type(): Type
    {
        return GraphQL::type('MarcasXCliente');
    }

    public function args(): array
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()],
            'id_cliente' => ['name' => 'id_cliente', 'type' => Type::int()],
            'id_marca' => ['name' => 'id_marca', 'type' => Type::int()],
            'descuento' => ['name' => 'descuento', 'type' => Type::int()],
            'observaciones' => ['name' => 'observaciones', 'type' => Type::string()],
        ];
    }

    protected function rules(array $args = []): array
    {
        return [
            'id' => ['required'],
            'id_cliente' => ['required'],
            'id_marca' => ['required'],
            'descuento' => ['required'],
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'id.required' => 'Debe proporcionar un id de registro',
            'id_cliente.required' => 'Debe seleccionar un cliente',
            'id_marca.required' => 'Debe seleccionar una marca',
            'descuento.required' => 'Debe indicar el descuento',
        ];
    }

    public function resolve($root, $args) //, $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of Marcas model
        $mxcli = \PEDIDOS\MarcasXCliente::where('id', '=', $args['id'])->firstOrFail();
        if (!$mxcli) return null;
        
        $mxcli->id_cliente = $args['id_cliente'];
        $mxcli->id_marca = $args['id_marca'];
        $mxcli->descuento = $args['descuento'];
        $mxcli->observaciones = $args['observaciones'];
        $mxcli->updated_at = now();
        $mxcli->user_update = auth()->user()->username;
        
        // Save the model
        $mxcli->save();
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
        return MarcasXCliente::where('id', '=', $args['id'])->firstOrFail();
    }
}
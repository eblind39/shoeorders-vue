<?php
namespace PEDIDOS\GraphQL\Mutations;

//use Closure;
use PEDIDOS\PrecioDescXProdCliente;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class ProductoXClienteUpdateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'productoXClienteUpdate'
    ];

    public function type(): Type
    {
        return GraphQL::type('ProductoXCliente');
    }

    public function args(): array
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()],
            'id_cliente' => ['name' => 'id_cliente', 'type' => Type::int()],
            'id_producto' => ['name' => 'id_producto', 'type' => Type::int()],
            'descuento' => ['name' => 'descuento', 'type' => Type::int()],
            'precio' => ['name' => 'precio', 'type' => Type::int()],
            'observaciones' => ['name' => 'observaciones', 'type' => Type::string()],
        ];
    }

    protected function rules(array $args = []): array
    {
        return [
            'id' => ['required'],
            'id_cliente' => ['required'],
            'id_producto' => ['required'],
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'id.required' => 'Debe proporcionar un id de registro',
            'id_cliente.required' => 'Debe seleccionar un cliente',
            'id_producto.required' => 'Debe seleccionar un producto',
        ];
    }

    public function resolve($root, $args) //, $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of Marcas model
        $mxcli = \PEDIDOS\PrecioDescXProdCliente::where('id', '=', $args['id'])->firstOrFail();
        if (!$mxcli) return null;
        
        $mxcli->id_cliente = $args['id_cliente'];
        $mxcli->id_producto = $args['id_producto'];
        $mxcli->descuento = $args['descuento'];
        $mxcli->precio = $args['precio'];
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
        return PrecioDescXProdCliente::where('id', '=', $args['id'])->firstOrFail();
    }
}
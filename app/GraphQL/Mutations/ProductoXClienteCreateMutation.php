<?php
namespace PEDIDOS\GraphQL\Mutations;

// Logging
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\FirePHPHandler;

//use Closure;
use PEDIDOS\PrecioDescXProdCliente;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class ProductoXClienteCreateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'productoXClienteCreate'
    ];

    public function type(): Type
    {
        return GraphQL::type('ProductoXCliente');
    }

    public function args(): array
    {
        return [
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
            'id_cliente' => ['required'],
            'id_producto' => ['required'],
            'descuento' => ['required'],
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'id_cliente.required' => 'Debe seleccionar un cliente',
            'id_producto.required' => 'Debe seleccionar un producto',
            'descuento.required' => 'Debe indicar un descuento',
        ];
    }

    public function resolve($root, $args) // , $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of Link model
        $pxcli = new \PEDIDOS\PrecioDescXProdCliente;
        $pxcli->id_cliente = $args['id_cliente'];
        $pxcli->id_producto = $args['id_producto'];
        $pxcli->descuento = $args['descuento'];
        $pxcli->precio = $args['precio'];
        $pxcli->observaciones = $args['observaciones'];
        $pxcli->updated_at = null;
        $pxcli->user_create = auth()->user()->username;;
    
        // Save the model
        $pxcli->save();

        // return $pxcli;
        return PrecioDescXProdCliente::where('id', '=', PrecioDescXProdCliente::max('id'))->firstOrFail();
    }
}
<?php
namespace PEDIDOS\GraphQL\Mutations;

//use Closure;
use PEDIDOS\Carrito;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class CarritoUpdateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'carritoUpdate'
    ];

    public function type(): Type
    {
        return GraphQL::type('Carrito');
    }

    public function args(): array
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()],
            'id_estado_carrito' => ['name' => 'id_estado_carrito', 'type' => Type::int()],
            'id_cliente' => ['name' => 'id_cliente', 'type' => Type::int()],
            'id_producto' => ['name' => 'id_producto', 'type' => Type::int()],
            'cantidad' => ['name' => 'cantidad', 'type' => Type::int()],
            'precio' => ['name' => 'precio', 'type' => Type::int()],
            'precio_total' => ['name' => 'precio_total', 'type' => Type::int()],
        ];
    }

    protected function rules(array $args = []): array
    {
        return [
            'id' => ['required'],
            'id_estado_carrito' => ['required'],
            'id_cliente' => ['required'],
            'id_producto' => ['required'],
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'id.required' => 'Debe proporcionar un id de carrito',
            'id_estado_carrito.required' => 'Debe ingresar un estado de carrito',
            'id_cliente.required' => 'Debe ingresar un cliente',
            'id_producto.required' => 'Debe ingresar un producto',
        ];
    }
    
    public function resolve($root, $args) //, $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of Carrito model
        $crrt = \PEDIDOS\Carrito::where('id', '=', $args['id'])->firstOrFail();
        if (!$crrt) return null;
        
        $crrt->id_estado_carrito = $args['id_estado_carrito'];
        $crrt->id_cliente = $args['id_cliente'];
        $crrt->id_producto = $args['id_producto'];
        $crrt->cantidad = $args['cantidad'];
        $crrt->precio = $args['precio'];
        $crrt->precio_total = $args['precio_total'];
        $crrt->updated_at = now();
        $crrt->user_update = auth()->user()->username;
        
        // Save the model
        $crrt->save();
        //$crrt->update(['id' => $args['id']]);


        /*$crrt = \PEDIDOS\marca::updateOrCreate(
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

        // return $crrt;
        return Carrito::where('id', '=', $args['id'])->firstOrFail();
    }
}
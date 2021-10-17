<?php
namespace PEDIDOS\GraphQL\Mutations;

// Logging
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\FirePHPHandler;

//use Closure;
use PEDIDOS\Carrito;
use PEDIDOS\Producto;
use PEDIDOS\Catalogos;
use PEDIDOS\Pedidos;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;
use Illuminate\Support\Facades\DB;

class PedidoCompletarMutation extends Mutation
{
    protected $attributes = [
        'name' => 'pedidoCompletar'
    ];

    public function type(): Type
    {
        return GraphQL::type('Response');
    }

    public function args(): array
    {
        return [
            'numero_pedido' => ['name' => 'numero_pedido', 'type' => Type::string()],
        ];
    }

    public function resolve($root, $args) // , $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        $idpddcmpltd = 0;
        $codestpdd = \PEDIDOS\Catalogos::where('codigo_catalogo', '=', 'PDDCMPLTD')->firstOrFail();
        if ($codestpdd != null) $idpddcmpltd = $codestpdd->id_catalogo;
        
        return DB::select('call completar_pedido(?, ?, ?, ?)', [auth()->user()->id, auth()->user()->username, $idpddcmpltd, $args['numero_pedido']]);
    }
}
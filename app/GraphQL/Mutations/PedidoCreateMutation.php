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

class PedidoCreateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'pedidoCreate'
    ];

    public function type(): Type
    {
        return GraphQL::type('Response');
    }

    public function args(): array
    {
        return [
            
        ];
    }
    
    protected function rules(array $args = []): array
    {
        return [
            
        ];
    }
    
    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            
        ];
    }

    public function resolve($root, $args) // , $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // $cantDisp = 0;
        // $prod = Producto::where('id', '=', $args['id_producto'])->firstOrFail();
        // if ($prod != null) $cantDisp = $prod->total_unidades;
        // $cantRestante = ($cantDisp - $args['cantidad']);
        // if ($cantRestante < 0) return null;

        // $precio_total = ($prod->precio * $args['cantidad']);

        // $idestcrt = 0;
        // $estcrt = Catalogos::where('codigo_catalogo', '=', $args['cod_estado_carrito'])->firstOrFail();
        // if ($estcrt != null) $idestcrt = $estcrt->id_catalogo;

        // // Create instance of Pedidos model
        // $pdds = new \PEDIDOS\Pedidos;
        // $pdds->id_cliente = auth()->user()->id;
        // $pdds->id_producto = $args['id_producto'];
        // $pdds->cantidad = $args['cantidad'];
        // $pdds->precio = $prod->precio;
        // $pdds->precio_total = $precio_total;
        // $pdds->updated_at = null;
        // $pdds->user_create = auth()->user()->username;

        // // Save the model
        // $pdds->save();

        // // ESTO SE HARá AL REALIZAR EL PEDIDO
        // // Update the total_unidades from Product
        // $prod->total_unidades = $cantRestante;
        // $prod->updated_at = now();
        // $prod->user_update = auth()->user()->username;
        // // Save the model
        // $prod->save();
        // // ESTO SE HARá AL REALIZAR EL PEDIDO

        // // ACTUALIZAR CARRITO
        // $idestcrt = 0;
        // $estcrt = \PEDIDOS\Catalogos::where('codigo_catalogo', '=', 'DRAFT')->firstOrFail();
        // if ($estcrt != null) $idestcrt = $estcrt->id_catalogo;
        
        // $crrt = \PEDIDOS\Carrito::where([
        //                                 'id_producto' => $args['id_producto'],
        //                                 'id_cliente' => auth()->user()->id,
        //                                 'id_estado_carrito' => $idestcrt
        //                             ])->firstOrFail();

        // if (!$crrt) return null;

        // $idestcrt = 0;
        // $estcrt = \PEDIDOS\Catalogos::where('codigo_catalogo', '=', 'DELETED')->firstOrFail();
        // if ($estcrt != null) $idestcrt = $estcrt->id_catalogo;

        // // delete from the carrito
        // // $crrt->delete();
        // $crrt->id_estado_carrito = $idestcrt;
        // $crrt->updated_at = null;
        // $crrt->deleted_at = now();
        // $crrt->user_delete = auth()->user()->username;

        // // Save the model
        // $crrt->save();
        // // ACTUALIZAR CARRITO

        // // return $pdds;
        // return Carrito::where('id', '=', Carrito::max('id'))->firstOrFail();

        $idestcrt = 0;
        $estcrt = \PEDIDOS\Catalogos::where('codigo_catalogo', '=', 'APPROVED')->firstOrFail();
        if ($estcrt != null) $idestcrt = $estcrt->id_catalogo;

        $idpddnvd = 0;
        $codestpdd = \PEDIDOS\Catalogos::where('codigo_catalogo', '=', 'PDDNVDD')->firstOrFail();
        if ($codestpdd != null) $idpddnvd = $codestpdd->id_catalogo;

        $lastpdd = Pedidos::max('id');
        if ($lastpdd == null) $lastpdd = 1;
        else $lastpdd += 1;

        // generar consecutivo de pedido
        $strnumpdd = str_pad($lastpdd, 6, "0", STR_PAD_LEFT);
        
        return DB::select('call realizar_pedido(?, ?, ?, ?, ?)', [auth()->user()->id, auth()->user()->username, $idestcrt, $idpddnvd, $strnumpdd]);
    }
}
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
use PEDIDOS\PrecioDescXProdCliente;
use PEDIDOS\MarcasXCliente;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CarritoCreateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'carritoCreate'
    ];

    public function type(): Type
    {
        return GraphQL::type('Carrito');
    }

    public function args(): array
    {
        return [
            'cod_estado_carrito' => ['name' => 'cod_estado_carrito', 'type' => Type::string()],
            'id_producto' => ['name' => 'id_producto', 'type' => Type::int()],
            'cantidad' => ['name' => 'cantidad', 'type' => Type::int()],
        ];
    }
    
    protected function rules(array $args = []): array
    {
        return [
            'cod_estado_carrito' => ['required'],
            'id_producto' => ['required'],
        ];
    }
    
    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'cod_estado_carrito.required' => 'Debe ingresar un estado de carrito',
            'id_producto.required' => 'Debe ingresar un producto',
        ];
    }

    public function resolve($root, $args) // , $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        $cantDisp = 0;
        $prod = Producto::where('id', '=', $args['id_producto'])->firstOrFail();
        if ($prod != null) $cantDisp = $prod->total_unidades;
        $cantRestante = ($cantDisp - $args['cantidad']);
        if ($cantRestante < 0) return null;

        $precio_total = ($prod->precio * $args['cantidad']);
        
        $idestcrt = 0;
        $estcrt = Catalogos::where('codigo_catalogo', '=', $args['cod_estado_carrito'])->firstOrFail();
        if ($estcrt != null) $idestcrt = $estcrt->id_catalogo;

        $descuento_prod = -1;
        try {
            $dscxprd = PrecioDescXProdCliente::where([
                                                    'id_producto' => $args['id_producto'],
                                                    'id_cliente' => auth()->user()->id,
                                                    'deleted_at' => null
                                                ])->firstOrFail();
            if ($dscxprd) {
                $descuento_prod = $dscxprd->descuento;
            } else {
                $descuento_prod = -1;
            }
        } catch (ModelNotFoundException $e) {
            $descuento_prod = -1;
        }

        $descuento_mrc = -1;
        try {
            $dscxmrc = MarcasXCliente::where([
                                                'id_marca' => $prod->id_marca,
                                                'id_cliente' => auth()->user()->id,
                                                'deleted_at' => null
                                            ])->firstOrFail();
            if ($dscxmrc) {
                $descuento_mrc = $dscxmrc->descuento;
            } else {
                $descuento_mrc = -1;
            }
        } catch (ModelNotFoundException $e) {
            $descuento_mrc = -1;
        }

        // echo("dscxmrc: ");
        // echo($dscxmrc);
        // echo(", marca: ");
        // echo($prod->id_marca);
        // echo(", cliente:");
        // echo(auth()->user()->id);
        // echo(", descuento_prod: ");
        // echo($descuento_prod);
        // echo(", descuento_mrc: ");
        // echo($descuento_mrc);

        // Create instance of Carrito model
        $crrt = new \PEDIDOS\Carrito;
        $crrt->id_estado_carrito = $idestcrt;   // VALIDAR ID ESTADO CARRITO, debe ser != 0
        $crrt->id_cliente = auth()->user()->id; // $args['id_cliente'];
        $crrt->id_producto = $args['id_producto'];
        $crrt->cantidad = $args['cantidad'];
        $crrt->precio = $prod->precio;
        $crrt->precio_total = $precio_total;

        if ($descuento_prod>0) {
            $preciocondsctprd = ($prod->precio - ($prod->precio * ($descuento_prod / 100)));
            $crrt->tiene_descuento_porprod = 1;
            $crrt->descuento_porprod = $descuento_prod;
            $crrt->precio_descuento_porprod = $preciocondsctprd;
            $crrt->precio_total_descuento_porprod = $preciocondsctprd * $args['cantidad'];
            $crrt->tiene_descuento_pormrc = 0;
            $crrt->descuento_pormrc = null;
            $crrt->precio_descuento_pormrc = null;
            $crrt->precio_total_descuento_pormrc = null;
        } else {
            if ($descuento_mrc>0) {
                $preciocondsctmrc = ($prod->precio - ($prod->precio * ($descuento_mrc / 100)));
                $crrt->tiene_descuento_porprod = 0;
                $crrt->descuento_porprod = null;
                $crrt->precio_descuento_porprod = null;
                $crrt->precio_total_descuento_porprod = null;
                $crrt->tiene_descuento_pormrc = 1;
                $crrt->descuento_pormrc = $descuento_mrc;
                $crrt->precio_descuento_pormrc = $preciocondsctmrc;
                $crrt->precio_total_descuento_pormrc = $preciocondsctmrc * $args['cantidad'];
            } else {
                $crrt->tiene_descuento_porprod = 0;
                $crrt->descuento_porprod = null;
                $crrt->precio_descuento_porprod = null;
                $crrt->precio_total_descuento_porprod = null;
                $crrt->tiene_descuento_pormrc = 0;
                $crrt->descuento_pormrc = null;
                $crrt->precio_descuento_pormrc = null;
                $crrt->precio_total_descuento_pormrc = null;
            }
        }

        $crrt->updated_at = null;
        $crrt->user_create = auth()->user()->username;

        // Save the model
        $crrt->save();

        // return $crrt;
        return Carrito::where('id', '=', Carrito::max('id'))->firstOrFail();
    }
}
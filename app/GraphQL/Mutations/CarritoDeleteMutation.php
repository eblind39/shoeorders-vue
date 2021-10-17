<?php
namespace PEDIDOS\GraphQL\Mutations;

use PEDIDOS\Catalogos;
use PEDIDOS\Carrito;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class CarritoDeleteMutation extends Mutation
{
    protected $attributes = [
        'name' => 'carritoDelete'
    ];

    public function type(): Type
    {
        return Type::string();
    }

    public function args(): array
    {
        return [
            'id_producto' => ['name' => 'id_producto', 'type' => Type::int()]
        ];
    }

    protected function rules(array $args = []): array
    {
        return [
            'id_producto' => ['required']
        ];
    }

    public function ValidationErrorMessages(array $args = []): array
    {
        return [
            'id_producto.required' => 'Debe proporcionar un id de producto'
        ];
    }

    public function resolve($root, $args) //, $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        $idestcrt = 0;
        $estcrt = \PEDIDOS\Catalogos::where('codigo_catalogo', '=', 'DRAFT')->firstOrFail();
        if ($estcrt != null) $idestcrt = $estcrt->id_catalogo;
        
        $crrt = \PEDIDOS\Carrito::where([
                                        'id_producto' => $args['id_producto'],
                                        'id_cliente' => auth()->user()->id,
                                        'id_estado_carrito' => $idestcrt
                                    ])->firstOrFail();

        if (!$crrt) return null;

        $idestcrt = 0;
        $estcrt = \PEDIDOS\Catalogos::where('codigo_catalogo', '=', 'DELETED')->firstOrFail();
        if ($estcrt != null) $idestcrt = $estcrt->id_catalogo;

        // delete from the carrito
        // $crrt->delete();
        $crrt->id_estado_carrito = $idestcrt;
        $crrt->updated_at = null;
        $crrt->deleted_at = now();
        $crrt->user_delete = auth()->user()->username;

        // Save the model
        $crrt->save();

        return "OK";
    }
}
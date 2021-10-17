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
use Illuminate\Support\Facades\DB;

class MarcaXClienteVincularMutation extends Mutation
{
    protected $attributes = [
        'name' => 'marcaXClienteVincular'
    ];

    public function type(): Type
    {
        return Type::listOf(GraphQL::type('MarcasXCliente'));
    }

    public function args(): array
    {
        return [
            'id_cliente' => ['name' => 'id_cliente', 'type' => Type::int()],
            'ids_marcas' => ['name' => 'ids_marcas', 'type' => Type::string()],
        ];
    }
    
    protected function rules(array $args = []): array
    {
        return [
            'id_cliente' => ['required'],
            'ids_marcas' => ['required'],
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'id_cliente.required' => 'Debe ingresar un cliente',
            'ids_marcas.required' => 'Debe seleccionar las marcas',
        ];
    }

    public function resolve($root, $args) // , $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        $arrIdsMarcas = explode(',', $args['ids_marcas']);
        $intTotIds = count($arrIdsMarcas);
        return DB::select('call insert_marcasxcliente(?, ?, ?, ?)', [$args['id_cliente'], $args['ids_marcas'], $intTotIds, auth()->user()->username]);
    }
}
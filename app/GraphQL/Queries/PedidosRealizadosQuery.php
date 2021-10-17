<?php

    namespace PEDIDOS\GraphQL\Queries;

    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;

    class PedidosRealizadosQuery extends Query
    {
        protected $attributes = [
            'name' => 'pedidosRealizados',
        ];
        
        public function type() {
            return Type::listOf(GraphQL::type('ProductoPedido'));
        }

        public function args() {
            return [
                'id_estado_pedido' => ['name' => 'id_estado_pedido', 'type' => Type::int()],
                'id_cliente' => ['name' => 'id_cliente', 'type' => Type::int()],
                'numero_pedido' => ['name' => 'numero_pedido', 'type' => Type::string()],
            ];
        }

        public function resolve($root, $args) {
            $urlBase = config('app.url').':'.config('app.url_port').'/';
            $upldFolder = config('app.upload_folder').'/';

            $idstpdd = ($args['id_estado_pedido']==0 ? null : $args['id_estado_pedido']);
            $idcli = ($args['id_cliente']==0 ? null : $args['id_cliente']);
            $numpdd = ($args['numero_pedido']=='' ? null : $args['numero_pedido']);

            return DB::select('call get_productos_pedidos(?, ?, ?, ?, ?)', [$idcli, $idstpdd, $numpdd, $urlBase, $upldFolder]);
        }
    }
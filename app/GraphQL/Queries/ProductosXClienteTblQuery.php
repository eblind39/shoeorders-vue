<?php

    namespace PEDIDOS\GraphQL\Queries;

    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;

    class ProductosXClienteTblQuery extends Query
    {
        protected $attributes = [
            'name' => 'productosxclienteId',
        ];

        public function type() {
            return Type::listOf(GraphQL::type('ProductoXClienteTbl'));
        }

        public function args() {
            return [
                'id_cliente' => ['name' => 'id_cliente', 'type' => Type::int()],
            ];
        }
        
        public function resolve($root, $args) {
            $urlBase = config('app.url').':'.config('app.url_port').'/';
            $upldFolder = config('app.upload_folder').'/';
            
            return DB::select('call get_prods_xcliid(?, ?, ?)', [$args['id_cliente'], $urlBase, $upldFolder]);
        }
    }
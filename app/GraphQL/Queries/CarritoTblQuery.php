<?php

    namespace PEDIDOS\GraphQL\Queries;

    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;

    class CarritoTblQuery extends Query
    {
        protected $attributes = [
            'name' => 'carritoTbl',
        ];

        public function type() {
            return Type::listOf(GraphQL::type('CarritoTbl'));
        }

        public function args() {
            return [
                'id' => ['name' => 'id', 'type' => Type::int()],    //id del carrito, si es null => trae todos
            ];
        }
        
        public function resolve($root, $args) {
            $urlBase = config('app.url').':'.config('app.url_port').'/';
            $upldFolder = config('app.upload_folder').'/';
            
            return DB::select('call get_carrito_info(?, ?, ?)', [$args['id'], $urlBase, $upldFolder]);
        }
    }
<?php

    namespace PEDIDOS\GraphQL\Queries;

    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;

    class CarritoProductosAddedQuery extends Query
    {
        protected $attributes = [
            'name' => 'carritoProductosAdded',
        ];
        
        public function type() {
            return Type::listOf(GraphQL::type('ProductoInCart'));
        }

        public function resolve($root, $args) {
            $urlBase = config('app.url').':'.config('app.url_port').'/';
            $upldFolder = config('app.upload_folder').'/';

            return DB::select('call get_productos_en_carrito(?, ?, ?)', [auth()->user()->id, $urlBase, $upldFolder]);
        }
    }
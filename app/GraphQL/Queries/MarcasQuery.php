<?php

    namespace PEDIDOS\GraphQL\Queries;

    use PEDIDOS\Marcas;
    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;

    class MarcasQuery extends Query
    {
        protected $attributes = [
            'name' => 'marcas',
        ];

        public function type() {
            return Type::listOf(GraphQL::type('MarcaImg'));
        }

        public function resolve($root, $args) {
            $urlBase = config('app.url').':'.config('app.url_port').'/';
            $upldFolder = config('app.upload_folder').'/';

            return DB::select('call get_marcas(?, ?, ?)', [null, $urlBase, $upldFolder]);
        }
    }
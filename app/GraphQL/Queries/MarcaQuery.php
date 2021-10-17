<?php

    namespace PEDIDOS\GraphQL\Queries;

    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;

    class MarcaQuery extends Query
    {
        protected $attributes = [
            'name' => 'marca',
        ];

        public function type() {
            return Type::listOf(GraphQL::type('MarcaImg'));
        }

        public function args() {
            return [
                'id' => ['name' => 'id', 'type' => Type::int()],
            ];
        }
        
        public function resolve($root, $args) {

            $urlBase = config('app.url').':'.config('app.url_port').'/';
            $upldFolder = config('app.upload_folder').'/';

            return DB::select('call get_marcas(?, ?, ?)', [$args['id'], $urlBase, $upldFolder]);
        }
    }
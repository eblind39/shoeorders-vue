<?php

    namespace PEDIDOS\GraphQL\Queries;

    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;
    
    class CatalogosTreeQuery extends Query
    {
        protected $attributes = [
            'name' => 'sec_catalogos_tree',
        ];

        public function type() {
            return Type::listOf(GraphQL::type('CatalogoTree'));
        }

        public function args() {
            return [
                'id' => ['name' => 'id', 'type' => Type::int()],
            ];
        }
        
        public function resolve($root, $args) {
            return DB::select('call get_catalogo_hijos(?)', [$args['id']]);
        }
    }
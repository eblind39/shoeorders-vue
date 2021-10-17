<?php

    namespace PEDIDOS\GraphQL\Queries;

    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;

    class SecOpcionesMenuTreeQuery extends Query
    {
        protected $attributes = [
            'name' => 'sec_opciones_menu_tree',
        ];

        public function type() {
            return Type::listOf(GraphQL::type('SecOpcionMenuTree'));
        }

        public function args() {
            return [
                'id' => ['name' => 'id', 'type' => Type::int()],
            ];
        }
        
        public function resolve($root, $args) {
            return DB::select('call get_optsmnu_hijos(?)', [$args['id']]);
        }
    }
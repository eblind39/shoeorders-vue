<?php

    namespace PEDIDOS\GraphQL\Queries;

    use PEDIDOS\SecOpcionesMenu;
    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;

    class SecOpcionesMenuQuery extends Query
    {
        protected $attributes = [
            'name' => 'sec_opciones_menu',
        ];
        
        public function type() {
            return Type::listOf(GraphQL::type('SecOpcionMenu'));
        }

        public function resolve($root, $args) {
            return SecOpcionesMenu::all();
        }
    }
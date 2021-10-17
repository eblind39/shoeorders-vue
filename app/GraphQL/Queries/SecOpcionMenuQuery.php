<?php

    namespace PEDIDOS\GraphQL\Queries;

    use PEDIDOS\SecOpcionesMenu;
    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;

    class SecOpcionMenuQuery extends Query
    {
        protected $attributes = [
            'name' => 'sec_opcion_menu',
        ];

        public function type() {
            return GraphQL::type('SecOpcionMenu');
        }

        public function args() {
            return [
                'id_opcion_menu' => ['name' => 'id_opcion_menu', 'type' => Type::int(), 'rules' => ['required']],
            ];
        }
        
        public function resolve($root, $args) {
            // return SecOpcionesMenu::findOrFail($args['id_opcion_menu']);
            // the previous call fail because eloquest tries to do an equal in the where clause
            // using "id" as the primary key
            return SecOpcionesMenu::where('id_opcion_menu', '=', $args['id_opcion_menu'])->firstOrFail();
        }
    }
<?php

    namespace PEDIDOS\GraphQL\Queries;

    use PEDIDOS\Catalogos;
    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;

    class CatalogoQuery extends Query
    {
        protected $attributes = [
            'name' => 'sec_catalogo',
        ];

        public function type() {
            return GraphQL::type('Catalogo');
        }

        public function args() {
            return [
                'id_catalogo' => ['name' => 'id_catalogo', 'type' => Type::int(), 'rules' => ['required']],
            ];
        }
        
        public function resolve($root, $args) {
            return Catalogos::where('id_catalogo', '=', $args['id_catalogo'])->firstOrFail();
        }
    }
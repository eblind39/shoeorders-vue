<?php

    namespace PEDIDOS\GraphQL\Queries;

    use PEDIDOS\Catalogos;
    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;

    class CatalogosQuery extends Query
    {
        protected $attributes = [
            'name' => 'sec_catalogos',
        ];
        
        public function type() {
            return Type::listOf(GraphQL::type('Catalogo'));
        }

        public function resolve($root, $args) {
            return Catalogos::all();
        }
    }
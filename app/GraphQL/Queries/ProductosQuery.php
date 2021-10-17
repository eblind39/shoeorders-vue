<?php

    namespace PEDIDOS\GraphQL\Queries;

    use PEDIDOS\Producto;
    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;

    class ProductosQuery extends Query
    {
        protected $attributes = [
            'name' => 'productos',
        ];

        public function type() {
            return Type::listOf(GraphQL::type('Producto'));
        }

        public function resolve($root, $args) {
            return Producto::all();
        }
    }
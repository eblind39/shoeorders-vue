<?php

    namespace PEDIDOS\GraphQL\Queries;

    use PEDIDOS\Carrito;
    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;
    use Illuminate\Database\Eloquent\ModelNotFoundException;

    class CarritoQuery extends Query
    {
        protected $attributes = [
            'name' => 'carrito',
        ];

        public function type() {
            return GraphQL::type('Carrito');
        }

        public function args() {
            return [
                'id' => ['name' => 'id', 'type' => Type::int()],    //id del carrito, si es null => trae todos
            ];
        }
        
        public function resolve($root, $args) {
            try {
                return Carrito::where('id', '=', $args['id'])->firstOrFail();
            } catch (ModelNotFoundException $e) {
                return null;
            }
        }
    }
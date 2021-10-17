<?php

    namespace PEDIDOS\GraphQL\Queries;

    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;

    class CarritoGetTotalProductosXUsrIdQuery extends Query
    {
        protected $attributes = [
            'name' => 'carritoGetTotalProductosXUsrId',
        ];
        
        public function type() {
            return Type::listOf(GraphQL::type('TotalProdsInCart'));
        }

        public function resolve($root, $args) {
            return DB::select('call get_totalprod_incart(?)', [auth()->user()->id]);
        }
    }
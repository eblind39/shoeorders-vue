<?php

    namespace PEDIDOS\GraphQL\Queries;

    use PEDIDOS\SecRole;
    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;

    class SecRolesQuery extends Query
    {
        protected $attributes = [
            'name' => 'sec_roles',
        ];

        public function type() {
            return Type::listOf(GraphQL::type('SecRole'));
        }

        public function resolve($root, $args) {
            return DB::table('sec_roles')->whereNull('deleted_at')->get();
        }
    }
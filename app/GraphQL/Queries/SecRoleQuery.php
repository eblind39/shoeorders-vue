<?php

    namespace PEDIDOS\GraphQL\Queries;

    use PEDIDOS\SecRole;
    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;

    class SecRoleQuery extends Query
    {
        protected $attributes = [
            'name' => 'sec_role',
        ];

        public function type() {
            return GraphQL::type('SecRole');
        }

        public function args() {
            return [
                'id' => ['name' => 'id', 'type' => Type::int(), 'rules' => ['required']],
            ];
        }

        public function ValidationErrorMessages(array $args = []): array 
        {
            return [
                'id.required' => 'Debe proporcionar un id de role'
            ];
        }
        
        public function resolve($root, $args) {
            return SecRole::where('id', '=', $args['id'])->firstOrFail();
        }
    }
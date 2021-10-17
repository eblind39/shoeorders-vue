<?php

    namespace PEDIDOS\GraphQL\Queries;

    use PEDIDOS\User;
    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;

    class UsersByRoleQuery extends Query
    {
        protected $attributes = [
            'name' => 'users_by_role',
        ];

        public function type() {
            return Type::listOf(GraphQL::type('UserGraph'));
        }

        public function args() {
            return [
                'id_role' => ['name' => 'id_role', 'type' => Type::int(), 'rules' => ['required']],
            ];
        }
        
        public function resolve($root, $args) {
            $userIds = DB::table('sec_roles_users')
            ->join('users', 'sec_roles_users.users_id', '=', 'users.id')
            ->where('sec_roles_users.roles_id', '=', $args['id_role'])
            ->select('users.id')
            ->get();
            
            $arrids = array();
            foreach ($userIds as $ids) {
                array_push($arrids, $ids->id);
            }

            $users = User::whereIn('id', $arrids)->get();

            return $users;
        }
    }
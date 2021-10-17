<?php

    namespace PEDIDOS\GraphQL\Queries;

    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;

    class UserTblQuery extends Query
    {
        protected $attributes = [
            'name' => 'usuariotbl',
        ];

        public function type() {
            return Type::listOf(GraphQL::type('UserTbl'));
        }

        public function args() {
            return [
                'id' => ['name' => 'id', 'type' => Type::int()],
                'cod_role' => ['name' => 'cod_role', 'type' => Type::string()],
            ];
        }
        
        public function resolve($root, $args) {

            $urlBase = config('app.url').':'.config('app.url_port').'/';
            $upldFolder = config('app.upload_folder').'/';

            return DB::select('call get_usuarios_by_codrole(?, ?, ?, ?)', [$args['id'], $args['cod_role'], $urlBase, $upldFolder]);
        }
    }
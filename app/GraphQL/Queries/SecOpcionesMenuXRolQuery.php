<?php

    namespace PEDIDOS\GraphQL\Queries;

    use PEDIDOS\SecRoleUser;
    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;
    use Illuminate\Database\Eloquent\ModelNotFoundException;

    class SecOpcionesMenuXRolQuery extends Query
    {
        protected $attributes = [
            'name' => 'sec_opciones_menu_xrol',
        ];

        public function type() {
            return Type::listOf(GraphQL::type('SecOpcionesMenuXRol'));
        }

        public function args() {
            return [
                'id_role' => ['name' => 'id_role', 'type' => Type::int()],
            ];
        }
        
        public function resolve($root, $args) {
            $idrole = $args['id_role'];
            if ($idrole==-1) {  // traer el rol del usuario logueado
                try {
                    $rlusr = SecRoleUser::where('users_id', '=', auth()->user()->id)->firstOrFail();
                    if (!$rlusr) 
                        $idrole = 0;
                    else 
                        $idrole = $rlusr->roles_id;
                } catch (ModelNotFoundException $e) {
                    $idrole = 0;
                }
            }

            return DB::select('call get_optmnu_xroleyusr(?)', [$idrole]);
        }
    }
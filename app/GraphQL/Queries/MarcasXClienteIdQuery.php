<?php

    namespace PEDIDOS\GraphQL\Queries;

    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;

    class MarcasXClienteIdQuery extends Query
    {
        protected $attributes = [
            'name' => 'marcasxclienteId',
        ];

        public function type() {
            return Type::listOf(GraphQL::type('MarcasXClienteTbl'));
        }

        public function args() {
            return [
                'id_cliente' => ['name' => 'id_cliente', 'type' => Type::int()],
            ];
        }
        
        public function resolve($root, $args) {
            $urlBase = config('app.url').':'.config('app.url_port').'/';
            $upldFolder = config('app.upload_folder').'/';
            
            $idcli = ($args['id_cliente']==null ? auth()->user()->id : $args['id_cliente']);
            
            return DB::select('call get_marcasxclienteId(?, ?, ?)', [$idcli, $urlBase, $upldFolder]);
        }
    }
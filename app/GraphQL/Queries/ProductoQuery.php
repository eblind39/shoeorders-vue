<?php

    namespace PEDIDOS\GraphQL\Queries;

    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;

    class ProductoQuery extends Query
    {
        protected $attributes = [
            'name' => 'producto',
        ];

        public function type() {
            return Type::listOf(GraphQL::type('ProductoTbl'));
        }

        public function args() {
            return [
                'id' => ['name' => 'id', 'type' => Type::int()],
                'id_categoria' => ['name' => 'id_categoria', 'type' => Type::int()],
                'id_marca' => ['name' => 'id_marca', 'type' => Type::int()],
                'nombre_descripcion' => ['nombre_descripcion' => 'id', 'type' => Type::string()],
                'es_busqueda' => ['name' => 'es_busqueda', 'type' => Type::int()],
                'es_marcaxcliente' => ['name' => 'es_marcaxcliente', 'type' => Type::int()],
            ];
        }
        
        public function resolve($root, $args) {

            $urlBase = config('app.url').':'.config('app.url_port').'/';
            $upldFolder = config('app.upload_folder').'/';

            $idcat = ($args['id_categoria']==0 ? null : $args['id_categoria']);
            $idmrc = ($args['id_marca']==0 ? null : $args['id_marca']);
            $nomdesr = ($args['nombre_descripcion']=="" ? null : $args['nombre_descripcion']);
            

            return DB::select('call get_productos_to_order(?, ?, ?, ?, ?, ?, ?, ?, ?)', [auth()->user()->id, $args['id'], $idcat, $idmrc, $nomdesr, $args['es_busqueda'], $args['es_marcaxcliente'], $urlBase, $upldFolder]);
        }
    }
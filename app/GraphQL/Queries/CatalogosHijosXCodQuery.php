<?php

    namespace PEDIDOS\GraphQL\Queries;

    use PEDIDOS\Catalogos;
    use Rebing\GraphQL\Support\Facades\GraphQL;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use Illuminate\Support\Facades\DB;

    class CatalogosHijosXCodQuery extends Query
    {
        protected $attributes = [
            'name' => 'sec_catalogoshijos_xcod',
        ];

        public function type() {
            return Type::listOf(GraphQL::type('Catalogo'));
        }

        public function args() {
            return [
                'codigo_catalogo' => ['name' => 'codigo_catalogo', 'type' => Type::string()],
            ];
        }
        
        public function resolve($root, $args) {
            return DB::select('call get_catalogos_xcodpadre(?)', [$args['codigo_catalogo']]);
        }
    }
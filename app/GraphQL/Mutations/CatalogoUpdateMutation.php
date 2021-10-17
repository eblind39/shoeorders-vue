<?php
namespace PEDIDOS\GraphQL\Mutations;

//use Closure;
use PEDIDOS\Catalogos;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class CatalogoUpdateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'catalogoUpdate'
    ];

    public function type(): Type
    {
        return GraphQL::type('Catalogo');
    }

    public function args(): array
    {
        return [
            'id_catalogo' => ['name' => 'id_catalogo', 'type' => Type::int()],
            'id_catalogo_padre' => ['name' => 'id_catalogo_padre', 'type' => Type::int()],
            'codigo_catalogo' => ['name' => 'codigo_catalogo', 'type' => Type::string()],
            'valor' => ['name' => 'valor', 'type' => Type::string()],
        ];
    }

    protected function rules(array $args = []): array
    {
        return [
            'id_catalogo' => ['required'],
            'codigo_catalogo' => ['required', 'max:50'],
            'valor' => ['required', 'max:255']
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'id_catalogo.required' => 'Debe proporcionar un id de catálogo',
            'codigo_catalogo.required' => 'Debe ingresar un código',
            'codigo_catalogo.max:50' => 'Se acepta máximo de 50 caracteres',
            'valor.required' => 'Debe ingresar un valor',
            'valor.max:100' => 'Se acepta máximo de 255 caracteres',
        ];
    }

    public function resolve($root, $args) //, $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of SecOpcionesMenu model
        $cat = \PEDIDOS\Catalogos::where('id_catalogo', '=', $args['id_catalogo'])->firstOrFail();
        if (!$cat) return null;
        
        $cat->id_catalogo_padre = $args['id_catalogo_padre'];
        $cat->codigo_catalogo = $args['codigo_catalogo'];
        $cat->valor = $args['valor'];
        $cat->updated_at = now();
        $cat->user_update = auth()->user()->username;
        
        // Save the model
        $cat->save();
        //$cat->update(['id_opcion_menu' => $args['id_opcion_menu']]);


        /*$cat = \PEDIDOS\SecOpcionesMenu::updateOrCreate(
            [
                    'id_opcion_menu' => $args['id_opcion_menu']
            ],
            [
                    'id_opcion_menu_padre' => $args['id_opcion_menu_padre'],
                    'descripcion' => $args['descripcion'],
                    'componente_ruta' => $args['componente_ruta'],
                    'nombre_ruta' => $args['nombre_ruta'],
                    'es_form_registro' => $args['es_form_registro'],
                    'icon_fa' => $args['icon_fa'],
                    'imagen' => $args['imagen'],
                    'updated_at' => now(),
                    'user_update' => 'admin'
            ]
        );*/

        return Catalogos::where('id_catalogo', '=', $args['id_catalogo'])->firstOrFail();
    }
}
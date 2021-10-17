<?php
namespace PEDIDOS\GraphQL\Mutations;

use PEDIDOS\Catalogos;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class CatalogoDeleteMutation extends Mutation
{
    protected $attributes = [
        'name' => 'catalogoDelete'
    ];

    public function type(): Type
    {
        return Type::string();
    }

    public function args(): array
    {
        return [
            'id_catalogo' => ['name' => 'id_catalogo', 'type' => Type::int()]
        ];
    }

    protected function rules(array $args = []): array
    {
        return [
            'id_catalogo' => ['required']
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'id_catalogo.required' => 'Debe proporcionar un id de catálogo'
        ];
    }

    public function resolve($root, $args) //, $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of Link model
        // $cat = \PEDIDOS\SecOpcionesMenu::find($args['id_opcion_menu']);
        $cat = \PEDIDOS\Catalogos::where('id_catalogo', '=', $args['id_catalogo'])->firstOrFail();
        if (!$cat) return null;

        // delete the catalogo
        $cat->deleted_at = now();
        $cat->user_delete = auth()->user()->username;
        
        // Save the model
        $cat->save();
        // $cat->delete();
        return "OK";
    }
}
<?php
namespace PEDIDOS\GraphQL\Mutations;

use PEDIDOS\SecOpcionesMenu;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class SecOpcionesMenuDeleteMutation extends Mutation
{
    protected $attributes = [
        'name' => 'secOpcionesMenuDelete'
    ];

    public function type(): Type
    {
        return Type::string();
    }

    public function args(): array
    {
        return [
            'id_opcion_menu' => ['name' => 'id_opcion_menu', 'type' => Type::int()]
        ];
    }

    protected function rules(array $args = []): array
    {
        return [
            'id_opcion_menu' => ['required']
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'id_opcion_menu.required' => 'Debe proporcionar un id de menu'
        ];
    }

    public function resolve($root, $args) //, $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of Link model
        // $secoptmnu = \PEDIDOS\SecOpcionesMenu::find($args['id_opcion_menu']);
        $secoptmnu = \PEDIDOS\SecOpcionesMenu::where('id_opcion_menu', '=', $args['id_opcion_menu'])->firstOrFail();
        if (!$secoptmnu) return null;

        // delete the opcion de menu
        $secoptmnu->deleted_at = now();
        $secoptmnu->user_delete = auth()->user()->username;
        
        // Save the model
        $secoptmnu->save();

        // $secoptmnu->delete();
        return "OK";
    }
}
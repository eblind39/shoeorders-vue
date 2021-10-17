<?php
namespace PEDIDOS\GraphQL\Mutations;

use PEDIDOS\SecRole;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class SecRoleDeleteMutation extends Mutation
{
    protected $attributes = [
        'name' => 'secRoleDelete'
    ];

    public function type(): Type
    {
        return Type::string();
    }

    public function args(): array
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()]
        ];
    }

    protected function rules(array $args = []): array
    {
        return [
            'id' => ['required']
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'id.required' => 'Debe proporcionar un id de rol'
        ];
    }

    public function resolve($root, $args) //, $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of Link model
        // $secrole = \PEDIDOS\SecRole::find($args['id']);
        $secrole = \PEDIDOS\SecRole::where('id', '=', $args['id'])->firstOrFail();
        if (!$secrole) return null;

        // delete the role
        $secrole->deleted_at = now();
        $secrole->user_delete = auth()->user()->username;
        
        // Save the model
        $secrole->save();
        //$secrole->delete();
        return "OK";
    }
}
<?php
namespace PEDIDOS\GraphQL\Mutations;

// Logging
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\FirePHPHandler;

//use Closure;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;
use Illuminate\Support\Facades\DB;

class AccesosVincularXRoleIdMutation extends Mutation
{
    protected $attributes = [
        'name' => 'accesosVincularXRoleId'
    ];

    public function type(): Type
    {
        return Type::string();
    }

    public function args(): array
    {
        return [
            'id_role' => ['name' => 'id_role', 'type' => Type::int()],
            'ids_optsmnu' => ['name' => 'ids_optsmnu', 'type' => Type::string()],
            'ids_users' => ['name' => 'ids_users', 'type' => Type::string()],
        ];
    }
    
    protected function rules(array $args = []): array
    {
        return [
            'id_role' => ['required'],
            'ids_optsmnu' => ['required'],
            'ids_users' => ['required'],
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'id_role.required' => 'Debe ingresar un role',
            'ids_optsmnu.required' => 'Debe seleccionar las opciones de menu',
            'ids_users.required' => 'Debe seleccionar los usuarios',
        ];
    }

    public function resolve($root, $args) // , $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // opciones de menu
        $arrIdsOptsMnu = explode(',', $args['ids_optsmnu']);
        $intTotIdsOptMnu = count($arrIdsOptsMnu);
        // usuarios
        $arrIdsUsers = explode(',', $args['ids_users']);
        $intTotIdsUsers = count($arrIdsUsers);

        $results = DB::select('call insert_accesos_rolesusers(?, ?, ?, ?, ?, ?)', [$args['id_role'], $args['ids_optsmnu'], $args['ids_users'], $intTotIdsOptMnu, $intTotIdsUsers, auth()->user()->username]);
        
        return "OK";
    }
}
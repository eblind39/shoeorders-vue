<?php

namespace PEDIDOS;

use Illuminate\Database\Eloquent\Model;

class SecRoleUser extends Model
{
    protected $table = 'sec_roles_users';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'roles_id', 'users_id', 
        'created_at', 'updated_at', 'deleted_at',
        'user_create', 'user_update', 'user_delete'
    ];
}

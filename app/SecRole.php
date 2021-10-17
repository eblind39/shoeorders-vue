<?php

namespace PEDIDOS;

use Illuminate\Database\Eloquent\Model;

class SecRole extends Model
{
    protected $table = 'sec_roles';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'name', 'codigo', 'description' //, 'active',
    ];
	
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'created_at', 'updated_at', 'deleted_at',
        'user_create', 'user_update', 'user_delete'
    ];
	
	/*public function users() {
		return $this->belongsToMany(User::class)->withTimestamps();
    }*/
}

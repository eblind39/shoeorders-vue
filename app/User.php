<?php

namespace PEDIDOS;

// use PEDIDOS\Role;
// use PEDIDOS\RoleUser;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

	protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'username', 'email', 'password',
		'id_archivo_subido_img', 'nombre_completo', 'telefono_fijo', 'telefono_celular',
		'id_ciudad', 'id_zona', 'talla_zapato', 'cedula', 'direccion', 'id_tipo_pago',
		'limite_credito', 'costo_por_envio'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
		'password', 'remember_token', 'email_verified_at', 
		'created_at', 'updated_at', 'deleted_at',
		'user_create', 'user_update', 'user_delete'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
	
	/*public function authorizeRoles($roles) {
		abort_unless($this->hasAnyRole($roles), 401);
		return true;
	}
	
	public function hasAnyRole($roles) {
		if (is_array($roles)) {
			foreach ($roles as $role) {
				if ($this->hasRole($role)) {
					return true;
				}
			}
		} else {
			if ($this->hasRole($roles)) {
				return true;
			}
		}
		return false;
	}
	
	public function hasRole($role) {
		$role = Role::where('name', $role)->first();
		if ($role) {
			$rolesuser = RoleUser::where('roles_id', $role->id)->where('users_id', $this->id)->first();
			if ($rolesuser) {
				return true;
			}
		}
		return false;
	}*/
}
<?php

use PEDIDOS\SecRole;
use Illuminate\Database\Seeder;

class SecRoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = new SecRole();
		$role->name = 'admin';
		$role->codigo = 'ADMIN';
		$role->description = 'Administrator';
		$role->created_at = now();
		$role->updated_at = null;
		$role->deleted_at = null;
		$role->user_create = 'admin';
		$role->user_update = null;
		$role->user_delete = null;
		$role->save();
		
        $role = new SecRole();
		$role->name = 'customer';
		$role->codigo = 'CUSTOMER';
		$role->description = 'Customer';
		$role->created_at = now();
		$role->updated_at = null;
		$role->deleted_at = null;
		$role->user_create = 'admin';
		$role->user_update = null;
		$role->user_delete = null;
		$role->save();
		
        $role = new SecRole();
		$role->name = 'datainput';
		$role->codigo = 'DATAINPUT';
		$role->description = 'Data input';
		$role->created_at = now();
		$role->updated_at = null;
		$role->deleted_at = null;
		$role->user_create = 'admin';
		$role->user_update = null;
		$role->user_delete = null;
		$role->save();
    }
}

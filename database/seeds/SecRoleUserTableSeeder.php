<?php

use PEDIDOS\SecRoleUser;
use Illuminate\Database\Seeder;

class SecRoleUserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roleuser = new SecRoleUser();
		$roleuser->roles_id = 1;
		$roleuser->users_id = 1;
		$roleuser->created_at = now();
		$roleuser->updated_at = null;
		$roleuser->deleted_at = null;
		$roleuser->user_create = 'admin';
		$roleuser->user_update = null;
		$roleuser->user_delete = null;
		$roleuser->save();
		
        $roleuser = new SecRoleUser();
		$roleuser->roles_id = 2;
		$roleuser->users_id = 2;
		$roleuser->created_at = now();
		$roleuser->updated_at = null;
		$roleuser->deleted_at = null;
		$roleuser->user_create = 'admin';
		$roleuser->user_update = null;
		$roleuser->user_delete = null;
		$roleuser->save();
		
        $roleuser = new SecRoleUser();
		$roleuser->roles_id = 3;
		$roleuser->users_id = 3;
		$roleuser->created_at = now();
		$roleuser->updated_at = null;
		$roleuser->deleted_at = null;
		$roleuser->user_create = 'admin';
		$roleuser->user_update = null;
		$roleuser->user_delete = null;
		$roleuser->save();
    }
}

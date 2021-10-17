<?php

use PEDIDOS\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
		$user->username = 'admin';
		$user->email = 'admin@gmail.com';
		$user->email_verified_at = now();
		$user->password = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'; // password;
		$user->remember_token = Str::random(10);
		$user->id_archivo_subido_img = null;
		$user->created_at = now();
		$user->updated_at = null;
		$user->deleted_at = null;
		$user->user_create = 'admin';
		$user->user_update = null;
		$user->user_delete = null;
		$user->save();
		
        factory(PEDIDOS\User::class, 5)->create();
    }
}
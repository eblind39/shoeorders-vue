<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use PEDIDOS\User;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'username' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
		'id_archivo_subido_img' => null,
		'created_at' => now(),
		'updated_at' => null,
		'deleted_at' => null,
		'user_create' => 'admin',
		'user_update' => null,
		'user_delete' => null
    ];
});
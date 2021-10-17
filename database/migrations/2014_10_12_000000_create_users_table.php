<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('username', 50);
            $table->string('email', 100)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
			$table->integer('id_archivo_subido_img')->nullable();
			$table->string('nombre_completo', 255)->nullable();
			$table->string('telefono_fijo', 50)->nullable();
			$table->string('telefono_celular', 50)->nullable();
			$table->integer('id_ciudad')->nullable();
			$table->integer('id_zona')->nullable();
			$table->float('talla_zapato', 8, 2)->nullable();
			$table->string('cedula', 50)->nullable();
            $table->string('direccion', 255)->nullable();
            $table->integer('id_tipo_pago',)->nullable();
            $table->decimal('limite_credito', 12, 4)->nullable();
            $table->decimal('costo_por_envio', 12, 4)->nullable();
            $table->timestamps();
			$table->softDeletes();
            $table->string('user_create')->nullable();
            $table->string('user_update')->nullable();
            $table->string('user_delete')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}

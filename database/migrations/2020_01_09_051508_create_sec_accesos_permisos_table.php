<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSecAccesosPermisosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sec_accesos_permisos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('id_sec_acceso');
            $table->integer('id_sec_permiso');
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
        Schema::dropIfExists('sec_accesos_permisos');
    }
}

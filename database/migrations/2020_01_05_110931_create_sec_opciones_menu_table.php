<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSecOpcionesMenuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sec_opciones_menu', function (Blueprint $table) {
            $table->bigIncrements('id_opcion_menu');
            $table->integer('id_opcion_menu_padre')->nullable();
            $table->string('descripcion', 100)->nullable();
            $table->string('ruta', 100);
            $table->string('componente_ruta', 100);
            $table->string('nombre_ruta', 50);
            $table->boolean('es_form_registro');
            $table->string('icon_fa', 50)->nullable();
            $table->string('imagen')->nullable();
            $table->string('tip', 100)->nullable();
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
        Schema::dropIfExists('sec_opciones_menu');
    }
}

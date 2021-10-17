<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArchivosSubidosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('archivos_subidos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('es_imagen', 255);
            $table->string('nombre_original', 255);
            $table->string('imagen_original_uid', 100);
            $table->string('imagen_lowres_uid', 100)->nullable();   // img que se usa en spa
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
        Schema::dropIfExists('archivos_subidos');
    }
}

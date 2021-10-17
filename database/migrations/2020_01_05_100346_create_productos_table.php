<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('referencia_cod_prov', 50);
            $table->string('nombre', 255);
            $table->string('descripcion', 2500)->nullable();
            $table->integer('id_archivo_subido_img');
			$table->integer('id_color');
			$table->integer('id_marca');
			$table->integer('id_tipo_material')->nullable();
			$table->integer('id_genero')->nullable();
			$table->integer('id_categoria')->nullable();
            $table->decimal('precio',15,3)->nullable();
			$table->integer('total_unidades')->nullable();
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
        Schema::dropIfExists('productos');
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePrecioDescXProdClienteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('precio_desc_x_prod_cliente', function (Blueprint $table) {
            $table->bigIncrements('id');
			$table->integer('id_cliente');
			$table->integer('id_producto');
            $table->decimal('descuento',15,3);
            $table->decimal('precio',15,3);
			$table->string('observaciones')->nullable();
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
        Schema::dropIfExists('precio_desc_x_prod_cliente');
    }
}

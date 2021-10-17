<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePedidosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('numero_pedido', 20);
			$table->integer('id_cliente');
            $table->integer('id_producto');
            $table->integer('id_estado_pedido');
			$table->integer('cantidad');
            $table->decimal('precio',15,3);
            $table->decimal('precio_total',15,3);
            $table->integer('tiene_descuento_porprod');
            $table->decimal('descuento_porprod', 15, 3)->nullable();
            $table->decimal('precio_descuento_porprod', 15, 3)->nullable();
            $table->decimal('precio_total_descuento_porprod', 15, 3)->nullable();
            $table->integer('tiene_descuento_pormrc');
            $table->decimal('descuento_pormrc', 15, 3)->nullable();
            $table->decimal('precio_descuento_pormrc', 15, 3)->nullable();
            $table->decimal('precio_total_descuento_pormrc', 15, 3)->nullable();
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
        Schema::dropIfExists('pedidos');
    }
}

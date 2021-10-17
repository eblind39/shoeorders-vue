<?php

use PEDIDOS\SecOpcionesMenu;
use Illuminate\Database\Seeder;

class SecOpcionesMenuTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $optmnu = new SecOpcionesMenu();
		$optmnu->id_opcion_menu_padre = null;
        $optmnu->descripcion = 'nueva';
        $optmnu->ruta = '/nueva';
        $optmnu->componente_ruta = 'nueva.vue';
        $optmnu->nombre_ruta = 'nueva';
        $optmnu->es_form_registro = true;
        $optmnu->icon_fa = 'nueva';
        $optmnu->imagen = 'nueva.jpg';
        $optmnu->tip = 'nueva';
		$optmnu->created_at = now();
		$optmnu->updated_at = null;
		$optmnu->deleted_at = null;
		$optmnu->user_create = 'admin';
		$optmnu->user_update = null;
		$optmnu->user_delete = null;
        $optmnu->save();
        
        $optmnu = new SecOpcionesMenu();
		$optmnu->id_opcion_menu_padre = null;
        $optmnu->descripcion = 'otra';
        $optmnu->ruta = '/otra';
        $optmnu->componente_ruta = 'otra.vue';
        $optmnu->nombre_ruta = 'otra';
        $optmnu->es_form_registro = true;
        $optmnu->icon_fa = 'otra';
        $optmnu->imagen = 'otra.jpg';
        $optmnu->tip = 'otra';
		$optmnu->created_at = now();
		$optmnu->updated_at = null;
		$optmnu->deleted_at = null;
		$optmnu->user_create = 'admin';
		$optmnu->user_update = null;
		$optmnu->user_delete = null;
        $optmnu->save();
        
        $optmnu = new SecOpcionesMenu();
		$optmnu->id_opcion_menu_padre = 1;
        $optmnu->descripcion = 'unamas';
        $optmnu->ruta = '/unamas';
        $optmnu->componente_ruta = 'unamas.vue';
        $optmnu->nombre_ruta = 'unamas';
        $optmnu->es_form_registro = true;
        $optmnu->icon_fa = 'unamas';
        $optmnu->imagen = 'unamas.jpg';
        $optmnu->tip = 'unamas';
		$optmnu->created_at = now();
		$optmnu->updated_at = null;
		$optmnu->deleted_at = null;
		$optmnu->user_create = 'admin';
		$optmnu->user_update = null;
		$optmnu->user_delete = null;
        $optmnu->save();
        
        $optmnu = new SecOpcionesMenu();
		$optmnu->id_opcion_menu_padre = null;
        $optmnu->descripcion = 'fixed';
        $optmnu->ruta = '/fixed';
        $optmnu->componente_ruta = 'fixed.vue';
        $optmnu->nombre_ruta = 'fixed';
        $optmnu->es_form_registro = true;
        $optmnu->icon_fa = 'fixed';
        $optmnu->imagen = 'fixed.jpg';
        $optmnu->tip = 'fixed';
		$optmnu->created_at = now();
		$optmnu->updated_at = null;
		$optmnu->deleted_at = null;
		$optmnu->user_create = 'admin';
		$optmnu->user_update = null;
		$optmnu->user_delete = null;
        $optmnu->save();
        
        $optmnu = new SecOpcionesMenu();
		$optmnu->id_opcion_menu_padre = 2;
        $optmnu->descripcion = 'rutanew';
        $optmnu->ruta = '/rutanew';
        $optmnu->componente_ruta = 'rutanew.vue';
        $optmnu->nombre_ruta = 'rutanew';
        $optmnu->es_form_registro = true;
        $optmnu->icon_fa = 'rutanew';
        $optmnu->imagen = 'rutanew.jpg';
        $optmnu->tip = 'rutanew';
		$optmnu->created_at = now();
		$optmnu->updated_at = null;
		$optmnu->deleted_at = null;
		$optmnu->user_create = 'admin';
		$optmnu->user_update = null;
		$optmnu->user_delete = null;
        $optmnu->save();
        
        $optmnu = new SecOpcionesMenu();
		$optmnu->id_opcion_menu_padre = null;
        $optmnu->descripcion = 'desdemodal';
        $optmnu->ruta = '/desdemodal';
        $optmnu->componente_ruta = 'desdemodal.vue';
        $optmnu->nombre_ruta = 'desdemodal';
        $optmnu->es_form_registro = true;
        $optmnu->icon_fa = 'desdemodal';
        $optmnu->imagen = 'desdemodal.jpg';
        $optmnu->tip = 'desdemodal';
		$optmnu->created_at = now();
		$optmnu->updated_at = null;
		$optmnu->deleted_at = null;
		$optmnu->user_create = 'admin';
		$optmnu->user_update = null;
		$optmnu->user_delete = null;
        $optmnu->save();
        
        $optmnu = new SecOpcionesMenu();
		$optmnu->id_opcion_menu_padre = null;
        $optmnu->descripcion = 'sincss';
        $optmnu->ruta = '/sincss';
        $optmnu->componente_ruta = 'sincss.vue';
        $optmnu->nombre_ruta = 'sincss';
        $optmnu->es_form_registro = true;
        $optmnu->icon_fa = 'sincss';
        $optmnu->imagen = 'sincss.jpg';
        $optmnu->tip = 'sincss  Registro';
		$optmnu->created_at = now();
		$optmnu->updated_at = null;
		$optmnu->deleted_at = null;
		$optmnu->user_create = 'admin';
		$optmnu->user_update = null;
		$optmnu->user_delete = null;
        $optmnu->save();
        
        $optmnu = new SecOpcionesMenu();
		$optmnu->id_opcion_menu_padre = 1;
        $optmnu->descripcion = 'cierraOnWorked';
        $optmnu->ruta = '/cierraOnWorked';
        $optmnu->componente_ruta = 'cierraOnWorked.vue';
        $optmnu->nombre_ruta = 'cierraOnWorked';
        $optmnu->es_form_registro = true;
        $optmnu->icon_fa = 'cierraOnWorked';
        $optmnu->imagen = 'cierraOnWorked.jpg';
        $optmnu->tip = 'cierraOnWorked';
		$optmnu->created_at = now();
		$optmnu->updated_at = null;
		$optmnu->deleted_at = null;
		$optmnu->user_create = 'admin';
		$optmnu->user_update = null;
		$optmnu->user_delete = null;
        $optmnu->save();
        
        $optmnu = new SecOpcionesMenu();
		$optmnu->id_opcion_menu_padre = null;
        $optmnu->descripcion = 'testnew';
        $optmnu->ruta = '/testnew';
        $optmnu->componente_ruta = 'testnew.vue';
        $optmnu->nombre_ruta = 'testnew';
        $optmnu->es_form_registro = true;
        $optmnu->icon_fa = 'testnew';
        $optmnu->imagen = 'testnew.jpg';
        $optmnu->tip = 'testnew Registro';
		$optmnu->created_at = now();
		$optmnu->updated_at = null;
		$optmnu->deleted_at = null;
		$optmnu->user_create = 'admin';
		$optmnu->user_update = null;
		$optmnu->user_delete = null;
		$optmnu->save();
    }
}

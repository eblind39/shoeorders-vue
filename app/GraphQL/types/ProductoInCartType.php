<?php

namespace PEDIDOS\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class ProductoInCartType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'ProductoInCart',
        'description' => 'Details about a ProductoInCart',
    ];

    public function fields() : array
    {
        return [
            'id_carrito' => [
                'type' => Type::int(),
                'description' => 'Id del Carrito'
            ],
            'id_productocrrt' => [
                'type' => Type::int(),
                'description' => 'Id del producto'
            ],
            'referencia_cod_prov' => [
                'type' => Type::string(),
                'description' => 'Codigo de referencia del proveedor'
            ],
            'nombre_producto' => [
                'type' => Type::string(),
                'description' => 'Nombre of the Producto'
            ],
            'descripcion' => [
                'type' => Type::string(),
                'description' => 'Descripcion of the Producto'
            ],
            'id_archivo_subido_img' => [
                'type' => Type::int(),
                'description' => 'Id Imagen del producto'
            ],
            'url_imagen_lowres_uid' => [
                'type' => Type::string(),
                'description' => 'URL del logo en baja calidad'
            ],
            'url_imagen_original_uid' => [
                'type' => Type::string(),
                'description' => 'URL del logo original'
            ],
            'cantidad_producto' => [
                'type' => Type::int(),
                'description' => 'Cantidad agregada del producto'
            ],
            'precio_unitario' => [
                'type' => Type::int(),
                'description' => 'Precio unitario del producto'
            ],
            'precio_total' => [
                'type' => Type::int(),
                'description' => 'Precio total del pedido'
            ],
            'tiene_descuento_porprod' => [
                'type' => Type::int(),
                'description' => 'Indica si el producto tiene descuento'
            ],
            'descuento_porprod' => [
                'type' => Type::int(),
                'description' => 'Descuento por producto'
            ],
            'precio_descuento_porprod' => [
                'type' => Type::int(),
                'description' => 'Precio unitario del producto con descuento'
            ],
            'precio_total_descuento_porprod' => [
                'type' => Type::int(),
                'description' => 'Precio total del pedido con descuento'
            ],
            'tiene_descuento_pormrc' => [
                'type' => Type::int(),
                'description' => 'Indica si el producto tiene descuento'
            ],
            'descuento_pormrc' => [
                'type' => Type::int(),
                'description' => 'Descuento por marca'
            ],
            'precio_descuento_pormrc' => [
                'type' => Type::int(),
                'description' => 'Precio unitario del producto con descuento'
            ],
            'precio_total_descuento_pormrc' => [
                'type' => Type::int(),
                'description' => 'Precio total del pedido con descuento'
            ],
        ];
    }
}
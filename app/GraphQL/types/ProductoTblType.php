<?php

namespace PEDIDOS\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class ProductoTblType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'ProductoTbl',
        'description' => 'Details about a ProductoTbl',
    ];

    public function fields() : array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'Id del ProductoTbl'
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
            'id_color' => [
                'type' => Type::int(),
                'description' => 'Id Color del producto'
            ],
            'color' => [
                'type' => Type::string(),
                'description' => 'Color del producto'
            ],
            'id_marca' => [
                'type' => Type::int(),
                'description' => 'Id Marca del producto'
            ],
            'nombre_marca' => [
                'type' => Type::string(),
                'description' => 'Marca del producto'
            ],
            'id_img_marca' => [
                'type' => Type::int(),
                'description' => 'Id Img Marca del producto'
            ],
            'id_tipo_material' => [
                'type' => Type::int(),
                'description' => 'Tipo de material del producto'
            ],
            'tipo_material' => [
                'type' => Type::string(),
                'description' => 'Material del producto'
            ],
            'id_genero' => [
                'type' => Type::int(),
                'description' => 'Tipo de genero'
            ],
            'genero' => [
                'type' => Type::string(),
                'description' => 'Genero del producto'
            ],
            'id_categoria' => [
                'type' => Type::int(),
                'description' => 'Id Categoría del producto'
            ],
            'categoria' => [
                'type' => Type::string(),
                'description' => 'Categoria del producto'
            ],
            'precio' => [
                'type' => Type::int(),  // DEBE SER FLOAT, DOUBLE O DECIMAL
                'description' => 'Precio del producto'
            ],
            'tiene_producto_desc' => [
                'type' => Type::int(),
                'description' => 'Indica si el producto tiene descuento'
            ],
            'descuento_producto_cliente' => [
                'type' => Type::int(),  // DEBE SER FLOAT, DOUBLE O DECIMAL
                'description' => 'Descuento en el precio del producto'
            ],
            'tiene_marca_desc' => [
                'type' => Type::int(),
                'description' => 'Indica si la marca tiene descuento'
            ],
            'descuento_marca_prod' => [
                'type' => Type::int(),  // DEBE SER FLOAT, DOUBLE O DECIMAL
                'description' => 'Descuento en el precio de la marca'
            ],
            'total_unidades' => [
                'type' => Type::int(),
                'description' => 'Total de unidades en el bulto'
            ],
            'esta_en_carrito_draft' => [
                'type' => Type::int(),
                'description' => 'Indica si el producto está en el carrito DRAFT'
            ],
        ];
    }
}
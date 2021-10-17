<?php

namespace PEDIDOS\GraphQL\Types;

use PEDIDOS\Producto;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class ProductoType extends GraphQLType 
{
    protected $attributes = [
        'name' => 'Producto',
        'description' => 'Details about a Producto',
        'model' => Producto::class
    ];

    public function fields() : array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'Id del Producto'
            ],
            'referencia_cod_prov' => [
                'type' => Type::string(),
                'description' => 'Codigo de referencia del proveedor'
            ],
            'nombre' => [
                'type' => Type::string(),
                'description' => 'Nombre of the Producto'
            ],
            'descripcion' => [
                'type' => Type::string(),
                'description' => 'Descripcion of the Producto'
            ],
            'id_archivo_subido_img' => [
                'type' => Type::int(),
                'description' => 'Imagen del producto'
            ],
            'id_color' => [
                'type' => Type::int(),
                'description' => 'Color del producto'
            ],
            'id_marca' => [
                'type' => Type::int(),
                'description' => 'Marca del producto'
            ],
            'id_tipo_material' => [
                'type' => Type::int(),
                'description' => 'Tipo de material del producto'
            ],
            'id_genero' => [
                'type' => Type::int(),
                'description' => 'Tipo de genero'
            ],
            'id_categoria' => [
                'type' => Type::int(),
                'description' => 'Categoría del producto'
            ],
            'precio' => [
                'type' => Type::int(),  // DEBE SER FLOAT, DOUBLE O DECIMAL
                'description' => 'Precio del producto'
            ],
            'total_unidades' => [
                'type' => Type::int(),
                'description' => 'Total de unidades en el bulto'
            ]
        ];
    }
}
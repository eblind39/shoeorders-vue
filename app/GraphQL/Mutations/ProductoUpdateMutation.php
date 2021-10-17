<?php
namespace PEDIDOS\GraphQL\Mutations;

//use Closure;
use PEDIDOS\Producto;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;

class ProductoUpdateMutation extends Mutation
{
    protected $attributes = [
        'name' => 'productoUpdate'
    ];

    public function type(): Type
    {
        return GraphQL::type('Producto');
    }

    public function args(): array
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()],
            'referencia_cod_prov' => ['name' => 'referencia_cod_prov', 'type' => Type::string()],
            'nombre' => ['name' => 'nombre', 'type' => Type::string()],
            'descripcion' => ['name' => 'descripcion', 'type' => Type::string()],
            'id_archivo_subido_img' => ['name' => 'id_archivo_subido_img', 'type' => Type::int()],
            'id_color' => ['name' => 'id_color', 'type' => Type::int()],
            'id_marca' => ['name' => 'id_marca', 'type' => Type::int()],
            'id_tipo_material' => ['name' => 'id_tipo_material', 'type' => Type::int()],
            'id_genero' => ['name' => 'id_genero', 'type' => Type::int()],
            'id_categoria' => ['name' => 'id_categoria', 'type' => Type::int()],
            'precio' => ['name' => 'precio', 'type' => Type::int()],    // DEBE SER FLOAT, DOUBLE O DECIMAL
            'total_unidades' => ['name' => 'total_unidades', 'type' => Type::int()],
        ];
    }

    protected function rules(array $args = []): array
    {
        return [
            'id' => ['required'],
            'referencia_cod_prov' => ['required', 'max:50'],
            'nombre' => ['required', 'max:255'],
            'id_color' => ['required'],
            'id_marca' => ['required'],
        ];
    }

    public function ValidationErrorMessages(array $args = []): array 
    {
        return [
            'id.required' => 'Debe proporcionar un id de marca',
            'referencia_cod_prov.required' => 'Debe ingresar un código de producto',
            'referencia_cod_prov.max:50' => 'Se acepta un máximo de 50 caracteres',
            'nombre.required' => 'Debe ingresar un nombre',
            'nombre.max:255' => 'Se acepta un máximo de 255 caracteres',
            'id_color.required' => 'Debe ingresar un color',
            'id_marca.required' => 'Debe ingresar una marca',
        ];
    }

    public function resolve($root, $args) //, $context, ResolveInfo $resolveInfo, Closure $getSelectedFields)
    {
        // Create instance of Marcas model
        $prod = \PEDIDOS\Producto::where('id', '=', $args['id'])->firstOrFail();
        if (!$prod) return null;
        
        $prod->referencia_cod_prov = $args['referencia_cod_prov'];
        $prod->nombre = $args['nombre'];
        $prod->descripcion = $args['descripcion'];
        $prod->id_color = $args['id_color'];
        $prod->id_marca = $args['id_marca'];
        $prod->id_tipo_material = $args['id_tipo_material'];
        $prod->id_genero = $args['id_genero'];
        $prod->id_categoria = $args['id_categoria'];
        $prod->precio = $args['precio'];
        $prod->total_unidades = $args['total_unidades'];
        $prod->updated_at = now();
        $prod->user_update = auth()->user()->username;
        
        // Save the model
        $prod->save();
        //$prod->update(['id' => $args['id']]);


        /*$prod = \PEDIDOS\marca::updateOrCreate(
            [
                    'id' => $args['id']
            ],
            [
                    'name' => $args['name'],
                    'description' => $args['description'],
                    'updated_at' => now(),
                    'user_update' => 'admin'
            ]
        );*/

        // return $prod;
        return Producto::where('id', '=', $args['id'])->firstOrFail();
    }
}
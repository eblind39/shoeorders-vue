<?php

use example\Type\ExampleType;
use example\Query\ExampleQuery;
use example\Mutation\ExampleMutation;
use example\Type\ExampleRelationType;

return [

    // The prefix for routes
    'prefix' => 'graphql',

    // The routes to make GraphQL request. Either a string that will apply
    // to both query and mutation or an array containing the key 'query' and/or
    // 'mutation' with the according Route
    //
    // Example:
    //
    // Same route for both query and mutation
    //
    // 'routes' => 'path/to/query/{graphql_schema?}',
    //
    // or define each route
    //
    // 'routes' => [
    //     'query' => 'query/{graphql_schema?}',
    //     'mutation' => 'mutation/{graphql_schema?}',
    // ]
    //
    'routes' => '{graphql_schema?}',

    // The controller to use in GraphQL request. Either a string that will apply
    // to both query and mutation or an array containing the key 'query' and/or
    // 'mutation' with the according Controller and method
    //
    // Example:
    //
    // 'controllers' => [
    //     'query' => '\Rebing\GraphQL\GraphQLController@query',
    //     'mutation' => '\Rebing\GraphQL\GraphQLController@mutation'
    // ]
    //
    'controllers' => \Rebing\GraphQL\GraphQLController::class.'@query',

    // Any middleware for the graphql route group
    'middleware' => [], //'auth'

    // Additional route group attributes
    //
    // Example:
    //
    // 'route_group_attributes' => ['guard' => 'api']
    //
    'route_group_attributes' => [],

    // The name of the default schema used when no argument is provided
    // to GraphQL::schema() or when the route is used without the graphql_schema
    // parameter.
    'default_schema' => 'default',

    // The schemas for query and/or mutation. It expects an array of schemas to provide
    // both the 'query' fields and the 'mutation' fields.
    //
    // You can also provide a middleware that will only apply to the given schema
    //
    // Example:
    //
    //  'schema' => 'default',
    //
    //  'schemas' => [
    //      'default' => [
    //          'query' => [
    //              'users' => 'App\GraphQL\Query\UsersQuery'
    //          ],
    //          'mutation' => [
    //
    //          ]
    //      ],
    //      'user' => [
    //          'query' => [
    //              'profile' => 'App\GraphQL\Query\ProfileQuery'
    //          ],
    //          'mutation' => [
    //
    //          ],
    //          'middleware' => ['auth'],
    //      ],
    //      'user/me' => [
    //          'query' => [
    //              'profile' => 'App\GraphQL\Query\MyProfileQuery'
    //          ],
    //          'mutation' => [
    //
    //          ],
    //          'middleware' => ['auth'],
    //      ],
    //  ]
    //
    'schemas' => [
        'default' => [
            'query' => [
                'secOpcionMenu'         => PEDIDOS\GraphQL\Queries\SecOpcionMenuQuery::class,
                'secOpcionesMenu'       => PEDIDOS\GraphQL\Queries\SecOpcionesMenuQuery::class,
                'secOpcionesMenuTree'   => PEDIDOS\GraphQL\Queries\SecOpcionesMenuTreeQuery::class,
                'catalogo'              => PEDIDOS\GraphQL\Queries\CatalogoQuery::class,
                'catalogos'             => PEDIDOS\GraphQL\Queries\CatalogosQuery::class,
                'catalogosTree'         => PEDIDOS\GraphQL\Queries\CatalogosTreeQuery::class,
                'catalogosHijosXCod'    => PEDIDOS\GraphQL\Queries\CatalogosHijosXCodQuery::class,
                'secRole'               => PEDIDOS\GraphQL\Queries\SecRoleQuery::class,
                'secRoles'              => PEDIDOS\GraphQL\Queries\SecRolesQuery::class,
                'usersByRoleId'         => PEDIDOS\GraphQL\Queries\UsersByRoleQuery::class,
                'usuariotbl'            => PEDIDOS\GraphQL\Queries\UserTblQuery::class,
                'marca'                 => PEDIDOS\GraphQL\Queries\MarcaQuery::class,
                'marcas'                => PEDIDOS\GraphQL\Queries\MarcasQuery::class,
                'producto'              => PEDIDOS\GraphQL\Queries\ProductoQuery::class,
                'productos'             => PEDIDOS\GraphQL\Queries\ProductosQuery::class,
                'marcasxclienteId'      => PEDIDOS\GraphQL\Queries\MarcasXClienteIdQuery::class,
                'productosxclienteId'   => PEDIDOS\GraphQL\Queries\ProductosXClienteTblQuery::class,
                'carrito'               => PEDIDOS\GraphQL\Queries\CarritoQuery::class,
                'carritoTbl'            => PEDIDOS\GraphQL\Queries\CarritoTblQuery::class,
                'optsmenuXRol'            => PEDIDOS\GraphQL\Queries\SecOpcionesMenuXRolQuery::class,
                'carritoGetTotalProductosXUsrId' => PEDIDOS\GraphQL\Queries\CarritoGetTotalProductosXUsrIdQuery::class,
                'carritoProductosAdded' => PEDIDOS\GraphQL\Queries\CarritoProductosAddedQuery::class,
                'pedidosRealizados'     => PEDIDOS\GraphQL\Queries\PedidosRealizadosQuery::class,
            ],
            'mutation' => [
                'secOpcionMenuCreate'   => PEDIDOS\GraphQL\Mutations\SecOpcionesMenuCreateMutation::class,
                'secOpcionMenuUpdate'   => PEDIDOS\GraphQL\Mutations\SecOpcionesMenuUpdateMutation::class,
                'secOpcionMenuDelete'   => PEDIDOS\GraphQL\Mutations\SecOpcionesMenuDeleteMutation::class,
                'catalogoCreate'        => PEDIDOS\GraphQL\Mutations\CatalogoCreateMutation::class,
                'catalogoUpdate'        => PEDIDOS\GraphQL\Mutations\CatalogoUpdateMutation::class,
                'catalogoDelete'        => PEDIDOS\GraphQL\Mutations\CatalogoDeleteMutation::class,
                'secRoleCreate'         => PEDIDOS\GraphQL\Mutations\SecRoleCreateMutation::class,
                'secRoleUpdate'         => PEDIDOS\GraphQL\Mutations\SecRoleUpdateMutation::class,
                'secRoleDelete'         => PEDIDOS\GraphQL\Mutations\SecRoleDeleteMutation::class,
                'marcaCreate'           => PEDIDOS\GraphQL\Mutations\MarcaCreateMutation::class,
                'marcaUpdate'           => PEDIDOS\GraphQL\Mutations\MarcaUpdateMutation::class,
                'marcaDelete'           => PEDIDOS\GraphQL\Mutations\MarcaDeleteMutation::class,
                'productoCreate'        => PEDIDOS\GraphQL\Mutations\ProductoCreateMutation::class,
                'productoUpdate'        => PEDIDOS\GraphQL\Mutations\ProductoUpdateMutation::class,
                'productoDelete'        => PEDIDOS\GraphQL\Mutations\ProductoDeleteMutation::class,
                'marcaXClienteCreate'   => PEDIDOS\GraphQL\Mutations\MarcaXClienteCreateMutation::class,
                'marcaXClienteUpdate'   => PEDIDOS\GraphQL\Mutations\MarcaXClienteUpdateMutation::class,
                'marcaXClienteDelete'   => PEDIDOS\GraphQL\Mutations\MarcaXClienteDeleteMutation::class,
                'marcaXClienteVincular' => PEDIDOS\GraphQL\Mutations\MarcaXClienteVincularMutation::class,
                'productoXClienteCreate'   => PEDIDOS\GraphQL\Mutations\ProductoXClienteCreateMutation::class,
                'productoXClienteUpdate'   => PEDIDOS\GraphQL\Mutations\ProductoXClienteUpdateMutation::class,
                'productoXClienteDelete'   => PEDIDOS\GraphQL\Mutations\ProductoXClienteDeleteMutation::class,
                'carritoCreate'         => PEDIDOS\GraphQL\Mutations\CarritoCreateMutation::class,
                'carritoUpdate'         => PEDIDOS\GraphQL\Mutations\CarritoUpdateMutation::class,
                'carritoDelete'         => PEDIDOS\GraphQL\Mutations\CarritoDeleteMutation::class,
                'accesosVincularXRoleId'=> PEDIDOS\GraphQL\Mutations\AccesosVincularXRoleIdMutation::class,
                'pedidoCreate'          => PEDIDOS\GraphQL\Mutations\PedidoCreateMutation::class,
                'pedidoCompletar'       => PEDIDOS\GraphQL\Mutations\PedidoCompletarMutation::class,
            ],
            // Route::middleware('auth:api')->post('/whoami', 'Api\AuthController@whoami');
            // 'middleware' => [],
            'middleware' => ['auth:api'],
            'method'     => ['get', 'post']
        ],
    ],

    // The types available in the application. You can then access it from the
    // facade like this: GraphQL::type('user')
    //
    // Example:
    //
    // 'types' => [
    //     'user' => 'App\GraphQL\Type\UserType'
    // ]
    //
    'types' => [
        'SecOpcionMenu'           => PEDIDOS\GraphQL\Types\SecOpcionMenuType::class,
        'SecOpcionMenuTree'       => PEDIDOS\GraphQL\Types\SecOpcionMenuTreeType::class,
        'Catalogo'                => PEDIDOS\GraphQL\Types\CatalogoType::class,
        'CatalogoTree'            => PEDIDOS\GraphQL\Types\CatalogoTreeType::class,
        'SecRole'                 => PEDIDOS\GraphQL\Types\SecRoleType::class,
        'UserGraph'               => PEDIDOS\GraphQL\Types\UserGraphType::class,
        'UserTbl'                 => PEDIDOS\GraphQL\Types\UserTblType::class,
        'Marca'                   => PEDIDOS\GraphQL\Types\MarcaType::class,
        'MarcaImg'                => PEDIDOS\GraphQL\Types\MarcaImgType::class,
        'Producto'                => PEDIDOS\GraphQL\Types\ProductoType::class,
        'ProductoTbl'             => PEDIDOS\GraphQL\Types\ProductoTblType::class,
        'MarcasXCliente'          => PEDIDOS\GraphQL\Types\MarcasXClienteType::class,
        'MarcasXClienteTbl'       => PEDIDOS\GraphQL\Types\MarcasXClienteTblType::class,
        'ProductoXCliente'        => PEDIDOS\GraphQL\Types\ProductoXClienteType::class,
        'ProductoXClienteTbl'     => PEDIDOS\GraphQL\Types\ProductoXClienteTblType::class,
        'Carrito'                 => PEDIDOS\GraphQL\Types\CarritoType::class,
        'CarritoTbl'              => PEDIDOS\GraphQL\Types\CarritoTblType::class,
        'SecOpcionesMenuXRol'     => PEDIDOS\GraphQL\Types\SecOpcionesMenuXRolType::class,
        'TotalProdsInCart'        => PEDIDOS\GraphQL\Types\TotalProdsInCartType::class,
        'ProductoInCart'          => PEDIDOS\GraphQL\Types\ProductoInCartType::class,
        'Response'                => PEDIDOS\GraphQL\Types\ResponseType::class,
        'ProductoPedido'          => PEDIDOS\GraphQL\Types\ProductoPedidoType::class,
        // 'relation_example'  => ExampleRelationType::class,
    ],

    // This callable will be passed the Error object for each errors GraphQL catch.
    // The method should return an array representing the error.
    // Typically:
    // [
    //     'message' => '',
    //     'locations' => []
    // ]
    'error_formatter' => ['\Rebing\GraphQL\GraphQL', 'formatError'],

    /*
     * Custom Error Handling
     *
     * Expected handler signature is: function (array $errors, callable $formatter): array
     *
     * The default handler will pass exceptions to laravel Error Handling mechanism
     */
    'errors_handler' => ['\Rebing\GraphQL\GraphQL', 'handleErrors'],

    // You can set the key, which will be used to retrieve the dynamic variables
    'params_key'    => 'variables',

    /*
     * Options to limit the query complexity and depth. See the doc
     * @ https://github.com/webonyx/graphql-php#security
     * for details. Disabled by default.
     */
    'security' => [
        'query_max_complexity'  => null,
        'query_max_depth'       => null,
        'disable_introspection' => false,
    ],

    /*
     * You can define your own pagination type.
     * Reference \Rebing\GraphQL\Support\PaginationType::class
     */
    'pagination_type' => \Rebing\GraphQL\Support\PaginationType::class,

    /*
     * Config for GraphiQL (see (https://github.com/graphql/graphiql).
     */
    'graphiql' => [
        'prefix'     => '/graphiql/{graphql_schema?}',
        'controller' => \Rebing\GraphQL\GraphQLController::class.'@graphiql',
        'middleware' => [],
        'view'       => 'graphql::graphiql',
        'display'    => env('ENABLE_GRAPHIQL', true),
    ],

    /*
     * Overrides the default field resolver
     * See http://webonyx.github.io/graphql-php/data-fetching/#default-field-resolver
     *
     * Example:
     *
     * ```php
     * 'defaultFieldResolver' => function ($root, $args, $context, $info) {
     * },
     * ```
     * or
     * ```php
     * 'defaultFieldResolver' => [SomeKlass::class, 'someMethod'],
     * ```
     */
    'defaultFieldResolver' => null,

    /*
     * Any headers that will be added to the response returned by the default controller
     */
    'headers' => [],

    /*
     * Any JSON encoding options when returning a response from the default controller
     * See http://php.net/manual/function.json-encode.php for the full list of options
     */
    'json_encoding_options' => 0,
];

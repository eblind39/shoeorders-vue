<?php

namespace PEDIDOS\Http\Controllers\Api;

use PEDIDOS\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use PEDIDOS\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

// Logging
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\FirePHPHandler;

class AuthController extends Controller
{
	public function register(Request $request) {
		$validatedData = $request->validate([
			'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed'
		]);
		
		$validatedData['password'] = Hash::make($request->password);
		
		$user = User::create($validatedData);
		
		$accessToken = $user->createToken('authToken')->accessToken;
		
		return response(['user' => $user /*, 'access_token' => $accessToken*/ ]);
    }
    
	public function registerfull(Request $request) {
		$validatedData = $request->validate([
			'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'nombre_completo' => 'string|max:255',
		]);
		
		$validatedData['password'] = Hash::make($request->password);
		
        // Create instance of User model
        $user = new \PEDIDOS\User;
        $user->username = $validatedData['username'];
        $user->email = $validatedData['email'];
        $user->password = $validatedData['password'];
        $user->nombre_completo = $validatedData['nombre_completo'];
        $user->telefono_fijo = $request->telefono_fijo;
        $user->telefono_celular = $request->telefono_celular;
        $user->id_ciudad = $request->id_ciudad;
        $user->id_zona = $request->id_zona;
        $user->talla_zapato = $request->talla_zapato;
        $user->cedula = $request->cedula;
        $user->direccion = $request->direccion;
        $user->id_tipo_pago = $request->id_tipo_pago;
        $user->limite_credito = $request->limite_credito;
        $user->costo_por_envio = $request->costo_por_envio;
        $user->updated_at = null;
        $user->created_at = now();
        $user->user_create = auth()->user()->username;
            
        // Save the model
        $user->save();
		
		return response(['user' => $user]);
	}
	
	public function login(Request $request) {
		
		$loginData = $request->validate([
			'email' => 'email|required',
			'password' => 'required'
		]);
		
		if (!auth()->attempt($loginData)) {
			return response(['message'=>'Invalid credentials.']);
		}
		
		/*$remember = $request->remember;
		if (!empty($remember)) {
			Auth::login(auth()->user()->id, true);
		}*/
		
		$accessToken = auth()->user()->createToken('authToken')->accessToken;
		
		return response(['user' => auth()->user(), 'access_token' => $accessToken]);
    }

	public function logout(Request $request) {
		if (auth()->user() == null) return response(['message'=>'No logged user']);
		
		auth()->user()->tokens->each(function($token, $key) {
			$token->delete();
		});
		
		// auth()->user()->accessToken->delete();
		
		return response(['message'=>'Logged out successfully']);
	}
	
	public function whoami(Request $request) {
		if (auth()->user() == null) return response(['message'=>'No logged user']);
		
		return response(['user' => auth()->user()]);
	}
    
	public function updateuser(Request $request) {
		$validatedData = $request->validate([
            'id' => 'required',
			'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
		]);
        
        if ($request->password!='')
		    $validatedData['password'] = Hash::make($request->password);
        
        $user = User::where('id', '=', $validatedData['id'])->firstOrFail();
        if (!$user) return null;
        $user->username = $validatedData['username'];
        $user->email = $validatedData['email'];
        if ($request->password!='') $user->password = $validatedData['password'];
        $user->nombre_completo = $request->nombre_completo;
        $user->telefono_fijo = $request->telefono_fijo;
        $user->telefono_celular = $request->telefono_celular;
        $user->id_ciudad = $request->id_ciudad;
        $user->id_zona = $request->id_zona;
        $user->talla_zapato = $request->talla_zapato;
        $user->cedula = $request->cedula;
        $user->direccion = $request->direccion;
        $user->id_tipo_pago = $request->id_tipo_pago;
        $user->limite_credito = $request->limite_credito;
        $user->costo_por_envio = $request->costo_por_envio;
        $user->updated_at = now();
        $user->user_update = auth()->user()->username;
        
        $user->save();
        
		// $user = User::create($validatedData);
        // // $accessToken = $user->createToken('authToken')->accessToken;
        // $userfull = User::where('email', '=', $user->email)->get();
		
		return response(['user' => $user]);
    }
    
	public function deleteuser(Request $request) {
		$validatedData = $request->validate([
            'id' => 'required',
        ]);
        
        $user = User::where('id', '=', $validatedData['id'])->firstOrFail();
        if (!$user) return null;
        if (!$user->user_update) $user->updated_at = null;
        $user->deleted_at = now();
        $user->user_delete = auth()->user()->username;
        
        $user->save();

		return response(['userdeleted' => 'OK']);
	}

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function usersbyrole(Request $request)
    {
        $userIds = DB::table('sec_roles_users')
        ->join('users', 'sec_roles_users.users_id', '=', 'users.id')
        ->where('sec_roles_users.roles_id', '=', $request->roleid)
        ->select('users.id')
        ->get();

        $arrids = array();
        foreach ($userIds as $ids) {
            array_push($arrids, $ids->id);
        }

        $users = User::whereIn('id', $arrids)->whereNull('deleted_at')->get();

        return response(['users' => $users]);
    }

    public function userbyid(Request $request)
    {
        $user = User::where('id', '=', $request->id)->get();

        return response(['user' => $user]);
    }
}

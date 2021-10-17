<?php

namespace PEDIDOS\Http\Controllers\Auth;

//use PEDIDOS\Role;
use PEDIDOS\User;
use PEDIDOS\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

// Logging
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\FirePHPHandler;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    //protected $redirectTo = '/home';
	/*Ernesto 12-08-2019*/
	protected $redirectTo = '/';
	
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'username' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
			'es_cliente' => ['required', 'boolean'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \PEDIDOS\User
     */
    protected function create(array $data)
    {
//Logging
// Create the logger
$logger = new Logger('pedidos');
// Now add some handlers
$logger->pushHandler(new StreamHandler('pedidos.log', Logger::DEBUG));
$logger->pushHandler(new FirePHPHandler());
$logger->addInfo('Auth/CreateUser - Se invoca y accede');

        //return 
		$user = \PEDIDOS\User::create([
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
			'es_cliente' => $data['es_cliente'],
        ]);
		

// You can now use your logger
$logger->addInfo('Auth/CreateUser - Usuario creado satisfactoriamente');
//Logging*/
		
		//$user->roles()->attach(Role::where('name', 'user')->first());
		return $user;
    }
}
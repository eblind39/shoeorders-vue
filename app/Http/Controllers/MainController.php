<?php

namespace PEDIDOS\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

// Logging
use Monolog\Logger;
use Monolog\Formatter\LineFormatter;
use Monolog\Handler\StreamHandler;

class MainController extends Controller
{
    /**
     * Show the app screen (SPA).
     *
     * @param Illuminate\Http\Request $request
     * 
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function getPedidosMainView(Request $request)
    {
		
		//Logging Console
		$output = "[%datetime%] %channel%.%level_name%: %message%\n";
		$formatter = new LineFormatter($output);

		$streamHandler = new StreamHandler('php://stdout', Logger::DEBUG);
		$streamHandler->setFormatter($formatter);

		$logger = new Logger('LoggerName');
		$logger->pushHandler($streamHandler);
		$logger->addInfo('Se retorna la vista principal de la aplicacion');
		//Logging Console

		
		return view('pedidos', ['loggedin' => (Auth::check() ? '1' : '0')]);
    }
}

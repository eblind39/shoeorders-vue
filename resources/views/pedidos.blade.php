<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">

		<!-- Favicons -->
		<link href="{{ asset('images/favicon.png') }}" rel="icon">
		<link href="{{ asset('images/apple-touch-icon.png') }}" rel="apple-touch-icon">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Styles -->
        <link type="text/css" rel="stylesheet" href="{{ asset('css/app.css') }}">

        <!-- Scripts -->
		<script type="text/javascript">
            window.csrf_token = "{{ csrf_token() }}";
			window.loggedin = "{{ $loggedin }}";
			window.authaccess_token = "";
		</script>
    </head>
    <body>
		<!-- Vue container -->
        <div id="app"></div>
		<!-- Scripts -->
        <script type="text/javascript" language="JavaScript" src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
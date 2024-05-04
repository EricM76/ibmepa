# JSON Web Token Authentication for Laravel & Lumen

## Lins de interes
- Información [https://jwt-auth.readthedocs.io/en/develop/](https://jwt-auth.readthedocs.io/en/develop/)

## Guía
### 1. Ejecute el siguiente comando para obtener la última versión:
~~~
composer require tymon/jwt-auth
~~~
### 2. Agregue el proveedor de servicios en el array `providers` en el archivo de configuración `config/app.php` de la siguiente manera (Laravel 5.4 o inferior):
~~~
'providers' => [

    ...

    Tymon\JWTAuth\Providers\LaravelServiceProvider::class,
]
~~~
### 3. Ejecute el siguiente comando para publicar el archivo de configuración del paquete:
~~~
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
~~~
* *Ahora debería tener un archivo `config/jwt.php` que le permita configurar los conceptos básicos de este paquete.*
### 4. Generar clave secreta
~~~
php artisan jwt:secret
~~~
* *Esto actualizará su archivo `.env` con algo como `JWT_SECRET=foobar`*
### 5. Actualice su modelo de usuario
En primer lugar, debe implementar el contrato `Tymon\JWTAuth\Contracts\JWTSubject` en su modelo de usuario, lo que requiere que implemente los 2 métodos `getJWTIdentifier()` y `getJWTCustomClaims()`.
~~~
class User extends Authenticatable implements JWTSubject

/**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

~~~
### 6. Configurar la protección de autenticación
Dentro del archivo config/auth.php, deberá realizar algunos cambios para configurar Laravel para usar jwt guard para potenciar la autenticación de su aplicación. Realice los siguientes cambios en el archivo:
~~~
'defaults' => [
    'guard' => 'api',
    'passwords' => 'users',
],

...

'guards' => [
    'api' => [
        'driver' => 'jwt',
        'provider' => 'users',
    ],
],
~~~
* *Aquí le estamos diciendo a la protección api que use el controlador jwt, y estamos configurando la protección api como predeterminada.*
* *¡Ahora podemos usar el sistema Auth incorporado de Laravel, con jwt-auth haciendo el trabajo detrás de escena!*
### 7. Crear el AuthController
- Ejecutar el siguiente comando:
~~~
php artisan make:controller AuthController
~~~
- Agregar los siguientes métodos
~~~
/**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
~~~
### 8. Agregue algunas rutas de autenticación básicas. Agreguemos algunas rutas en `route/api.php` de la siguiente manera:
~~~
 Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);

});
~~~

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('/add_update_contact/{id?}', [ContactController::class, 'addOrUpdateContact']);
Route::get('/contacts/{id?}', [ContactController::class, 'getContacts']);
Route::get('/delete_contact/{id}', [ContactController::class, 'deleteContact']);

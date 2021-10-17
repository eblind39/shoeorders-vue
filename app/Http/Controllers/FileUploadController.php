<?php

namespace PEDIDOS\Http\Controllers;

use PEDIDOS\ArchivosSubidos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class FileUploadController extends Controller
{
    public function getfecha(Request $request)
    {
        $utils = new \Utilidades();
        return ($utils->getFechaHoraJSON('24'));
    }

    public function fileupload(Request $request)
    {
        $uploadedFile = $request->file('image');
        $filename = $request->nombre_original;

        $tipoimg = $request->tipoimagen;
        // if ($tipoimg==='marca') $folder='public/ImagenesSPA/marcas/';
        // else if ($tipoimg==='producto') $folder='public/ImagenesSPA/productos/';
        // else $folder='public/';

        // if (!file_exists($folder)) { mkdir($folder); }

        // $folder='public/';  // EN USO
        $folder = '';
        $upldFolder = config('app.upload_folder');

        $utils = new \Utilidades();
        $idpadimagenoriginal = $utils->generateRandomString(10).$utils->generateRandomString(10);
        $idpadimagenlowres = $utils->generateRandomString(10).$utils->generateRandomString(10);
        $numpadsecimg = $utils->generateRandomString(9);
        $fnameoriginal = $numpadsecimg . "_" . $idpadimagenoriginal . "_c.jpg";
        $fnamelowres = $numpadsecimg . "_" . $idpadimagenlowres . "_c.jpg";

        // Storage::disk('local')->putFileAs(  // EN USO
        Storage::disk('public_uploads')->putFileAs(
            $folder,
            $uploadedFile,
            $fnameoriginal
        );

        // $fcontt = File::get(storage_path('app\\public\\'.$fnameoriginal));  // EN USO
        $fcontt = File::get(public_path().'\\'.$upldFolder.'\\'.$fnameoriginal);
        
        $output = public_path().'\\'.$upldFolder.'\\'.$fnamelowres;
        // $output = public_path().'\\upload\\'.'filetmp.jpg';
        // $output = storage_path('app\\public\\'.$fnamelowres);    // EN USO
        $lowrescontent = $utils->smart_resize_image(null, $fcontt, 500, 500, true, $output, false, false, 80, $fnameoriginal, $fnamelowres);
        
        // Create instance of ArchivosSubidos
        $upfile = new ArchivosSubidos;
        $upfile->es_imagen = $request->esimagen;
        $upfile->nombre_original = $request->nombre_original;
        $upfile->imagen_original_uid = $fnameoriginal;
        $upfile->imagen_lowres_uid = $fnamelowres;
        $upfile->updated_at = null;
        $upfile->user_create = auth()->user()->username;
        // Save the model
        $upfile->save();
        $lastfup = ArchivosSubidos::where('id', '=', ArchivosSubidos::max('id'))->firstOrFail();

        return response()->json([
            'img_uploaded' => $lastfup,
            'storagepath' => $output,
            'publicpath' => public_path(),
        ]);
    }

    public function getStorageImage(Request $request)
    {
        $tipoimg = $request->tipoimagen;
        if ($tipoimg==='marca') $url='public/ImagenesSPA/marcas/';
        else if ($tipoimg==='producto') $url='public/ImagenesSPA/productos/';
        else $url='public/';

        $path = storage_path($url . $request->nombreimagen);
    
        if (!file_exists($path)) {
            // abort(404); // enviar respuesta adecuada
            return response(['code' => 404, 'description' => 'Not Found']);
        }
    
        $file = File::get($path);
        $type = File::mimeType($path);
    
        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);
    
        return $response;
    }
    
}

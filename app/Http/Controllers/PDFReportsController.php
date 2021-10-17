<?php

namespace PEDIDOS\Http\Controllers;

use Illuminate\Http\Request;
use PEDIDOS\Pedidos;
use PEDIDOS\Producto;
use PEDIDOS\User;
use PDF;

class PDFReportsController extends Controller
{
    /**
     * Generar archivo pdf report.
     *
     * @param Illuminate\Http\Request $request
     * 
     * @return blob pdf
     */
    public function getPDFReport(Request $request)
    {
        $numero_pedido = $request->numpdd;

        $idcli = null;
        $fechapdd = null;
        $totCantidad = 0;
        $totPrecioTotal = 0;
        
        $htmlprds = '<table>';
        $htmlprds .= '<thead>';
        $htmlprds .= '<tr>';
        $htmlprds .= '<td class="borderinf">Código</td>';
        $htmlprds .= '<td class="borderinf">Producto</td>';
        $htmlprds .= '<td class="esnumber borderinf">Cantidad</td>';
        $htmlprds .= '<td class="esnumber borderinf">Precio</td>';
        $htmlprds .= '<td class="esnumber borderinf">Precio total</td>';
        $htmlprds .= '</tr>';
        $htmlprds .= '</thead>';
        $htmlprds .= '<tbody>';
        $pdds = Pedidos::where('numero_pedido', '=', $numero_pedido)->get();
        foreach ($pdds as $pdd) {
            $idcli = $pdd->id_cliente;
            $fechapdd = $pdd->created_at;
            $prdd = Producto::where('id', '=', $pdd->id_producto)->firstOrFail();
            $htmlprds .= '<tr>';
            $htmlprds .= '<td>'. $prdd->referencia_cod_prov .'</td>';
            $htmlprds .= '<td>'. $prdd->nombre .'</td>';
            $htmlprds .= '<td class="esnumber">'. $pdd->cantidad .'</td>';
            if ($pdd->tiene_descuento_porprod==0 && $pdd->tiene_descuento_pormrc==0) {
                $htmlprds .= '<td class="esnumber">'. $pdd->precio .'</td>';
                $htmlprds .= '<td class="esnumber">'. $pdd->precio_total .'</td>';
            }
            if ($pdd->tiene_descuento_porprod==1 && $pdd->tiene_descuento_pormrc==0) {
                $htmlprds .= '<td class="esnumber">'. $pdd->precio_descuento_porprod .'</td>';
                $htmlprds .= '<td class="esnumber">'. $pdd->precio_total_descuento_porprod .'</td>';
            }
            if ($pdd->tiene_descuento_porprod==0 && $pdd->tiene_descuento_pormrc==1) {
                $htmlprds .= '<td class="esnumber">'. $pdd->precio_descuento_pormrc .'</td>';
                $htmlprds .= '<td class="esnumber">'. $pdd->precio_total_descuento_pormrc .'</td>';
            }
            if ($pdd->tiene_descuento_porprod==1 && $pdd->tiene_descuento_pormrc==1) {
                $htmlprds .= '<td class="esnumber">'. $pdd->precio_descuento_porprod .'</td>';
                $htmlprds .= '<td class="esnumber">'. $pdd->precio_total_descuento_porprod .'</td>';
            }
            $htmlprds .= '</tr>';
            $totCantidad += $pdd->cantidad;
            $totPrecioTotal += $pdd->precio_total;
        }
        $htmlprds .= '</tbody>';
        $htmlprds .= '<tfoot>';
        $htmlprds .= '<tr>';
        $htmlprds .= '<td class="esnmbrbldd bordersup">Totales</td>';
        $htmlprds .= '<td class="bordersup"></td>';
        $htmlprds .= '<td class="esnumber esnmbrbldd bordersup">'. $totCantidad .'</td>';
        $htmlprds .= '<td class="bordersup"></td>';
        $htmlprds .= '<td class="esnumber esnmbrbldd bordersup">'. $totPrecioTotal .'</td>';
        $htmlprds .= '</tr>';
        $htmlprds .= '</tfoot>';
        $htmlprds .= '</table>';

        // traer datos de cliente
        $user = User::where('id', '=', $idcli)->firstOrFail();


        $html = '<!DOCTYPE html>';
        $html .= '<html>';
        $html .= '<head>';
        $html .= '<meta charset="utf-8" />';
        $html .= '<style>';
        $html .= ' table { border-collapse: collapse; width: 100%; } ';
        $html .= ' table, td, th { border: 1px solid #ddd; text-align: left; } ';
        $html .= ' th, td { padding: 15px; } ';
        $html .= ' thead, .esnmbrbldd { font-weight: bold; } ';
        $html .= ' .esnumber { text-align: right !important; } ';
        $html .= ' .borderinf { border-bottom: 2px solid black; } ';
        $html .= ' .bordersup { border-top: 2px solid black; } ';
        $html .= ' .textoderecha { text-align: right; font-size: 12px; } ';
        $html .= '</style>';
        $html .= '</head>';
        $html .= '<body>';
        $html .= '<h1>Detalle de pedido No. ' . $numero_pedido . '</h1>';
        $html .= '<br>';
        $html .= '<h3>Cliente: ' . $user->nombre_completo . '</h3>';
        $html .= '<h3>Fecha: ' . $user->created_at->format('d/m/Y g:ia') . '</h3>';
        $html .= $htmlprds;
        $html .= '<p class="textoderecha">Emitido el '. now()->format('d/m/Y g:ia') .'</p>';
        $html .= '</body>';
        $html .= '</html>';
        
        
        $pdf = PDF::loadHTML($html);
        return $pdf->stream();
    }
}

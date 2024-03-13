/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package org.utl.dsm.Controller;

public class ControllerConversor {

    public double convertirMoneda(double divisaConvertida, double divisaAConvertir, double importe) {
        double resultado=-1;
        if (importe > 0) {
            resultado = (importe / divisaConvertida) * divisaAConvertir;
        }
        return resultado;
    }
    
    public static double verificarEntrada(String importe) {
        double result= -1.0;
        try {
            result = Double.parseDouble(importe);
        }catch(Exception e) {
            System.out.println("ERROR DE VALOR");
        }
        return result;
    }
}

/* 
 Carlos Padilla Torres DSM406
 Miércoles 20 de septiembre 2023
 */

// Debemos definir una variable en la que almacenes la ruta del servidor.
    window.onload = cargarValores();
function cargarValores() {
    ruta = "https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF46407,SF46406,SF46410,SF60632,SF43718/datos/oportuno?token=523dab6a5a810672ef4e88cf2ed7c9d88644b7f5207cb64769984f9e989f4985";

    fetch(ruta).then(function (data) {
        return data.json();
    }).then(function (json) {
        let series=json.bmx.series;
        let divisa=[];
        for (var i = 0; i < series.length; i++)  {
		  let serie=series[i];
                  console.log(serie);
        	  divisa[i]=serie.datos[0].dato;
                  
        }
        
        // let valorCAD = json.bmx.series[1].datos[json.bmx.series[1].datos.length - 1].dato;
        console.log(json.bmx.series);
        // console.log("Dólar Canadiense "+valorCAD);
        console.log("Libra: "+divisa[0]);
        console.log("Yen: "+divisa[1]);
        console.log("Euro: "+divisa[2]);
        console.log("Dólar: "+divisa[3]);
        console.log("Dólar Cad: "+divisa[4]);
        
        document.getElementById("divisaUno").innerHTML=`
                            <option value=1>Dolar</option>
                            <option value=0.94>Euro</option>
                            <option value=0.82>Libra</option>
                            <option value=148.28>Yen</option>
                            <option value=13.0787>Dólar Canadiense</option>
                            <option value=${divisa[0]}>Peso Mexicano</option>`;
    
    document.getElementById("divisaDos").innerHTML=`
                            <option value=1>Dolar</option>
                            <option value=0.94>Euro</option>
                            <option value=0.82>Libra</option>
                            <option value=148.28>Yen</option>
                            <option value=13.0787>Dólar Canadiense</option>
                            <option value=${divisa[0]}>Peso Mexicano</option>`;
        });
    }                 
        function convertir() {                    
                            
         // Se hace conversión
         let divisaConvertida = document.getElementById("divisaUno").value;
         let divisaAConvertir = document.getElementById("divisaDos").value;
         let importe = document.getElementById("inputImporte").value;
         let resultado = (importe / divisaConvertida) * divisaAConvertir;
        
        document.getElementById("txtResultadoConversion").innerHTML = resultado;
        
    }
/*
// Encuentra el elemento option que deseas cambiar por su id    
        let mxn = document.getElementsByClassName("idMXN");
// Cambia el valor del option
        mxn.setAttribute("value",valorMXN);
        
        // Se hace conversión
         let divisaConvertida = document.getElementById("divisaUno").value;
         let divisaAConvertir = document.getElementById("divisaDos").value;
         let importe = document.getElementById("inputImporte").value;
         let resultado = (importe / divisaConvertida) * divisaAConvertir;
        
        document.getElementById("txtResultadoConversion").innerHTML = resultado;

    });
}
*/

// token:523dab6a5a810672ef4e88cf2ed7c9d88644b7f5207cb64769984f9e989f4985
'use strict'

//estadistica

//capturando id por  medio de una funcion--------------------------------------------------
	function contenido(id){
		return document.getElementById(id);
	}

//sacando media---------------------------------------------------------------------------
	window.onload = function calcular(){

//CALCULANDO LA MEDIA
		var numerosArray = [];
		var acu=0;
		var tamaño = parseInt(prompt("¿Cuantos datos ingresara?"));

		for(var s=0;s<=tamaño;s++){
			numerosArray.push(parseInt(prompt("Ingrese numero..." + "dato: " + s)));
		}
		
		for(var z=0; z<=tamaño; z++){
			 acu += numerosArray[z];
		}
		
		var total = acu/tamaño;
		contenido("prom").value=total.toFixed(1);

//CALCULANDO LA MEDIANA
		numerosArray.sort(function (a, b){
    	return a - b;
		});
		/*var mitadtotal=(tamaño/2)-1;*/
		var mitadtotal=tamaño/2;
		if(mitadtotal == 0){
			contenido("prom2").value=numerosArray[mitadtotal];
			//para la moda
			contenido("prom3").value=numerosArray[mitadtotal];
		}else{
			var redondeo=Math.round(mitadtotal);
			/*var suma = (numerosArray[redondeo] + numerosArray[redondeo+1])/2;*/
			
			var suma = (numerosArray[redondeo] + numerosArray[redondeo+1])/2;
			/*var redondeo2=Math.round(suma);*/
		/*contenido("prom2").value=redondeo2;*/
		contenido("prom2").value=suma;

		//para la moda
		var posicion1 = numerosArray[redondeo]
		var posicion2 = numerosArray[redondeo+1];
		contenido("prom3").value=posicion1 +" y "+ posicion2;
		}


//CALCULANDO LA MODA

//CALCULANDO LA VARIANZA

		var varianza2 = 0;
		var sumatoria = 0;

		for (var i=1; i<=tamaño; i++){
		sumatoria = Math.pow(numerosArray[i] - total,2);
		varianza2 = varianza2 + sumatoria;
		}
		/*var tam = tamaño - 1;*/
		varianza2 = varianza2 / tamaño;
		//contenido("prom4").innerHTML = varianza;
		contenido("prom4").value=varianza2.toFixed(2);
		console.log(varianza2);

//CALCULANDO LA DESVIACION

var desviacion = Math.sqrt(varianza2);

//contenido("prom5").innerHTML = redondeo;
contenido("prom5").value=desviacion.toFixed(2);
console.log(desviacion);
console.log(sumatoria);
console.log(varianza2);

	}

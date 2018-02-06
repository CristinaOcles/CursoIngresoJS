/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
{
var precio1;
var precio2;
var precio3;
var resultado;
var iva;


precio1 = document.getElementById('PrecioUno').value;
precio2 = document.getElementById('PrecioDos').value;
precio3 = document.getElementById('PrecioTres').value;


function Sumar () 
{
	resultado = precio1 + precio2 + precio3;
	alert("La suma de los precios es de: " + resultado);
}
function Promedio () 
{
	resultado = (precio1 + precio2 + precio3) / 3;
	alert("el promedio de los precios es: " + resultado);
}
function PrecioFinal () 
{
		
}
}
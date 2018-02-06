/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

	
function sumar()
{	
	var numero1;
	var numero2;
	var suma; 

	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;	
	numero1 = parseInt(1, 10);
	numero2 = parseInt(2, 10);

	suma = numero1 + numero2;
	alert("La suma es " + suma);
}

function restar()
{
	var numero1;
	var numero2;
	var resta;

	numero1 = parseInt(1, 10);
	numero2 = parseInt(2, 10);
	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;

	resta = numero1 - numero2;
	alert("La resta es " + resta);
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var multiplicar;

	numero1 = parseInt(1, 10);
	numero2 = parseInt(2, 10);
	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;

	multiplica = numero1 * numero2;
	alert("la multiplicacion es " + multiplica);


}

function dividir()
{
	var numero1;
	var numero2;
	var dividir;

	numero1 = parseInt(1, 10);
	numero2 = parseInt(2, 10);
	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;

	divide = numero1/numero2;
	alert("La division es " + divide);

}


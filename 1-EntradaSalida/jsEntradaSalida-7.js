/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
	var numero1;
	var numero2;
	var suma; 
	var resta;
	var multiplicar;
	var dividir;

function sumar()
{	
	
	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;	
	numero1 = parseInt(numero1, 10);
	numero2 = parseInt(numero2, 10);

	suma = numero1 + numero2;
	alert("La suma es " + suma);
}

function restar()
{


	numero1 = parseInt(numero1, 10);
	numero2 = parseInt(numero2, 10);
	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;

	resta = numero1 - numero2;
	alert("La resta es " + resta);
}

function multiplicar()
{ 
	
	

	numero1 = parseInt(numero1, 10);
	numero2 = parseInt(numero2, 10);
	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;

	multiplica = numero1 * numero2;
	alert("la multiplicacion es " + multiplica);


}

function dividir()
{
	

	numero1 = parseInt(numero1, 10);
	numero2 = parseInt(numero2, 10);
	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;

	divide = numero1/numero2;
	alert("La division es " + divide);

}


/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	// alert("anda");
	// toda linea de instruccion termina con punto y coma (;)

	var nombre;
	
	/*
	alert ("nombre");
	alert (nombre);
	nombre = "Cris";
	alert (nombre);
    */

    nombre = prompt("ingrese su nombre","Natalia natalia");
    alert ( "su nombre es: " + nombre);
	//Solo se pone var la primera vez que la utilizas
	//var person = prompt("Please enter your name", "Harry Potter");
	//prompt siempre hay que poner un igual con una variable anterior



}


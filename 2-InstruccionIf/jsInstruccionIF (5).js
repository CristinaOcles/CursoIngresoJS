function Mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById('edad').value;
	if(!(edad>12 && edad<18))
	{
	alert("No es adolescente");
}

//tomar la negacion del if

//las dos maneras son correctas


/*
	edad = document.getElementById('edad').value;
	if(edad>12 && edad<18)
	{
	
	}
	else
	{
		alert("No es adolescente");
	}
*/
}//FIN DE LA FUNCIÓN
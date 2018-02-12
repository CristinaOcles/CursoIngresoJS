function Mostrar()
{
//tomo la edad  
	var edad;

		edad = document.getElementById('edad').value;
		estadoCivil= document.getElementById('estadoCivil').value;
		
		if(edad<18 && (estadoCivil!="Soltero")){
			alert("es demasiado pequeño para NO ser soltero");

		}


}//FIN DE LA FUNCIÓN
function Mostrar()
{
//tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;
		

if(edad<13){
	alert("niño");
}else{
	if (edad>18)
	{
		alert("mayor")
	}else{
		alert("adolescente");
	}
}




/*

if(edad<18 && edad>12)
	{
		alert("es adolescente")
	}
	else{
		if(edad<13)
			{
				alert("Es un niño");
			}else{
				alert("es un adulto");
			}
	
	}
	

*/
}//FIN DE LA FUNCIÓN
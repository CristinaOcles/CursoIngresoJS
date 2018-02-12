function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notas;

	notas = Math.round(Math.random() * 10);


		if(notas<4){
			alert("tu nota es: "+ notas + " vamos, la proxima se puede");
		}else{
			if (notas>3 && notas<9)
			{
				alert("aprobó con un " + notas);
			}else{
				alert("Excelente, tu nota es: " + notas);
			}
		}



}//FIN DE LA FUNCIÓN
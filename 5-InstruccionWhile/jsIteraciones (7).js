function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';


	while(respuesta == "si")
	{
		
		numero = prompt ("ingrese numero");

		contador++;

		numero = parseInt(numero);

		acumulador= acumulador+numero;

		respuesta= prompt("Quiere ingresar otro numero?");
		

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
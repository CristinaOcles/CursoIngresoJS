function Mostrar()
{

	var ventas;
	var acumulador=0;
	var contador;
	var mayorImporte=0;
	var menorImporte=0;

	for(contador=0; contador<4; contador++)
	{
		
		ventas = prompt("Ingrese venta del dia");
		ventas = parseInt(ventas);

		while(ventas<1)
		{
			ventas= prompt("El monto ingresado no es correcto, vuelva a ingresarlo");
			ventas = parseInt(ventas);
		}//while(ventas<1)

		
		acumulador = acumulador + ventas;



		if(contador==0)
		{
			menorImporte=ventas;
			mayorImporte=ventas;
		}
		else{

			if(ventas>mayorImporte)
			{
				mayorImporte=ventas;
			}
			if(ventas<mayorImporte)
			{
				menorImporte=ventas;
			}
		}



	}//for(contador=0; contador<24; contador++)


		document.write("las ventas acumuladas suman un total de: " + acumulador);
		document.write("<br>El importe más chico ingresado es: " + menorImporte);
		document.write("<br>el importe más grande ingresado es: "+ mayorImporte);


}

function Mostrar()
{

	var numero1=1;
	var numero2=1;
	var resultado;

	numero1 = prompt("ingresa un numero");
	numero2 = prompt("ingresa otro numero");
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);


	if (numero1 == numero2)
	{
		resultado = numero1 * numero2;
		

	}else
	{
		if(numero1>numero2)
		{
			resultado = numero1-numero2;
		}else
		{
			resultado = numero1+numero2;
		}
	}

	document.write("el resultado es: " + resultado);

}



/*  numero1 = promt("ingresa un numero");
	numero2 = promt("ingresa otro numero");*/
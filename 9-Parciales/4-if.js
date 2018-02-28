//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{

		var numero1;
		var numero2;
		var multiplicacion;
		var resta;


		numero1 = prompt ("Ingrese un numero");
		numero2 = prompt ("ingrese otro numero");
		

		if(numero1 == numero2)
		{
			alert(numero1+numero2);
		}

		numero1=parseInt(numero1);
		numero2=parseInt(numero2);

		if(numero1>numero2)
		{
			multiplicacion= numero1*numero2
			alert(multiplicacion);
			if(multiplicacion%2==0)
			{
				alert(multiplicacion + " es par");
			}
		}
		else
		{
			resta= numero1 - numero2
			alert(resta);
		}







}


/*
se ingresan 2 numeros, si son iguales se concatenan, 
si el primero es mayor que el segunmdo se multiplican,
si el segundo es más grande se restan, si la multiplicacion da un numero par, 
ademas de mostrar el resultado
se muestra el mensaje "es par"


testeo 4 4= 44
3 2 = 6 "es par"
5 3 =15
3 6=-3
3 5=-2
10 8 =2 (es par)




*/
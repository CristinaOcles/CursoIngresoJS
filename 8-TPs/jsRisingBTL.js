/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	 
	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var numLegajo;
	var nacionalidad;
	var respuesta= "s";

	
	
		edad = prompt ("Ingrese edad ");
		edad = parseInt(edad);



		while(edad<18 || edad>90 || isNaN(edad))
		{
			alert ("Edad ingresada incorrecta");

			edad = prompt ("Ingrese edad ");
			edad = parseInt(edad);
		}//while(edad<18 || edad>90)

	




		sexo = prompt("Ingrese sexo (f/m)");

		while (sexo != "f" && sexo != "m");
		{
			alert ("sexo incorrecto, ingreselo nuevamente");
			sexo = prompt("Ingrese sexo (f/m)");
		}

	




		estadoCivil = prompt("Ingrese estado civil: 1-soltero / 2-casado / 3-divorciados / 4-viudos");

			switch(estadoCivil)
		{
			case 1: estadoCivil= "soltero";
				break;
			case 2: estadoCivil= "casado";
				break;
			case 3: estadoCivil= "divorciados"
				break;
			case 4: estadoCivil= "viudos"
				break;
		}	
		while(estadoCivil<1 || estadoCivil>4 || isNaN(estadoCivil))
		{
			alert("Estado civil incorrecto");
			estadoCivil = prompt("Ingrese estado civil: 1-soltero / 2-casado / 3-divorciados / 4-viudos");

		}
		


		sueldoBruto = prompt ("ingrese sueldo bruto, no menor a 8000");
		sueldoBruto= parseInt(sueldoBruto);

		while(sueldoBruto<8000 || isNaN(sueldoBruto))
		{
			alert("Sueldo bruto ingresado incorrecto");
			sueldoBruto = prompt ("ingrese sueldo bruto, no menor a 8000");

		}

		numLegajo =prompt("Ingrese un legajo numero de 4 cifras que no comience con 0");
		numLegajo=parseInt(numLegajo);

		while(numLegajo<1000 || numLegajo>9999 || isNaN(numLegajo))
		{
			alert("numero de legajo incorrecto");
			numLegajo =prompt("Ingrese un legajo numero de 4 cifras que no comience con 0");
		    numLegajo=parseInt(numLegajo);

		}

		nacionalidad=prompt("ingrese una nacionalidad: 'A'= Argentinos / 'E' = extranjeros / 'N' = Nacionalizados");

		while (nacionalidad != "A" || nacionalidad != "E" || nacionalidad != "N" || !isNaN)
		{
			alert("Nacionalidad ingresada incorrecta");
			nacionalidad=prompt("ingrese una nacionalidad: 'A'= Argentinos / 'E' = extranjeros / 'N' = Nacionalizados");
		}






	document.getElementById('Edad').value= edad;

	document.getElementById('Sexo').value= sexo;

	document.getElementById('EstadoCivil').value= estadoCivil;

	document.getElementById('Sueldo').value= sueldoBruto;

	document.getElementById('Legajo').value= numLegajo;

	document.getElementById('Nacionalidad').value= nacionalidad;






}

function Mostrar()
{
	var nombre;
	var notas;
	var sexo;
	var promedio;
	var notaBaja;
	var varones;
	var contador;


	for(contador=0; contador<99; contador++);
	{
		notas = prompt ("ingrese la nota del alumno");
		notas=parseInt(notas);

		while (notas<0 || notas>10)
		{
			alert("Nota ingresada incorrecta");
			notas = prompt ("ingrese la nota del alumno");
			notas=parseInt(notas);

		}

		sexo= prompt("Ingrese el sexo del alumno (f/m)");

		while(sexo!="f" || sexo!="m" || !isNan)
		{
			sexo= prompt("Sexo incorrecto, vuelva a ingresarlo(f/m)");	
		}


		promedio = promedio + notas;








	}//for(contador=0; contador<99; contador++);







}

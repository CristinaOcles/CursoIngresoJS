function Mostrar()
{
	var dia;

	dia = prompt ("Ingresa un dia de la semana: ");

	switch(dia)
	{
		case "Sabado":
		case "domingo":
			alert("es fin de semana");
			break;

		default:
			alert("a trabajar!");
			break;
	}
}

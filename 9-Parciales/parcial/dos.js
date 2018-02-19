function Mostrar()
{
	  var importe;
	  var importeFinal;

	  importe = promt("Ingresa importe de producto: ");
	  importeFinal = (importe * 0.21) + importe;


	  document.getElementById('importeFinal').value= importeFinal;


}



function Mostrar()
{
	  var importe;
	  var importeFinal;

	  importe = prompt("Ingresa importe de producto");
	  importe = parseInt(importe);
	  importeFinal = (importe * 0.21) + importe;


	  document.getElementById('importeFinal').value= importeFinal;


}



function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo!="f" && sexo!="m")
{
	alert("dato no valido, vuelva a ingresar");

	sexo = prompt("ingrese f ó m .");

}

document.getElementById('Sexo').value=sexo;


}//FIN DE LA FUNCIÓN

//Aquí se ingresa el nombre
		var miNombre;
		miNombre = prompt("Ingresa tu nombre y apellidos");

		//Aquí se ingresa la edad
		var miEdad;
		miEdad = prompt("Indica tu edad");

		//Aquí se ingresan los días de la semana
		var diasSemanaArray;
		diasSemanaArray = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
		diasSemanaArray = prompt("Indica el día de la semana");

		//Aquí se ingresa el valor de la gravedad en la Tierra
		var gravedadTierra;
		gravedadTierra = prompt("Indica el valor de la gravedad");

		//Aquí se ingresan los tres primeros números impares
		var imparesArray;
		imparesArray = [1,2,5];
		imparesArray = prompt("Indica los tres primeros números impares")


		document.write(miNombre + " " + miEdad + " " + diasSemanaArray + " " + gravedadTierra + " " + imparesArray);

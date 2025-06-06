//funciones.js

function saludo(){
	document.write("\
		<h1>Ejemplo de saludos</h1>\
			<ol>\
				<li>hola</li>\
				<li>¿qué hay?</li>\
				<li>whats up?</li>\
			</ol>");
}

function crearArrayTradicional(){
	let primos = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];

	const divArregloTradicional = document.getElementById("divArrayIndice");
	//innerHTML, innerText, textContent
	divArregloTradicional.innerText= "<hr>    <strong>   Arreglo          de   primos = 		</strong>" + primos + "<hr>";
}


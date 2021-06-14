function somar() {
	var n1 = Number(document.getElementById('n1').value); 
	var n2 = Number(document.getElementById('n2').value); 

	resultado.value = n1 + n2;
}

function subtrair() {
	var n1 = Number(document.getElementById('n1').value); 
	var n2 = Number(document.getElementById('n2').value); 

	resultado.value = n1 - n2;
}

function multiplicar() {
	var n1 = Number(document.getElementById('n1').value); 
	var n2 = Number(document.getElementById('n2').value); 

	resultado.value = n1 * n2;
}

function dividir() {
	var n1 = Number(document.getElementById('n1').value); 
	var n2 = Number(document.getElementById('n2').value); 

	resultado.value = n1 / n2;
}

function calcularDelta() {
	var A = Number(document.getElementById('A').value);
	var B = Number(document.getElementById('B').value);
	var C = Number(document.getElementById('C').value);

	var delta = Math.pow(B, 2) - 4 * A * C;

	document.getElementById('resultado').value = delta;
}

function calcularComprimento() {
	var raio = Number(document.getElementById('raio').value); // entrada

	// C = 2 * PI * raio
	var C = 2 * Math.PI * raio; // processamento
	C = C.toFixed(2);

	document.getElementById('C').value = C; // saída
}

function calcularArea() {
	var raio = Number(document.getElementById('raio').value); 

	// A = PI * raio2
	var A = Math.PI * Math.pow(raio, 2); 
	A = A.toFixed(2);

	document.getElementById('A').value = A; 
}

function calcularVolume() {
	var raio = Number(document.getElementById('raio').value); 

	// V = 3/4 * PI * raio3
	var V = 3/4 * Math.PI * Math.pow(raio, 3); 
	V = V.toFixed(2);

	document.getElementById('V').value = V; 
}

function escolherCalculadora() {
	if (document.getElementById('delta').checked == true)
		//window.location.replace('calcdelta.html');
		window.open('calcdelta.html');
	else if (document.getElementById('esfera').checked == true)
		//window.location.replace('calcesfera.html');
		window.open('calcesfera.html');
	else
		window.alert('É necessário selecionar uma das opções!');
}
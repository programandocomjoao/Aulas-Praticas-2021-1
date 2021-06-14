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
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

function calcularResto() {
	var n1 = Number(document.getElementById('n1').value); 
	var n2 = Number(document.getElementById('n2').value); 

	resultado.value = n1 % n2;
}
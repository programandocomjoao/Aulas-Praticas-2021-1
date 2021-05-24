function somar() {
	var num1 = Number(document.getElementById('n1').value);
	var num2 = Number(document.getElementById('n2').value);

	document.getElementById('resultado').value = num1 + num2;
}

function subtrair() {
	var num1 = Number(document.getElementById('n1').value);
	var num2 = Number(document.getElementById('n2').value);

	document.getElementById('resultado').value = num1 - num2;
}

function multiplicar() {
	var num1 = Number(document.getElementById('n1').value);
	var num2 = Number(document.getElementById('n2').value);

	document.getElementById('resultado').value = num1 * num2;
}

function dividir() {
	var num1 = Number(document.getElementById('n1').value);
	var num2 = Number(document.getElementById('n2').value);

	document.getElementById('resultado').value = num1 / num2;
}
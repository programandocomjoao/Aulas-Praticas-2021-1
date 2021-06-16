function mudarFundo() {
	var cor = document.getElementById('fundo').value;
	document.getElementById('corpo').style.backgroundColor = cor;
}

function mudarCor() {
	var cor = document.getElementById('cor').value;
  var paragrafos = document.getElementsByClassName('paragrafo');
  var i;

  for (i = 0; i < paragrafos.length; i++)
  	paragrafos[i].style.color = cor;
}

function mudarFonte() {
	var fonte = document.getElementById('fonte').options[document.getElementById('fonte').selectedIndex].value;
	var paragrafos = document.getElementsByClassName('paragrafo');
  var i;

  for (i = 0; i < paragrafos.length; i++)
  	paragrafos[i].style.fontFamily = fonte;
}

var tamanho = 11;

function aumentar() {
	var paragrafos = document.getElementsByClassName('paragrafo');
  var i;

  tamanho++;
  document.getElementById('tamanho').value = tamanho;

  for (i = 0; i < paragrafos.length; i++)
  	paragrafos[i].style.fontSize = tamanho + 'pt';
}

function diminuir() {
	var paragrafos = document.getElementsByClassName('paragrafo');
  var i;

  tamanho--;
  document.getElementById('tamanho').value = tamanho;

  for (i = 0; i < paragrafos.length; i++)
  	paragrafos[i].style.fontSize = tamanho + 'pt';
}
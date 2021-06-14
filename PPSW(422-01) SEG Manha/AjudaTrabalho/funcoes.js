function mudaCorFundo(cor) {
	document.getElementById('pagina').style.backgroundColor=cor;
}

function mudaCorFundoTexto(cor) {
	document.getElementById('caixa').style.backgroundColor=cor;
}

function mudaCorTitulo(cor) {
	var tit = document.getElementsByClassName('titulo');

	for (i = 0; i < tit.length; i++) {
		tit[i].style.color=cor;
	}
}

function mudaCorSubTitulo(cor) {
	var sub = document.getElementsByClassName('subTitulo');

	for (i = 0; i < sub.length; i++) {
		sub[i].style.color=cor;
	}
}

function mudaCorParagrafo(cor) {
	var par = document.getElementsByClassName('paragrafo');

	for (i = 0; i < par.length; i++) {
		par[i].style.color=cor;
	}
}

function mudaCorLink(cor) {
	var link = document.getElementsByClassName('link');

	for (i = 0; i < link.length; i++) {
		link[i].style.color=cor;
	}
}

function alterarFonte() {
	var fonte = document.getElementById('fonteParagrafo').options[document.getElementById('fonteParagrafo').selectedIndex].value;

	document.getElementById('caixa').style.fontFamily = fonte;
}

var tamanho = 10;

function aumentarFonte() {
	var par = document.getElementsByClassName('paragrafo');
  tamanho++;

	for (i = 0; i < par.length; i++) {
		par[i].style.fontSize = tamanho + 'pt';
	}
}
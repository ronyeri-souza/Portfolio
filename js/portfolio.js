//FUNÇÃO PARA ANIMAR O TEXTO


  (function(){
function typeWriter(elemento){
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = "";
	textoArray.forEach((letra, i) => {
		setTimeout(() => elemento.innerHTML += letra, 120 * i);
	});
}
const titulo = document.querySelector('#apresentar');
typeWriter(titulo);
}());




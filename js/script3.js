const numero = Number(prompt('Digite um número:'));
//let numero = 55;

const numeroTitulo = document.getElementById('numero-titulo');
const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('inteiro');
const enumero = document.getElementById('enumero');
const baixo = document.getElementById('baixo');
const cima = document.getElementById('cima');
const decimal = document.getElementById('decimal');

numeroTitulo.innerHTML = numero;
raiz.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}.</p>`;
inteiro.innerHTML = `<p>${numero} é inteiro? ${Number.isInteger(numero)}.</p>`;
enumero.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
baixo.innerHTML = `<p>Arredondado para cima: ${Math.ceil(numero)}.</p>`;
cima.innerHTML = `<p>Arredondado para baixo: ${Math.floor(numero)}.</p>`;
decimal.innerHTML = `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;

/*const texto = document.getElementById('texto');

texto.innerHTML = '';
texto.innerHTML +=
   numero.innerHTML + 
   quadrada.innerHTML +
   inteiro.innerHTML + 
   nan.innerHTML +
   cima.innerHTML + 
   baixo.innerHTML +
   decimal.innerHTML;*/
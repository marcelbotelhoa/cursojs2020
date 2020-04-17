
const form = document.querySelector('.formulario');
const resultado = document.querySelector('.resultado');

function recebeEventoForm(evento) {
    evento.preventDefault();

    //const peso = 70;
    //const altura = 1.88;
    //let result = peso / (altura * altura);

    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')
    let result = peso.value / (altura.value * altura.value);

    let mostrar;


    if (result <= 18.5) {
        mostrar = '(Abaixo do peso)'
    } else if (result >= 18.5 && result <= 24.9) {
        mostrar = '(Peso normal)'
    } else if (result >= 25 && result <= 29.9) {
        mostrar = '(Sobrepeso)'
    } else if (result >= 30 && result <= 34.9) {
        mostrar = '(Obesidade Nivel 1)'
    } else if (result >= 35 && result <= 39.9) {
        mostrar = '(Obesidade Nivel 2)'
    } else if (result >= 40) {
        mostrar = '(Obesidade Nivel 3)'
    } else {
        (result === 0)
        mostrar = '(indefinido)'
    }

    let resultados = `Seu IMC é ${result.toFixed(2)} ${mostrar}`;

    resultado.innerHTML = resultados;

};
form.addEventListener('submit', recebeEventoForm);
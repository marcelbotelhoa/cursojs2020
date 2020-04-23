/*const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');*/

/*iniciar.addEventListener('click', function(event){
    alert('Cliquei no iniciar');
});

pausar.addEventListener('click', function(event){
    alert('Cliquei no pausar');
});

zerar.addEventListener('click', function(event){
    alert('Cliquei no zerar');
});*/

data = new Date('00:00:00')

function mostrarHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('eperando unstância de Date')
    }

    if (!data) {
        data = new Date();
    }

    return data
}

const hora = mostrarHora();
console.log(hora)



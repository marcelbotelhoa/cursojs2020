                     /*Relógio 1*/

function mostraHora(data) {
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
    }

    const timeZero = 10801000
    let contador = 0;
    let timer = 0;
    let estado = 'despausado';

    const relogio = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')

    iniciar.addEventListener('click', function(event) {
    if (timer == 0) {
        timer = setInterval(function() {
            if (contador == 0) contador = timeZero;
            let time = new Date(contador);
            console.log(mostraHora(time), contador, time);
            relogio.innerHTML = mostraHora(time);
            contador = contador + 1000;
        }, 1000)
    }
    })

    pausar.addEventListener('click', function(event) {
    if (contador != 0) {
        if (estado == 'despausado') {
            setTimeout(function() {
                clearInterval(timer);
                pausar.innerHTML = 'Continuar';
                estado = 'pausado';
                console.log(estado, contador);
            })
        } else {
            timer = setInterval(function() {
                estado = 'despausado';
                pausar.innerHTML = 'Pausar';
                let time = new Date(contador);
                relogio.innerHTML = mostraHora(time);
                contador = contador + 1000;
                console.log(estado, contador);
            }, 1000)
        }
    }
    })

    zerar.addEventListener('click', function(event) {
    if (contador != 0) {
        setTimeout(function() {
            clearInterval(timer);
            contador = 0;
            timer = 0;
            estado = 'despausado';
            pausar.innerHTML = 'Pausar';
            relogio.innerHTML = '00:00:00';
            console.log(estado, contador, timer);
        })
    }
})

                   /*Relógio 2*/

/* function relogio() {
const relogio = document.querySelector('.relogio')
let timer;
let segundos = 0;
let estado = 0;

function criaHora(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'UTC'
    })
}

function segundosHora() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHora(segundos);
        log();
    }, 1000)
}

function log() {
    return console.log(`
        Hora: ${criaHora(segundos)}, Segundos ${segundos}, Estado: ${estado}
    `);
}

document.addEventListener('click', function(event){
    const elemento = event.target;

    if (elemento.classList.contains('iniciar')) {
        if (segundos == 0) {
            relogio.classList.add('contando');
            clearInterval(timer);
            segundosHora();
        }
    }

    if (elemento.classList.contains('pausar')) {
        if (segundos != 0) {
            if (estado == 0) {
            relogio.classList.add('pausado');
            clearInterval(timer);
            elemento.innerHTML = 'Continuar';
            estado = 1;
            log();
            } else {
            relogio.classList.remove('pausado');
            segundosHora();
            elemento.innerHTML = 'Pausar';
            estado = 0;
            log();
            }
        }
    }

    if (elemento.classList.contains('zerar')) {
        if (segundos != 0) {
            relogio.classList.remove('pausado');
            relogio.classList.remove('contando');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            document.querySelector('.pausar').innerHTML = 'Pausar';
            segundos = 0;
            estado = 0;
            log();
        }
    }

})
}
relogio(); */
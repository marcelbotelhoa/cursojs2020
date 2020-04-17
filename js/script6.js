
/* Solução 1*/


// let data = new Date();
// const resultado = document.querySelector('.container')

// function zeroAEsquerda(num) {
//     return num <= 9 ? `0${num}` : num ;
// }

// function pegarWD() {
//     let WeekDText;
//     let weekD = data.getDay();

//     switch (weekD) {
//         case 0:
//             WeekDText = 'Domingo';
//             break
//         case 1:
//             WeekDText = 'Segunda-Feira';
//             break
//         case 2:
//             WeekDText = 'Terca-Feira';
//             break
//         case 3:
//             WeekDText = 'Quarta-Feira';
//             break
//         case 4:
//             WeekDText = 'Quinta-Feira';
//             break
//         case 5:
//             WeekDText = 'Sexta-Feira';
//             break
//         case 6:
//             WeekDText = 'Sábado';
//             break
//     }
//     return WeekDText;
// }

// let dia = data.getDate();

// function pegarMonthName() {
//     let month;
//     let monthName = data.getMonth();

//     switch (monthName) {
//         case 0:
//             month = 'Janeiro';
//             break
//         case 1:
//             month = 'Fevereiro';
//             break
//         case 2:
//             month = 'Março';
//             break
//         case 3:
//             month = 'Abril';
//             break
//         case 4:
//             month = 'Maio';
//             break
//         case 5:
//             month = 'Junho';
//             break
//         case 6:
//             month = 'Julho';
//             break
//         case 7:
//             month = 'Agosto';
//             break
//         case 8:
//             month = 'Setembro';
//             break
//         case 9:
//             month = 'Outubro';
//             break
//         case 10:
//             month = 'Novembro';
//             break
//         case 11:
//             month = 'Dezembro';
//             break
//     }
//     return month;
// }

// let ano = data.getFullYear();
// let horas = data.getHours();
// let minutos = zeroAEsquerda(data.getMinutes());
// let segundos = zeroAEsquerda(data.getSeconds());

// let dataCompleta = `${pegarWD()}, ` + dia + ` de ${pegarMonthName()} de ` + ano + ' ' + horas + ':' + minutos + ':' + segundos;

// resultado.innerHTML = dataCompleta;

/*Solução 2*/

const section = document.querySelector('.container')
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

section.innerHTML = data.toLocaleDateString('pt-BR', opcoes)








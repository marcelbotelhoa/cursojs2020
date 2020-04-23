                                        /*{Exercicio 1}*/

// Escreva uma função que recebe dois números e retorne o maior deles

/*Solução básica*/

function definirMaior(numb1, numb2) {
    const maior = (numb1 > numb2) ? numb1 : numb2
    return maior
}
//console.log(definirMaior(13, 25));

/*Solução slim*/

const definirMaior2 = (x, y) => x > y ? x : y;
//console.log(definirMaior2(100, 50));

                                        /*{Exercício 2}*/

//Escreva uma função que recebe um numero e retorne o seguinte:
//Número é divisível por 3 = Fizz
//Número é divisível por 5 = Buzz
//Número é divisível por 3 e 5 = FizzBuzz
//Número NÃO é divisível por 3 e 5 = Retorna o própio número
//Checar se o numero é realmente um número
//Use a função com números de 0 a 100

function AnalizarDivisao(numb) {
    let resultado1 = numb %3 === 0 ? "Fizz" : "";
    let resultado2 = numb %5 === 0 ? "Buzz" : "";
    let resultado3 = resultado1 == "" && resultado2 == "" ? numb : resultado1+resultado2

    return resultado3
}
console.log(AnalizarDivisao(4))

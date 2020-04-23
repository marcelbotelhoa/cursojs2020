const section = document.querySelector('.container')

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

let juntar = '';
for (let i = 0; i < elementos.length; i++) {
    juntar += `<${elementos[i].tag}> ${elementos[i].texto} </${elementos[i].tag}>`;
} 
section.innerHTML += `${juntar}`
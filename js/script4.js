function meuEscopo () {
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        /*const nome = 'Marcel';
        const sobrenome = 'Botelho';
        const peso = 78;
        const altura = 1.88;*/

        let juntar = {
            Nome: nome.value,
            Sobrenome: sobrenome.value,
            Peso: peso.value,
            Altura: altura.value
        };

        pessoas.push(juntar)
        
        let resultados = `<p>${nome.value},${sobrenome.value},${peso.value},${altura.value}</p>`;

        resultado.innerHTML += resultados;

        
        console.log(pessoas);

    };

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
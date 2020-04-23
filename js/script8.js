const paragrafos = document.querySelector('.paragrafos');
const allP = paragrafos.querySelectorAll('p'); 

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody);

for (let p of allP) {
    p.setAttribute('style', `background: ${backgroundColorBody}`);
}

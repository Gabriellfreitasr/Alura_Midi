function tocaSom (idElementoSom) {
    document.querySelector(idElementoSom).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

// Enquanto = While é uma estrutura de repetição, usada para diminuir a repetição de códigos.
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador ++;    

} 

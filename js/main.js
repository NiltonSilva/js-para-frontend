
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
/*
   document.querySelector('.tecla_pom').onclick = tocaSomPom;
    
   Se eu chamar a função com (), ou seja, tocaSomPom(), o som será tocado automaticamente, e isso ocasionará um erro. Do jeito que está agora o som fica guardado e será executado somente quando eu acionar o botão com o click do mouse.

*/

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < listaDeTeclas.length){

    let tecla = listaDeTeclas[contador];
    let instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    contador += 1;
}

function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
/*
   document.querySelector('.tecla_pom').onclick = tocaSomPom;
   Se eu chamar a função com (), ou seja, tocaSomPom(), o som será tocado automaticamente, e isso ocasionará um erro. Do jeito que está agora o som fica guardado e será executado somente quando eu acionar o botão com o click do mouse.
*/

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaDeTeclas.length; i++){
    let tecla = listaDeTeclas[i];
    let instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter'){
            tecla.classList.add('ativa');
            
        }
        console.log(evento)
    }
    
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}



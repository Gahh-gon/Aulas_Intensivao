const btnPlayPause = document.querySelector('#play-pause');
const audioCap =  document.querySelector('#audioCap');
const btnProximo = document.querySelector('#proximo');
const btnAnterior = document.querySelector('#anterior');
let capituloTag = document.querySelector('#capitulo');
const  numeroCapitulos = 10;
let capituloAtual = 1;
let taTocando = false;

function tocaFaixa(){
    audioCap.play();
    btnPlayPause.classList.remove('bi-play-fill');
    btnPlayPause.classList.add('bi-pause-fill');
}

function pausarFaixa(){
    audioCap.pause();
    btnPlayPause.classList.add('bi-play-fill')
    btnPlayPause.classList.remove('bi-pause-fill')
}
function tocarOuPausar (){
if(taTocando === false){

tocaFaixa();
taTocando = true;
 
}else{
    pausarFaixa();
    taTocando = false
}
}
function trocarNumeroFaixa(){
capituloTag.innerHTML = `Capítulo ${capituloAtual}`
}
 function proximaFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1
    }else{
        capituloAtual = capituloAtual + 1
    }
   
    
    audioCap.src = `./books/dom-casmurro/${capituloAtual}.mp3` 
    tocaFaixa()
    taTocando = true
    trocarNumeroFaixa()
    
 }

 function FaixaAlterior(){
    if(capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    }else{
        capituloAtual = capituloAtual - 1;
    }
   
    
    audioCap.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
    tocaFaixa();
    taTocando = true
    trocarNumeroFaixa()
    
 }
 
 
btnPlayPause.addEventListener('click',() => tocarOuPausar());
btnProximo.addEventListener('click',() => proximaFaixa());

btnAnterior.addEventListener('click',() => FaixaAlterior());
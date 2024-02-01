const inputClick = document.querySelectorAll('[name="opcao-imagem"]');
const imgVisualization = document.querySelector('#imagem-visualizacao');
const btnTamanho = document.querySelectorAll('[name="opcao-tamanho"]');
const btnCorImg = document.querySelectorAll('[name="opcao-cor"]');
const tituloTamanho = document.querySelector('#titulo-produto');
const tamanhoPrincipal = document.querySelector('#info-principal');
const tamanhoSegudario = document.querySelector('#info-secundaria');
const NomeCor = document.querySelector('#nome-cor-selecionada');
const miniatura0 = document.getElementById('0-imagem-miniatura')
const miniatura1 = document.getElementById('1-imagem-miniatura')
const miniatura2 = document.getElementById('2-imagem-miniatura')

const VerdeCipreste = {
    nome:'Verde-Cipreste',
    pasta:'imagens-verde-cipreste'
    };

const azulInverno = {
nome:'Azul-inverno',
pasta:'imagens-azul-inverno'
};

const meiaNoite = {
    nome:'Meia-noite',
    pasta:'imagens-meia-noite'
    };

    const estelar = {
        nome:'Estelar',
        pasta:'imagens-estelar'
        };

        const rosaClaro ={
            nome:'Rosa-claro',
            pasta:'imagens-rosa-claro'
        }

      const opcoesCores = [VerdeCipreste,azulInverno,meiaNoite,estelar,rosaClaro];
      const opcoesTamanho = ['41 mm',' 45 mm']

      let ImgSelecionada = 1;
      let tamanhoSelecionado = 1
      let corSelecionada =1

      function trocarImg(){
        const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
        ImgSelecionada = idOpcaoSelecionada.charAt(0);// pegar caracter
        imgVisualization.src =`./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${ImgSelecionada}.jpeg` 
       
    }
    function trocaTamanho(){
        const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id
        tamanhoSelecionado = idOpcaoSelecionada.charAt(0)
        tituloTamanho.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`

        if(opcoesTamanho[tamanhoSelecionado] === '41 mm'){
            imgVisualization.classList.add('caixa-pequena')
        }else{
            imgVisualization.classList.remove('caixa-pequena')
        }
        
    }
    function trocarCor(){
       const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id; 
       corSelecionada = idOpcaoSelecionada.charAt(0)
       imgVisualization.src =`./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${ImgSelecionada}.jpeg`
       tituloTamanho.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`
       NomeCor.textContent = `Cor - ${opcoesCores[corSelecionada].nome}`

        miniatura0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-0.jpeg`
        miniatura1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-1.jpeg`
        miniatura2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-2.jpeg`

    }
   

    for(let i = 0; i < inputClick.length; i++) {
        inputClick[i].addEventListener('click',trocarImg)
        
   }

   for (let i = 0 ; i < btnTamanho.length; i++ ){
    btnTamanho[i].addEventListener('click',trocaTamanho)
   }
   for (let i = 0 ; i < btnCorImg.length; i++ ){
    btnCorImg[i].addEventListener('click',trocarCor)
   }
    
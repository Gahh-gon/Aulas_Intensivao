import { useState } from 'react'
import imgHashtaurate from './assets/hashtaurante.webp'
import './App.css'
import { Navegacao } from './Navegacao'
import { ItemCardapio } from './ItemCardapio'
import { pratosPrincipais, sobremesas, bebidas } from './cardapio'



export function App() {
  const PaginasMenu = [pratosPrincipais,sobremesas,bebidas,]
  const [paginaSelecionada,atualizarPaginaSelecionada ] = useState(0);
  return (
    <>
        
       <img src={imgHashtaurate} alt="Imagem de um restaurante " className='capa' /> 
       <Navegacao atualizarPaginaSelecionada = {atualizarPaginaSelecionada}/>
        <div className='menu'>
         {PaginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>) 
}
        </div>
       

    </>
  )
}



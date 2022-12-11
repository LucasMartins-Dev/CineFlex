import axios from "axios"
import { useState , useEffect } from "react"
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sucesso from "./sucesso"
import Filme from "./filme"
import Sessao from "./sessao"
import Assento from "./assento"
import styled  from 'styled-components'

export default function App() {
  const[nome,setnome]=useState('')
  const[urlimg,seturlimg]=useState('')
  const[filmes,setfilmes]=useState(null)
  const[id,setid]=useState(null)
  
	useEffect(() => {
  const filme = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
  filme.then(promise =>{setfilmes(promise.data)})
}, []);
  console.log(filmes)
  console.log(nome)
  console.log(urlimg)
   

 
 

if( filmes !== null){
  return (
    <BrowserRouter>
    <Link to="/"><ContainerSuperior>CINEFLEX</ContainerSuperior></Link>
      <Routes>
        <Route path="/" element={
          <>
          <Titulo>Selecione o filme</Titulo>
          <Containerfilme>
           {filmes.map((film)=>
           <Filme setid={setid} setnome={setnome} seturlimg={seturlimg} key={film.id} film={film}/> 
           )}
           </Containerfilme>
           </>
          }/>
        <Route path={`/sessoes/${id}`} element={
          <>
        <Titulo>Selecione o horário</Titulo> 
        <Sessao id={id}/>
        <Baixo>
          <Contornoimg><img src={urlimg}/></Contornoimg>
          <h1>{nome}</h1>
        </Baixo>
        </>
        }/>
        <Route path={`/assentos/:idSessao`} element={<Assento/>}/>
        <Route path="/sucesso" element={<Sucesso/>}/>
      </Routes>
    </BrowserRouter>
  )
}
 
}
const Titulo = styled.div`
 font-family: 'Roboto';
 font-size: 24px;
 font-weight: 400;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 110px;
`
const Containerfilme = styled.div`
display: flex;
flex-wrap: wrap;


`
const ContainerSuperior = styled.div`

display: flex;
align-items: center;
justify-content: center;
background-color: #C3CFD9;
color:  #E8833A;
width: 100%;
height: 67px;
font-size: 34px;
font-weight: 400;
font-family: 'Roboto';
line-height: 40px;

`
const Baixo = styled.div`

display: flex;
align-items: center;
width: 375px;
height: 117px;
background-color: #DFE6ED;
position: fixed;
bottom: 0;

img{
 
  width: 48px ;
  height: 72px;
}

h1{
  font-size: 26px;
  font-weight: 400px;
  font-family: 'Roboto';

}

`
const Contornoimg = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: white;
width: 64px;
height: 89px;
margin:10px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
`
 
import axios from "axios"
import { useState , useEffect } from "react"
import styled from "styled-components";


export default function Sessao (props){
   

    const[sessao,setsessao]=useState([])
    useEffect(() => {
        const response = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${props.id}/showtimes`)
        response.then(promise =>{setsessao(promise.data.days)})
      }, []);
    console.log(sessao)

   return(
    <>
    {sessao.map((s)=>
    <>
        <Containerdia>{s.weekday} - {s.date}</Containerdia>
        <Containerhoras>
        {s.showtimes.map((a)=>
        <Containerhora>{a.name}</Containerhora>
        )}
        </Containerhoras>
        </>
        )}
     </>
   )
}


const Containerdia = styled.div`
display: flex;
font-size: 20px;
font-family: 'Roboto';
font-weight: 400;
margin: 22px

`
const Containerhora = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color:#E8833A;
width: 83px;
height: 43px;
margin: 8px;
border-radius: 3px;
;
`
const Containerhoras = styled.div`
display:flex;
margin: 14px;
`
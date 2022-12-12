import axios from "axios"
import { useState , useEffect } from "react"
import styled from "styled-components";
import Horario from "./horario";


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
    <div key={s.id}>
        <Containerdia data-test ="movie-day">{s.weekday} - {s.date}</Containerdia>
        <Containerhoras>
        {s.showtimes.map((a)=>
        <Horario sethora={props.sethora} key={a.id} setid={props.setidses}s={s} a={a}/>
        )}
        </Containerhoras>
        </div>
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

const Containerhoras = styled.div`
display:flex;
margin: 14px;
`
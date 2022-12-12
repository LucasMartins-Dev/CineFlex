import axios from "axios"
import { useState , useEffect } from "react"
import styled from "styled-components";

import { Link } from "react-router-dom";


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
    <div data-test ="movie-day" key={s.id}>
      
        <Containerdia >{s.weekday} - {s.date}</Containerdia>
        <Containerhoras >
        {s.showtimes.map((a)=>
         <Link key={a.id} to={`/assentos/${a.id}`}><Containerhora  data-test="showtime" onClick={()=>(props.setidses(a.id)) (props.sethora(a.name))}>{a.name}</Containerhora></Link> 
        
        )}
        </Containerhoras>
        </div>
        )}
     </>
   )
}

const Containerhora = styled.button`
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

const Containerdia = styled.div`

display: flex;
font-size: 20px;
font-family: 'Roboto';
font-weight: 400;
margin: 22px
`




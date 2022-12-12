import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Horario(props){
    function assentos(){
        props.setid(props.a.id)
        props.sethora(props.a.name)
      }

    return(
        <>
        
           <Link to={`/assentos/${props.a.id}`}><Containerhora  data-test="showtime" onClick={assentos}>{props.a.name}</Containerhora></Link> 
            
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
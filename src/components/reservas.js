import { useState , useEffect } from "react"
import styled  from 'styled-components'

export default function Reservas(props){

    function reservar(){
        if(props.ast.isAvailable=== true){
            let auxxx = parseFloat(props.ast.name)
            const auxx=[...props.nid,auxxx]
            props.setnid(auxx)
            const aux=[...props.reservado,props.ast.name]
            props.setreservado(aux)
        }
        else if(props.ast.isAvailable=== false){
            alert('Esse assento não está disponível')
        }
        props.atualiza()
    }

    return(
        <Containerassento tof={props.ast.isAvailable} reserva={props.reservado} namex={props.ast.name} data-test="seat" onClick={reservar}  style={props.reservado.includes(props.ast.name)?{backgroundColor:'#1AAE9E'}:props.ast.isAvailable == true ? {backgroundColor:'#C3CFD9'}:{backgroundColor:'#FBE192'}}>{props.ast.name}</Containerassento>
    )
}

const Containerassento = styled.button`
border: 1px solid ;
border-color: ${props => props.reserva.includes(props.namex)?'#0E7D71':props.tof == true ? '#808F9D':'#F7C52B'};
display: flex;
align-items: center;
justify-content: center;
margin: 3.5px;
width: 26px;
height: 26px;
border-radius: 12px;

`
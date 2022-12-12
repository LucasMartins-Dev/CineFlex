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
        <Containerassento data-test="seat" onClick={reservar}  style={props.reservado.includes(props.ast.name)?{backgroundColor:'#1AAE9E'}:props.ast.isAvailable == true ? {backgroundColor:'#C3CFD9'}:{backgroundColor:'#FBE192'}}>{props.ast.name}</Containerassento>
    )
}

const Containerassento = styled.button`
display: flex;
align-items: center;
justify-content: center;
margin: 3.5px;
width: 26px;
height: 26px;
border-radius: 12px;

`
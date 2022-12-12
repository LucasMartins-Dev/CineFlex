
import { useState , useEffect } from "react"
import axios from "axios"
import styled  from 'styled-components'
import Reservas from "./reservas"
import { Link } from "react-router-dom";

export default function Assento (props){
    const[reservado,setreservado]=useState([])
    props.setasreservado(reservado)
    const[lugares,setlugares]=useState([])
    const[nomec,setnomec]=useState('')
    props.setnomecc(nomec)
    const[cpf,setcpf]=useState('')
    props.setcpff(cpf)
    console.log(nomec)
    console.log(cpf)
    for(let i=0;i<reservado.length-1;i++){
        if(reservado[i]==reservado[reservado.length-1] && reservado.length>1){
            reservado.splice(i,1)
            reservado.splice(reservado.length-1,1)
        }
    }
    useEffect(() => {
        const response = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${props.idses}/seats`)
        response.then(promise =>{setlugares(promise.data.seats)
        props.setdia(promise.data.day)
        })
      }, []);
    

      function enviardados(){
        let envio = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",{
            ids: reservado,
            name: nomec,
            cpf: cpf
	})
	envio.then(respostaserver)
       
      }
    
      function respostaserver(response){
        console.log(response)
      }

    return(
        <>
        <Telaassento>
        {lugares.map((ast)=>
        <Reservas key={ast.id} reservado={reservado} setreservado={setreservado}ast={ast}/>
        )}
        </Telaassento>
        <Cores>
            <Verde>
            <h1></h1>
                <h2>Selecionado</h2>
            </Verde>
            <Cinza>
            <h1></h1>
                <h2>Disponível</h2>
            </Cinza>
            <Amarelo>
                <h1></h1>
                <h2>Indisponível</h2>
            </Amarelo>
        </Cores>
        <>
            <Inputs>
                <h1>Nome do comprador:</h1>
                <input data-test="client-name" onChange={event => setnomec(event.target.value)} placeholder="Digite seu nome..."></input>
            </Inputs>
            <Inputs>
                <h1>CPF do comprador:</h1>
                <input data-test="client-cpf" onChange={event => setcpf(event.target.value)} placeholder="Digite seu CPF..."></input>
            </Inputs>
        </>
            <Link to="/sucesso"><Reserva data-test="book-seat-btn" onClick={enviardados}><button>Reservar assento(s)</button></Reserva></Link>
        </>
    )
}

const Reserva = styled.div`
display: flex;
align-items: center;
justify-content: center;
button{
    font-size: 18px;
    font-weight: 400;
    font-family: 'Roboto';
    color: white;
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border: none;
    border-radius: 3px;
}

`
const Inputs = styled.div`
display: flex;
flex-direction: column;
margin: 20px;
font-size: 18px;
font-weight: 400;
font-family: 'Roboto';
h1{
    margin-bottom: 5px;
}
input{
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #D4D4D4;
    width: 327px;
    height: 51px;
}

`
const Telaassento = styled.div `
margin: 20px ;
display: flex;
flex-wrap: wrap;

`
const Cores = styled.div`
display: flex;
align-items: center;
justify-content: center;

`
const Verde = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h1{
    width: 26px;
height: 26px;
border-radius: 12px;
background-color: #1AAE9E;
margin:5px
}
margin:10px;
`
const Cinza = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h1{
    width: 26px;
height: 26px;
border-radius: 12px;
background-color: #C3CFD9;
margin:5px
}
margin:10px;
`
const Amarelo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h1{
    width: 26px;
height: 26px;
border-radius: 12px;
background-color: #FBE192;
margin:5px
}
margin:10px;
`
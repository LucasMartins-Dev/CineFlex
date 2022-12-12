import styled  from 'styled-components'
import { Link } from "react-router-dom";
export default function Sucesso (props){

    return(
        <Containersucesso>
            <Sucessotitulo> <h1>Pedido feito</h1><h1>com sucesso!</h1> </Sucessotitulo>
            <Itens data-test="movie-info">
                <h1>Filme e sessão</h1>
                <h2>{props.nome}</h2>
                <h2>{props.dia} {props.hora}</h2>
            </Itens>
            <Itens data-test="seats-info">
                <h1>Ingressos</h1>
                {props.asreservado.map((res)=>
                <h2 key={res}>Assento {res}</h2>
                )}
                
                
            </Itens>
            <Itens data-test="client-info">
                <h1>Comprador</h1>
                <h2>Nome:{props.nomec}</h2>
                <h2>CPF:{props.cpf}</h2>
            </Itens>
            <Containerbotao>
                <Link to="/"><button data-test="go-home-btn">Voltar para Home</button></Link>
            </Containerbotao>
        </Containersucesso>
    )
    
}

const Containerbotao = styled.div`
display: flex;
align-items: center;
justify-content: center;
button{
    font-size: 18px;
    font-family: 'Roboto';
    font-weight: 400;
    color: white;
    background-color: #E8833A;
    width: 225px;
    height: 42px;
    border-radius: 3px;
    border: none;
}
`

const Itens = styled.div`
margin: 28px;
h1{
    font-size: 24px;
    font-weight: 700;
    font-family: 'Roboto';
    margin-bottom: 5px ;
}

h2{
  font-size :22px ;
  font-weight: 400;
  font-family: 'Roboto';
  margin-bottom:2px;
}
`
const Containersucesso = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const Sucessotitulo = styled.div`
margin: 30px ;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-sizing: border-box;

 font-size: 24px;
 font-weight: 700;
 font-family: 'Roboto';
 line-height: 28px;
 color: #247A6B;
`
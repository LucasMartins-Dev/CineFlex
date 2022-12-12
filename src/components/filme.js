import styled  from 'styled-components'
import { Link } from "react-router-dom";

export default function Filme (props){

    if(props.filmes !== null ){


        function click(){
            props.setid(props.film.id)
            props.seturlimg(props.film.posterURL)
            props.setnome(props.film.title)
        }
       
      
    
return(
   
   
    <Filmetyle>
        <Link to = {`/sessoes/${props.film.id}`}><img data-test="movie" onClick={click} src={props.film.posterURL}/></Link>
    </Filmetyle>

)
    }
}


const Filmetyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 145px ;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    margin: 15px;
    border-radius:3px;

img{
    
    width: 129px ;
    height: 193px;
}
`
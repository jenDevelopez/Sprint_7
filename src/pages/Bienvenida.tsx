import InitialButton from "../components/InitialButton"
import { StyledWellcome, ContainerWellcome } from "../styles/StyledComponents"

export default function Bienvenida() {
  return (
    <ContainerWellcome>
        <StyledWellcome>
      <h1>
        Bienvenido/a
      </h1>
      <p>
        Ofrecemos diversos servicios web, para saber más clica!
      </p>
      <InitialButton content="Entrar" onClick={()=>{console.log('bienvenida')}}/>
    </StyledWellcome>
    </ContainerWellcome>
  
  )
}


import ButtonWellcome from '../components/Buttons/ButtonWellcome'
import '../styles/stylesWellcome.css'
export default function Wellcome() {
  return (
    <div className="container-wellcome">
        <div className="styled-wellcome">
      <h1>
        Bienvenido/a
      </h1>
      <p>
        Ofrecemos diversos servicios web, para saber más clica!
      </p>
      <ButtonWellcome content='Entrar'/>
    </div>
    </div>
  
  )
}

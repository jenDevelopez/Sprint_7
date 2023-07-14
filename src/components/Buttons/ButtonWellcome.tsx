import { ButtonWellcomeProps } from "../../types"
import '../../styles/styled-components.css'
export default function ButtonWellcome({content}:ButtonWellcomeProps) {
  return (
    <button className="btn-wellcome">
      {content}
    </button>
  )
}

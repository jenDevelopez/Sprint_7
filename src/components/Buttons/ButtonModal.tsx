import { ButtonProps } from "../../types"
import '../../styles/styled-components.css'

export default function ButtonModal({content, onClick}:ButtonProps) {
  return (
    <button className="styled-btn" onClick={onClick}>
      {content}
    </button>
  )
}
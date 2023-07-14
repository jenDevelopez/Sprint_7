import { ButtonWellcome } from "../styles/StyledComponents"
import { ButtonProps } from "../types"

export default function Button({content}:ButtonProps) {
  return (
    <ButtonWellcome href="/presupuesto">
      {content}
    </ButtonWellcome>
  )
}

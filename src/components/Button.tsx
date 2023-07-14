import { StyledButton } from "../styles/StyledComponents"
import { ButtonProps } from "../types"

export default function Button({content, onClick}:ButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      {content}
    </StyledButton>
  )
}

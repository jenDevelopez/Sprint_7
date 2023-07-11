import { StyledFilterButton } from "../styles/StyledComponents"

export default function FilterButton({content,onClick}) {
  return (
    <StyledFilterButton
      onClick={onClick}
    >
      {content}
    </StyledFilterButton>
  )
}

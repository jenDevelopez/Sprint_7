import { StyledDataBudget } from "../styles/StyledComponents"
import { DataBudgetProps } from "../types"
export default function DataBudget({children}:DataBudgetProps) {
  return (
    <StyledDataBudget>
      <ul>

      {children}
      </ul>
    </StyledDataBudget>
    
  )
}

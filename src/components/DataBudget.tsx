import { DataBudgetProps } from "../types"


export default function DataBudget({children}:DataBudgetProps) {
  return (
    <div className="styled-data-budget">
      {children}
    </div>
    
  )
}

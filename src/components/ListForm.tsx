import { ChangeEvent } from 'react'
import DataBudget from './DataBudget'
import Input from './Input'
import FilterButton from './Buttons/FilterButton'
import { useContext } from 'react'
import { BudgetContext } from '../contexts/BudgetContext'

export default function ListForm() {
  const{
    searchResults,arrayBudget,alphabeticalFilter,chronologicalFilter,resetFilter,handleSearch,setSearch,search
  } = useContext(BudgetContext)
  return (
    <DataBudget>
      <div className="div-search">
          <Input
            id="input-search"
            name=''
            type="search"
            // onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            onChange={(e :ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            valueInput={search}
            valueLabel=''

          />
          <button onClick={handleSearch} className="btn-search">
            <img className="btn-img" src="../../public/search.svg" alt="busqueda" />
          </button>
        </div>
        <div>
          <FilterButton content='Orden alfabético' onClick={alphabeticalFilter}/>
          <FilterButton content='Orden cronológico' onClick={chronologicalFilter}/>
          <FilterButton content="Restaurar filtros" onClick={resetFilter} />
        </div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Presupuesto</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((item,index) => (
              <tr key={`searchedBugdet-${index}`}>
                <td>
                  {item.budgetName}
                </td>
                <td>
                  {item.total}
                </td>
              </tr>
            ))}
            {arrayBudget.map((item,index) => (
              <tr key={`budget-${index}`}>
                <td>{item.budgetName}</td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </DataBudget>
  )
}

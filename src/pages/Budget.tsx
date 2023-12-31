import {
  DivApp,
  DivCheckboxContainer,
  DivTotal,
  StyledForm,
  StyledDivInput,
  StyledContainerInput,
  InputForm,
  ButtonSubmit,
} from "../styles/StyledComponents";
import FilterButton from "../components/FilterButton";
import { data, info, inputs } from "../data";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import Checkbox from "../components/Checkbox";
import Modal from "../components/Modal";
import Popup from "../components/Popup";
import DataBudget from "../components/DataBudget";
import { budgetsArray } from "../types";
import { render } from "react-dom";


export default function Budget() {
  const budgetsArray = [
    {
      day: 1,
      month: 3,
      year: 2023,
      clientName: "Pepito Grillo",
      budgetName: "Fiesta",
      services: ["uno", "dos"],
      pages: 3,
      languages: 2,
      total: 320,
    },
    {
      day: 2,
      month: 2,
      year: 2023,
      clientName: "Pinocho",
      budgetName: "Reunion",
      services: ["uno", "dos"],
      pages: 2,
      languages: 2,
      total: 500,
    },
    {
      day: 2,
      month: 10,
      year: 2018,
      clientName: "Alimentos S.A",
      budgetName: "Ecommerce",
      services: ["uno", "dos"],
      pages: 5,
      languages: 5,
      total: 1000,
    }
  ];
  
  const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState<budgetsArray[]>([])
    const [arrayBudget, setArrayBudget] = useState<budgetsArray[]>(budgetsArray);
  const [originalOrder, setOriginalOrder] = useState<budgetsArray[]>(budgetsArray)
  const [budgetName, setBudgetName] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [appState, setAppState] = useState<boolean>(false);
  const [infoPages, setInfoPages] = useState<boolean>(false);
  const [infoLanguages, setInfoLanguages] = useState<boolean>(false);
  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);
  const [total, setTotal] = useState<number>(0);
  const [checked, setChecked] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );

  //Lógica

  //Obtener datos del formulario
  const getInfo = () => {
    const date = new Date();
    const dataObj = {
      day: date.getDay(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      clientName: clientName,
      budgetName: budgetName,
      services: [] as string[],
      pages: pages,
      languages: languages,
      total: total,
    };
    dataObj.services = checked
    .map((isChecked, index) => (isChecked ? data[index].title : null))
    .filter((id) => id !== null) as string[];

    
    
    setArrayBudget((budgetsArray) => [...budgetsArray, dataObj]);
    setOriginalOrder((budgetsArray) => [...budgetsArray,dataObj])
  };


  const getArrayBudget = () => {
    const dataArrayBudget = localStorage.getItem("arrayBudget")
    dataArrayBudget && setArrayBudget(JSON.parse(dataArrayBudget))

  }
  //Enviar datos del formulario
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    getInfo();
  };

  const handleChange = (position: number) => {
    const checkedState = checked.map((item, index) =>
      index === position ? !item : item
    );

    setChecked(checkedState);

    const totalPrice = checkedState.reduce((sum, curr, index) => {
      if (curr === true) {
        if (curr === true && index === 0) {
          return sum + data[index].price + languages * 30 + pages * 30;
        }
        return sum + data[index].price;
      }
      return sum;
    }, 0);
    setTotal(totalPrice);
  };

  const handlePageAdd = (e) => {
    e.preventDefault()
    setPages(pages + 1);
  };

  const handlePageSubstract = (e) => {
    e.preventDefault()
    pages > 0 ? setPages(pages - 1) : null;
  };

  const handleLanguageAdd = (e) => {
    e.preventDefault()
    setLanguages(languages + 1);
  };

  const handleLanguagesubstract = (e) => {
    e.preventDefault()
    languages > 0 ? setLanguages(languages - 1) : null;
  };

  const getInfoPages = () => {
    setInfoPages(!infoPages);
  };

  const getInfoLanguages = () => {
    setInfoLanguages(!infoLanguages);
  };

  const infoOut = () => {
    setAppState(!appState);
  };

  //Filtros
  //Filtro de orden alfabético
  const alphabeticalFilter = () => {
    const sortedBudgets = [...originalOrder];
    sortedBudgets.sort((a, b) => {
      const budgetA = a.budgetName.toLowerCase()
      const budgetB = b.budgetName.toLowerCase();
    
      if (budgetA < budgetB) {
        return -1;
      }
      if (budgetA > budgetB) {
        return 1;
      }
      return 0;
    });
    setArrayBudget(sortedBudgets)
  }
  //Filtro orden cronológico
  const chronologicalFilter = () => {
    const sortedBudgets = [...originalOrder]; // Crear una copia del array original
    sortedBudgets.sort((a, b) => {
      const dateA = new Date(a.year, a.month + 1, a.day).getTime();
      const dateB = new Date(b.year, b.month + 1, b.day).getTime();
  
      return dateA - dateB;
    });
  
    setArrayBudget(sortedBudgets); 
  };

  //Resetear filtros
    const resetFilter = () => {
      console.log(arrayBudget)
      console.log(originalOrder)
      setArrayBudget(originalOrder)
      
    }; 
  
    //Filtro de búsqueda
      const handleSearch = () => {
        const filteredResults = arrayBudget.filter((item) => {
          const valueSearch = search.toLowerCase()
          const budget = item.budgetName.toLowerCase()
          return budget === valueSearch
          
        })
        setSearchResults(filteredResults)
      }


  useEffect(() => {
    handleChange();
  }, [languages, pages, total]);

  //Use Effects
  useEffect(() => {
    const initialValue = window.localStorage.getItem("inputCheckbox");
    if (initialValue !== null) {
      const valor = JSON.parse(initialValue);
      setChecked(valor);
    }
  
    const initalPages = window.localStorage.getItem("inputPages")
    if(initalPages !== null) {
      const valorPages = JSON.parse(initalPages)
      setPages(valorPages)
    }

    const initalLanguages = window.localStorage.getItem("inputLanguages")
    if(initalLanguages !== null) {
      const valorLanguages = JSON.parse(initalLanguages)
      setLanguages(valorLanguages)
    }

    getArrayBudget()
  }, []);

  useEffect(() => {
    localStorage.setItem("inputCheckbox", JSON.stringify(checked));
    localStorage.setItem("inputPages", JSON.stringify(pages));
    localStorage.setItem("inputLanguages", JSON.stringify(languages));
    localStorage.setItem("arrayBudget", JSON.stringify(arrayBudget));
  }, [languages, pages, checked, arrayBudget]);

  return (
    <div className="container">
      <StyledForm autoComplete="off">
        <StyledContainerInput>
          <StyledDivInput>
            <label htmlFor={`input-${inputs[2].id}`}>{inputs[2].title}</label>
            <InputForm
              id={`input-${inputs[2].id}`}
              type="text"
              name="budgetName"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setBudgetName(e.target.value)
              }
              value={budgetName}
            />
          </StyledDivInput>
          <StyledDivInput>
            <label htmlFor={`input-${inputs[3].id}`}>{inputs[3].title}</label>
            <InputForm
              id={`input-${inputs[3].id}`}
              type="text"
              name="clientName"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setClientName(e.target.value)
              }
              value={clientName}
            />
          </StyledDivInput>
        </StyledContainerInput>
        <DivApp onClick={infoOut}>
          {data.map((item, index) => (
            <DivCheckboxContainer key={item.id}>
              <Checkbox
                key={item.id}
                id={item.id}
                price={item.price}
                title={item.title}
                checked={checked[index]}
                onChange={() => handleChange(index)}
              />
              {index === 0 && checked[0] === true ? (
                <Modal
                  valuePage={pages}
                  valueLange={languages}
                  valueBudgetName={budgetName}
                  valueClientName={clientName}
                  handlePageAdd={handlePageAdd}
                  handlePageSubstract={handlePageSubstract}
                  handleLanguageAdd={handleLanguageAdd}
                  handleLanguageSubstract={handleLanguagesubstract}
                  onChangeLanguage={(e) => setLanguages(e.target.value)}
                  onChangePage={(e) => setPages(e.target.value)}
                  informationPages={getInfoPages}
                  informationLanguages={getInfoLanguages}
                />
              ) : null}
            </DivCheckboxContainer>
          ))}

          <DivTotal>{total} €</DivTotal>

          {appState && infoPages ? <Popup content={info[0].content} /> : null}
          {appState && infoLanguages ? (
            <Popup content={info[1].content} />
          ) : null}
        </DivApp>
        <ButtonSubmit onClick={handleSubmit} type="submit">
          Guardar presupuesto
        </ButtonSubmit>
      </StyledForm>
      <DataBudget>
      <div className="div-search">
          <label htmlFor="input-search"></label>
          <InputForm
            id="input-search"
            type="search"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            
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
    </div>
  );
}

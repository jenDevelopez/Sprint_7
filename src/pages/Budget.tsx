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
import { data, info, inputs } from "../data";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import Checkbox from "../components/Checkbox";
import Modal from "../components/Modal";
import Popup from "../components/Popup";
import DataBudget from "../components/DataBudget";
import { budgetsArray } from "../types";

export default function Budget() {
  const budgetsArray = [
    {
      day: 1,
      month: 1,
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
  ];
  const [arrayBudget, setArrayBudget] = useState<budgetsArray[]>([]);
  // const [newBudget, setNewBudget] = useState<budgetsArray[]>([])

  const [budgetName, setBudgetName] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [appState, setAppState] = useState<boolean>(false);
  const [infoPages, setInfoPages] = useState<boolean>(false);
  const [infoLanguages, setInfoLanguages] = useState<boolean>(false);
  const [pages, setPages] = useState<number>(0);
  const [languages, setLanguages] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [checked, setChecked] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );

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
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    getInfo();
  };

  const getArrayBudget = () => {
    const dataArrayBudget = localStorage.getItem("arrayBudget")
    dataArrayBudget && setArrayBudget(JSON.parse(dataArrayBudget))
  }

  const getLanguages = () => {
    const dataLanguages = localStorage.getItem("inputLanguages");
    dataLanguages && setLanguages(JSON.parse(dataLanguages));
  };

  const getPages = () => {
    const dataPages = localStorage.getItem("inputPages");
    dataPages ? setPages(JSON.parse(dataPages)) : dataPages;
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

  const handlePageAdd = () => {
    setPages(pages + 1);
  };

  const handlePageSubstract = () => {
    pages > 0 ? setPages(pages - 1) : null;
  };

  const handleLanguageAdd = () => {
    setLanguages(languages + 1);
  };

  const handleLanguagesubstract = () => {
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

  useEffect(() => {
    handleChange();
  }, [languages, pages, total]);

  useEffect(() => {
    const initialValue = window.localStorage.getItem("inputCheckbox");
    if (initialValue !== null) {
      const valor = JSON.parse(initialValue);
      setChecked(valor);
    }
    getLanguages();
    getPages();
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
        <table className="styled-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Presupuesto</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {arrayBudget.map((item) => (
              <tr key={item.budgetName}>
                <td>{item.clientName}</td>
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

import { ChangeEvent, useEffect } from "react";
import Popup from "./Popup";
import Input from "./Input";
import Checkbox from "./Checkbox";
import { data, inputs, info } from "../data";
import "../styles/stylesBudget.css";
import "../styles/styled-components.css";
import { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";
import ButtonModal from "./Buttons/ButtonModal";
import Information from "./Information";

export default function Form() {
  const {
    pages,
    languages,
    arrayBudget,
    setBudgetName,
    setClientName,
    setLanguages,
    checked,
    appState,
    infoLanguages,
    infoPages,
    total,
    clientName,
    budgetName,
    setPages,
    handleLanguageAdd,
    handleLanguagesubstract,
    handlePageAdd,
    handlePageSubstract,
    getInfoPages,
    getInfoLanguages,
  } = useContext(BudgetContext);

  const { handleChange, handleSubmit } =
    useContext(BudgetContext);

 
//  useEffect(() => {
//   const initialValue = window.localStorage.getItem("inputCheckbox");
//   if (initialValue !== null) {
//     const valor = JSON.parse(initialValue);
//     setChecked(valor);
//   }
//  },[])

 useEffect(() => {
  localStorage.setItem("inputCheckbox", JSON.stringify(checked));
  localStorage.setItem("inputPages", JSON.stringify(pages));
  localStorage.setItem("inputLanguages", JSON.stringify(languages));
  localStorage.setItem("arrayBudget", JSON.stringify(arrayBudget));
}, [languages, pages, checked, arrayBudget]);




  return (
    <form autoComplete="off" method="get">
    <div className="div-container-inputs">
      <div className='div-subcontainer-inputs'>
        <Input
          id={`input-${inputs[2].id}`}
          name="budgetName"
          onChange={(e : ChangeEvent<HTMLInputElement>)=> setBudgetName(e.target.value)}
          valueInput={budgetName}
          valueLabel={inputs[2].title}
          type='text'
        />
        <Input
          id={`input-${inputs[3].id}`}
          name="clientName"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>  setClientName(e.target.value)}
          valueInput={clientName}
          valueLabel={inputs[3].title}
          type='text'
        />
      </div>
      <div className='container-checkboxes'>
      {data.map((item,index) => {
  return(
    <>
      <Checkbox
        key={item.id}
        id={item.id}
        price={item.price}
        title={item.title}
        checked={checked[index]}
        name={item.title}
        onChange={() => handleChange(index)}
        value={checked[index]} />    
      {index === 0 && checked[0] === true ? (
        <div className='modal-container' key={`modal-${index}`}>
          <div className='container-input-modal'>
            <label htmlFor="inputPages">
              {inputs[0].title}
            </label>
            <ButtonModal content='+' onClick={handlePageAdd}/>
            <input 
              className='styled-input-modal'
              id="inputPages"
              name={inputs[0].name}
              value={pages}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>  setPages(parseInt(e.target.value))}
            />
            <ButtonModal content='-' onClick={handlePageSubstract}/>
            <Information onClick={getInfoPages}/>
          </div>
          <div className='container-input-modal'>
            <label htmlFor="inputLanguages">
              {inputs[1].title}
            </label>
            <ButtonModal content='+' onClick={handleLanguageAdd} />
            <input 
              className='styled-input-modal'
              id="inputLanguages"
              name={inputs[0].name}
              value={languages}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setLanguages(parseInt(e.target.value))}
            />
            <ButtonModal content='-' onClick={handleLanguagesubstract}/>
            <Information onClick={getInfoLanguages}/>
          </div>
        </div> 
      ) : null}
    </>
  )
})}
      </div>
      <div className='total-container'>{total} €</div>
      {appState && infoPages ? <Popup content={info[0].content} /> : null}
      {appState && infoLanguages ? (
        <Popup content={info[1].content} />
      ) : null}  
    </div>
    <button className='btn-submit' onSubmit={handleSubmit} type="submit">Guardar presupuesto</button>
  </form>
  );
}

import {
  DivApp,
  DivCheckboxContainer,
  DivTotal,
} from "./styles/StyledComponents";
import { data } from "./data";
import { useState, useEffect } from "react";
import Checkbox from "./components/Checkbox";
import Modal from "./components/Modal";

export default function App() {
  
  const getInitialStorage = () => {
    const initialValue = window.localStorage.getItem('inputCheckbox')
    if(initialValue !== null){
      const valor = JSON.parse(initialValue)
      setChecked(valor)
    }
  }
 
  const [pages, setPages] = useState(0)
  const [languages,setLanguages] = useState(0)
  const [total,setTotal] = useState(0)
  const [checked,setChecked] = useState(new Array(data.length).fill(false))

  const getLanguages = () => {
    const dataLanguages = localStorage.getItem('inputLanguages')
    dataLanguages && setLanguages(JSON.parse(dataLanguages))
  }

  const getPages = () => {
      const dataPages = localStorage.getItem('inputPages')
      dataPages && setPages(JSON.parse(dataPages))
      
  }
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
  

  
  useEffect(()=> {
    handleChange();
  },[languages,pages,total])
  
  useEffect(() => {
    const initialValue = window.localStorage.getItem('inputCheckbox')
    if(initialValue !== null){
      const valor = JSON.parse(initialValue)
      setChecked(valor)
    }
    getLanguages()
    getPages()
  },[])
  
  useEffect(() => {
    localStorage.setItem('inputCheckbox',JSON.stringify(checked))
    localStorage.setItem('inputPages',JSON.stringify(pages))
    localStorage.setItem('inputLanguages',JSON.stringify(languages))
  }, [languages, pages,checked]);
  
  return (
    <DivApp>
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
              handlePageAdd={handlePageAdd}
              handlePageSubstract={handlePageSubstract}
              handleLanguageAdd={handleLanguageAdd}
              handleLanguageSubstract={handleLanguagesubstract}
              onChangeLanguage={(e) => setLanguages(e.target.value)}
              onChangePage={(e) => setPages(e.target.value)}
            />
          ) : null}
        </DivCheckboxContainer>
      ))}

      <DivTotal>{total}€</DivTotal>
        
    </DivApp>
  );
}

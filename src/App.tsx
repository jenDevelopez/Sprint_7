import { DivApp, DivCheckboxContainer, DivModal, DivTotal } from "./styles/StyledComponents";
import { data } from "./data";
import { useState, useEffect, EventHandler, ChangeEvent, ChangeEventHandler } from "react";
import Checkbox from "./components/Checkbox";
import Modal from "./components/Modal";

export default function App() {
  const [checked, setChecked] = useState<boolean[]>(new Array(data.length).fill(false));
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(0)
  const [langes,setLanges] = useState(0)


  const handleChange = (position: number) => {
    const checkedState = checked.map((item, index) =>
      index === position ? !item : item
    );

    setChecked(checkedState);

    const totalPrice = checkedState.reduce((sum, curr, index) => {
      if (curr === true) {
        if(curr === true && index === 0){
          return sum + data[index].price + (langes * 30) + (pages * 30)
        }
        return sum + data[index].price;
      }
      return sum;
    }, 0);
    setTotal(totalPrice);
  };

    
    const handlePageAdd = () => {
      setPages(pages + 1)
    }

    const handlePageSubstract = () => {
      pages > 0 ? setPages(pages - 1) : null
    }

    const handleLangeAdd = () => {
      setLanges(langes + 1)
    }

    const handleLangeSubstract = () => {
      langes > 0 ?  setLanges( langes - 1) : null
    }

    const onChangePage = (event:EventTarget) => {
      setPages(event.target.value)
    }

    const onChangeLange = (event: EventTarget) => {
      setLanges(event.target.value)
    }
      
    useEffect(() => {
      handleChange()
    },[langes,pages,total])
  /*---------------------------------------*/
  return (
    <DivApp>
        {data.map((item,index)=> (
          <DivCheckboxContainer key={item.id}>
            <Checkbox 
            key={item.id}
            id={item.id}
            price={item.price}
            title={item.title}
            checked={checked[index]}
            onChange={() => handleChange(index)}
            
            >
            </Checkbox>
            {index === 0 && checked[0] === true 
              ? <Modal 
                  valuePage={pages}
                  valueLange={langes}
                  handlePageAdd={handlePageAdd}
                  handlePageSubstract={handlePageSubstract}
                  handleLangeAdd={handleLangeAdd}
                  handleLangeSubstract={handleLangeSubstract}
                  onChangeLange={onChangeLange}
                  onChangePage={onChangePage}
              
                /> 
              : null
            }
            
          </DivCheckboxContainer>
      ))}
      
      <DivTotal>
        {total}€
      </DivTotal>
    </DivApp>
  );
}

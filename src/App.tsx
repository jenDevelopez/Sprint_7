import { DivApp, DivCheckbox } from "./StyledComponents";
import { data } from "./data";
import { useState } from "react";

export default function App(): JSX.Element {
  const [checked, setChecked] = useState(new Array(data.length).fill(false));
  const [total, setTotal] = useState(0);
  const handleChange = (position: number) => {
    const checkedState = checked.map((item, index) =>
      index === position ? !item : item
    );

    setChecked(checkedState);

    const totalPrice = checkedState.reduce((sum, curr, index) => {
      if (curr === true) {
        return sum + data[index].price;
      }
      return sum;
    }, 0);
    setTotal(totalPrice);
  };

  return (
    <DivApp>
      {data.map(({ title, price }, index) => {
        return (
          <DivCheckbox key={index}>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              checked={checked[index]}
              onChange={() => handleChange(index)}
            />
            <label htmlFor={`checkbox-${index}`}>
              {title} {price}
            </label>
          </DivCheckbox>
        );
      })}
      <div>{total}</div>
    </DivApp>
  );
}

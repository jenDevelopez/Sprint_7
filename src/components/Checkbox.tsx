import { DivCheckbox } from "../styles/StyledComponents";
import { CheckboxProps } from "../types";

export default function Checkbox({
  id,
  title,
  price,
  checked,
  onChange,
  

}: CheckboxProps){
  return (
    <>
      <DivCheckbox>
        <input
          type="checkbox"
          id={`checkbox-${id}`}
          checked={checked}
          onChange={onChange}
          
        />

        <label>
          {title} {`(${price}€)`}
        </label>
      </DivCheckbox>
    </>
  );
}

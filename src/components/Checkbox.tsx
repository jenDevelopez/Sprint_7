import { CheckboxProps } from "../types";
import '../styles/styled-components.css'

export default function Checkbox({
  id,
  title,
  price,
  checked,
  onChange,
  name,
  value

}: CheckboxProps){
  return (
    
      <div className="styled-checkbox">
        <input
          type="checkbox"
          id={`checkbox-${id}`}
          checked={checked}
          onChange={onChange}
          name={name}
          value={value}
        />

        <label>
          {title} {`(${price}€)`}
        </label>
      </div>

  );
}

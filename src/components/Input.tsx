import '../styles/styled-components.css'
import { InputProps } from '../types'

export default function Input({id,name,onChange,valueInput,valueLabel,type}:InputProps) {
  return (
    <div className='styled-input-container'>
      <label htmlFor={id}>
        {valueLabel}
      </label>
      <input className='input-styled'
        id={id}
        name={name}
        onChange={onChange}
        value={valueInput}
        type={type}
      />
    </div>
  )
}

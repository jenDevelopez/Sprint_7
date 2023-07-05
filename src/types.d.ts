import { ChangeEventHandler, MouseEventHandler } from "react"

export type ExtrasProps = {
  id:number,
  title:string
}

export type CheckboxProps = {
  id:number,
  title:string,
  price:number
  checked: boolean,
  onChange: ChangeEventHandler
  children: React.ReactNode

}

export type InputProps = {
  id:number,
  title:string,
  value: number
  handleClickAdd: MouseEventHandler
  handleClickSubstract: MouseEventHandler
  onChange: ChangeEventHandler
}

export type ButtonProps = {
  content:string
  onClick: MouseEventHandler
}

export type ModalProps = {
  valuePage: number
  valueLange:number
  handlePageAdd: MouseEventHandler
  handlePageSubstract: MouseEventHandler
  handleLangeAdd: MouseEventHandler
  handleLangeSubstract: MouseEventHandler
  onChangeLange: ChangeEventHandler
  onChangePage: ChangeEventHandler
}

export type functionProps = {
  event:Event
}
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
  handleLanguageAdd: MouseEventHandler
  handleLanguageSubstract: MouseEventHandler
  onChangeLanguage: ChangeEvent<HTMLElement>
  onChangePage: ChangeEvent<HTMLElement>
  informationPages: MouseEvent<HTMLImageElement>
  informationLanguages: MouseEvent<HTMLImageElement>
}


export type InformationProps = {
  onClick: MouseEvent<HTMLButtonElement>
}

export type PopupProps = {
  content:string
}
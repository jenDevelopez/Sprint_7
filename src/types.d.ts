import { ChangeEvent, ChangeEventHandler, MouseEventHandler } from "react"

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
  valueBudgetName:string
  valueClientName:string
  handlePageAdd: MouseEventHandler
  handlePageSubstract: MouseEventHandler
  handleLanguageAdd: MouseEventHandler
  handleLanguageSubstract: MouseEventHandler
  onChangeLanguage: React.ChangeEventHandler<HTMLInputElement>
  onChangePage: React.ChangeEventHandler<HTMLInputElement>
  // onChangeBudget: ChangeEvent<HTMLInputElement>
  // onChangeClientName: ChangeEvent<HTMLInputElement>
  informationPages: MouseEvent<HTMLImageElement>
  informationLanguages: MouseEvent<HTMLImageElement>
}


export type InformationProps = {
  onClick: MouseEvent<HTMLButtonElement>
}

export type PopupProps = {
  content:string
}

export type DataBudgetProps = {
  children: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>>
}

interface EstadoArray {
  day: number;
  month: number;
  year: number;
  clientName: string;
  budgetName: string;
  services: string[];
  pages: number;
  languages: number;
  total: number;
}

interface budgetsArray {
  day: number;
  month: number;
  year: number;
  clientName: string;
  budgetName: string;
  services: string[];
  pages: number;
  languages: number;
  total:number
}


import React from "react"
import {  ChangeEventHandler } from "react"

// export type ExtrasProps = {
//   id:number,
//   title:string
// }

export type CheckboxProps = {
  id:number,
  title:string,
  price:number
  checked: boolean,
  onChange: ChangeEventHandler
  name: string
  value:boolean

}

export type InputProps = {
  id:string,
  name:string
  onChange: ChangeEventHandler
  valueLabel: string
  valueInput:string
  type: string
}

export type ButtonProps = {
  content:string
  onClick: React.MouseEvent<HTMLButtonElement, MouseEvent>
}

export type FilterButtonProps = {
  content: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

// export type ModalProps = {
//   valuePage: number
//   valueLange:number
//   valueBudgetName:string
//   valueClientName:string
//   handlePageAdd: MouseEventHandler
//   handlePageSubstract: MouseEventHandler
//   handleLanguageAdd: MouseEventHandler
//   handleLanguageSubstract: MouseEventHandler
//   onChangeLanguage: React.ChangeEventHandler<HTMLInputElement>
//   onChangePage: React.ChangeEventHandler<HTMLInputElement>
//   // onChangeBudget: ChangeEvent<HTMLInputElement>
//   // onChangeClientName: ChangeEvent<HTMLInputElement>
//   informationPages: MouseEvent<HTMLImageElement>
//   informationLanguages: MouseEvent<HTMLImageElement>
// }


export type InformationProps = {
  onClick: MouseEvent<HTMLButtonElement>
}

export type PopupProps = {
  content:string
}

export type DataBudgetProps = {
  children: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>>
}


export type budgetsArray = {
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

export type Context = {
  children: React.ReactNode
}

export type ButtonWellcomeProps = {
  content:string
}
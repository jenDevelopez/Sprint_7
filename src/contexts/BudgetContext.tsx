import React, { createContext, useState } from "react";
import { data } from "../data";
import { budgetsArray } from "../types";
import { SetStateAction } from "react";
interface StateContextType {
  //Datos
  budgetsArray: budgetsArray[];
  //Estados
  checked: boolean[];
  setChecked: React.Dispatch<React.SetStateAction<boolean[]>>;
  pages: number;
  setPages: React.Dispatch<React.SetStateAction<number>>;
  languages: number;
  setLanguages: React.Dispatch<React.SetStateAction<number>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  budgetName: string;
  setBudgetName: React.Dispatch<React.SetStateAction<string>>;
  clientName: string;
  setClientName: React.Dispatch<React.SetStateAction<string>>;
  appState: boolean;
  setAppState: React.Dispatch<React.SetStateAction<boolean>>;
  infoPages: boolean;
  setInfoPages: React.Dispatch<React.SetStateAction<boolean>>;
  infoLanguages: boolean;
  setInfoLanguages: React.Dispatch<React.SetStateAction<boolean>>;
  searchResults: budgetsArray[];
  setSearchResults: React.Dispatch<React.SetStateAction<budgetsArray[]>>;
  arrayBudget: budgetsArray[];
  setArrayBudget: React.Dispatch<React.SetStateAction<budgetsArray[]>>;
  originalOrder: budgetsArray[];
  setOriginalOrder: React.Dispatch<React.SetStateAction<budgetsArray[]>>;
  
  //Funciones
  handleChange: (value: SetStateAction<number>) => void;
  handleSubmit: React.FormEventHandler<HTMLButtonElement>;
  handlePageAdd: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handlePageSubstract: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleLanguageAdd: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleLanguagesubstract: (e: React.MouseEvent<HTMLButtonElement>) => void;
  getInfoPages: () => void;
  getInfoLanguages: () => void;
  infoOut: () => void;
  alphabeticalFilter: () => void
  chronologicalFilter: () => void
  resetFilter: () => void
  handleSearch: () => void
}

interface BudgetProviderProps {
  children: React.ReactNode;
}

export const BudgetContext = createContext<StateContextType>({
  budgetsArray: [],
  checked: [],
  setChecked: () => {},
  pages: 0,
  setPages: () => {},
  languages: 0,
  setLanguages: () => {},
  total: 0,
  setTotal: () => {},
  search: "",
  setSearch: () => {},
  budgetName: "",
  setBudgetName: () => {},
  clientName: "",
  setClientName: () => {},
  appState: false,
  setAppState: () => {},
  infoPages: false,
  setInfoPages: () => {},
  infoLanguages: false,
  setInfoLanguages: () => {},
  searchResults: [],
  setSearchResults: () => {},
  arrayBudget: [],
  setArrayBudget: () => {},
  originalOrder: [],
  setOriginalOrder: () => {},
  
  //Funciones
  handleChange: (value) => {
    value;
  },

  handleSubmit: () => {},

  handlePageAdd: (value: SetStateAction<number>) => {
    value;
  },
  
  handlePageSubstract: () => {},

  handleLanguageAdd: () => {},

  handleLanguagesubstract: () => {},
  // storeSetItems: () => {},
  getInfoPages: () => {},
  getInfoLanguages: () => {},
  infoOut: () => {},
  alphabeticalFilter: () => {},
  chronologicalFilter: () => {},
  resetFilter: () => {},
  handleSearch: () => {}
});

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  //Datos
  const budgetsArray = [
    {
      day: 1,
      month: 3,
      year: 2023,
      clientName: "Pepito Grillo",
      budgetName: "Fiesta",
      services: ["uno", "dos"],
      pages: 3,
      languages: 2,
      total: 320,
    },
    {
      day: 2,
      month: 2,
      year: 2023,
      clientName: "Pinocho",
      budgetName: "Reunion",
      services: ["uno", "dos"],
      pages: 2,
      languages: 2,
      total: 500,
    },
    {
      day: 2,
      month: 10,
      year: 2018,
      clientName: "Alimentos S.A",
      budgetName: "Ecommerce",
      services: ["uno", "dos"],
      pages: 5,
      languages: 5,
      total: 1000,
    },
  ];
  //Estados
  const [checked, setChecked] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );
  const [pages, setPages] = useState(0);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState<number>(0);
  const [languages, setLanguages] = useState(0);
  const [budgetName, setBudgetName] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [appState, setAppState] = useState<boolean>(false);
  const [infoPages, setInfoPages] = useState<boolean>(false);
  const [infoLanguages, setInfoLanguages] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<budgetsArray[]>([]);
  const [arrayBudget, setArrayBudget] = useState<budgetsArray[]>(budgetsArray);
  const [originalOrder, setOriginalOrder] =
    useState<budgetsArray[]>(budgetsArray);

  //Funciones


  const getInfo = () => {
    const date = new Date();
    const dataObj = {
      day: date.getDay(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      clientName: clientName,
      budgetName: budgetName,
      services: [] as string[],
      pages: pages,
      languages: languages,
      total: total,
    };

    dataObj.services = checked
      .map((isChecked, index) => (isChecked ? data[index].title : null))
      .filter((id) => id !== null) as string[];

    setArrayBudget((budgetsArray) => [...budgetsArray, dataObj]);
    setOriginalOrder((budgetsArray) => [...budgetsArray, dataObj]);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getInfo();
  };

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

  const handlePageAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPages(pages + 1);
  };

  const handlePageSubstract = (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    pages > 0 ? setPages(pages - 1) : null;
  };

  const handleLanguageAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLanguages(languages + 1);
  };

  const handleLanguagesubstract = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    languages > 0 ? setLanguages(languages - 1) : null;
  };

  const getInfoPages = () => {
    setInfoPages(!infoPages);
    console.log(infoPages)
  };

  const getInfoLanguages = () => {
    setInfoLanguages(!infoLanguages);
  };

  const infoOut = () => {
    setAppState(!appState);
    console.log(infoPages,infoLanguages)
  };
  const alphabeticalFilter = () => {
    const sortedBudgets = [...originalOrder];
    sortedBudgets.sort((a, b) => {
      const budgetA = a.budgetName.toLowerCase();
      const budgetB = b.budgetName.toLowerCase();

      if (budgetA < budgetB) {
        return -1;
      }
      if (budgetA > budgetB) {
        return 1;
      }
      return 0;
    });
    setArrayBudget(sortedBudgets);
  
    
    setArrayBudget(sortedBudgets); 
  };
  const chronologicalFilter = () => {
      const sortedBudgets = [...originalOrder]; // Crear una copia del array original
      sortedBudgets.sort((a, b) => {
        const dateA = new Date(a.year, a.month + 1, a.day).getTime();
        const dateB = new Date(b.year, b.month + 1, b.day).getTime();
    
        return dateA - dateB;
      });
  };

  const resetFilter = () => {
   setArrayBudget(originalOrder)    
  }; 

  const handleSearch = () => {
    const filteredResults = arrayBudget.filter((item) => {
      const valueSearch = search.toLowerCase();
      const budget = item.budgetName.toLowerCase();
      return budget === valueSearch;
    });
    setSearchResults(filteredResults);
  }
  return (
    <BudgetContext.Provider
      value={{
        checked,
        setChecked,
        pages,
        setPages,
        languages,
        setLanguages,
        budgetName,
        setBudgetName,
        clientName,
        setClientName,
        search,
        setSearch,
        total,
        setTotal,
        appState,
        setAppState,
        searchResults,
        setSearchResults,
        arrayBudget,
        setArrayBudget,
        originalOrder,
        setOriginalOrder,
        handleChange,
        handleSubmit,
        handleLanguageAdd,
        handleLanguagesubstract,
        handlePageAdd,
        handlePageSubstract,
        getInfoPages,
        getInfoLanguages,
        infoOut,
        alphabeticalFilter,
        chronologicalFilter,
        resetFilter,
        handleSearch,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

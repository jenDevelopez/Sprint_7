// import { useState } from 'react'
// import { Context } from '../types';
// import { budgetsArray } from '../types';
// import { data } from '../data'



// export default function Logic({children}:Context) {
  
//   const budgetsArray = [
//       {
//         day: 1,
//         month: 3,
//         year: 2023,
//         clientName: "Pepito Grillo",
//         budgetName: "Fiesta",
//         services: ["uno", "dos"],
//         pages: 3,
//         languages: 2,
//         total: 320,
//       },
//       {
//         day: 2,
//         month: 2,
//         year: 2023,
//         clientName: "Pinocho",
//         budgetName: "Reunion",
//         services: ["uno", "dos"],
//         pages: 2,
//         languages: 2,
//         total: 500,
//       },
//       {
//         day: 2,
//         month: 10,
//         year: 2018,
//         clientName: "Alimentos S.A",
//         budgetName: "Ecommerce",
//         services: ["uno", "dos"],
//         pages: 5,
//         languages: 5,
//         total: 1000,
//       }
//     ];
 

  
  

//   //Lógica

//   //Obtener datos del formulario
//   const getInfo = () => {
//     const date = new Date();
//     const dataObj = {
//       day: date.getDay(),
//       month: date.getMonth() + 1,
//       year: date.getFullYear(),
//       clientName: clientName,
//       budgetName: budgetName,
//       services: [] as string[],
//       pages: pages,
//       languages: languages,
//       total: total,
//     };
    
//     dataObj.services = checked
//     .map((isChecked, index) => (isChecked ? data[index].title : null))
//     .filter((id) => id !== null) as string[];

    
    
//     setArrayBudget((budgetsArray) => [...budgetsArray, dataObj]);
//     setOriginalOrder((budgetsArray) => [...budgetsArray,dataObj])
//   };


//   const getArrayBudget = () => {
//     const dataArrayBudget = localStorage.getItem("arrayBudget")
//     dataArrayBudget && setArrayBudget(JSON.parse(dataArrayBudget))

//   }
//   //Enviar datos del formulario
//   const handleSubmit = () => {
//     e.preventDefault()
//     getInfo();
//   };

//   const handleChange = (position: number) => {
//     const checkedState = checked.map((item, index) =>
//       index === position ? !item : item
//     );
    
//     setChecked(checkedState);
//     console.log(checked)
    
//     const totalPrice = checkedState.reduce((sum, curr, index) => {
//       if (curr === true) {
//         if (curr === true && index === 0) {
//           return sum + data[index].price + languages * 30 + pages * 30;
//         }
//         return sum + data[index].price;
//       }
//       return sum;
//     }, 0);
//     setTotal(totalPrice);
//   };

//   const handlePageAdd = () => {
//     setPages(pages + 1);
//   };

//   const handlePageSubstract = () => {
//     pages > 0 ? setPages(pages - 1) : null;
//   };

//   const handleLanguageAdd = () => {
//     setLanguages(languages + 1);
//   };

//   const handleLanguagesubstract = () => {
//     languages > 0 ? setLanguages(languages - 1) : null;
//   };

//   const getInfoPages = () => {
//     setInfoPages(!infoPages);
//   };

//   const getInfoLanguages = () => {
//     setInfoLanguages(!infoLanguages);
//   };

//   const infoOut = () => {
//     setAppState(!appState);
//   };

//   //Filtros
//   //Filtro de orden alfabético
//   const alphabeticalFilter = () => {
//     const sortedBudgets = [...originalOrder];
//     sortedBudgets.sort((a, b) => {
//       const budgetA = a.budgetName.toLowerCase()
//       const budgetB = b.budgetName.toLowerCase();
    
//       if (budgetA < budgetB) {
//       return -1;
//     }
//     if (budgetA > budgetB) {
//       return 1;
//     }
//     return 0;
//   });
//   setArrayBudget(sortedBudgets)
// }
// //Filtro orden cronológico
// const chronologicalFilter = () => {
//   const sortedBudgets = [...originalOrder]; // Crear una copia del array original
//   sortedBudgets.sort((a, b) => {
//     const dateA = new Date(a.year, a.month + 1, a.day).getTime();
//     const dateB = new Date(b.year, b.month + 1, b.day).getTime();

//     return dateA - dateB;
//   });
  
//   setArrayBudget(sortedBudgets); 
// };

// //Resetear filtros
  //   const resetFilter = () => {
  //     console.log(arrayBudget)
  //     console.log(originalOrder)
  //     setArrayBudget(originalOrder)
      
  //   }; 

//   //Filtro de búsqueda
//     const handleSearch = () => {
//       const filteredResults = arrayBudget.filter((item) => {
//         const valueSearch = search.toLowerCase()
//         const budget = item.budgetName.toLowerCase()
//         return budget === valueSearch
        
//       })
//       setSearchResults(filteredResults)
//     }


//     // const createUrl = () = {
//       //   objectURL = URL.createObjectURL(object);
//       // }
//       useEffect(() => {
//   handleChange();
// }, [languages, pages, total]);

// //Use Effects
// useEffect(() => {
//   const initialValue = window.localStorage.getItem("inputCheckbox");
//   if (initialValue !== null) {
//     const valor = JSON.parse(initialValue);
//     setChecked(valor);
//   }
  
//   const initalPages = window.localStorage.getItem("inputPages")
//   if(initalPages !== null) {
//     const valorPages = JSON.parse(initalPages)
//     setPages(valorPages)
//   }
  
//   const initalLanguages = window.localStorage.getItem("inputLanguages")
//   if(initalLanguages !== null) {
//     const valorLanguages = JSON.parse(initalLanguages)
//     setLanguages(valorLanguages)
//   }

//   const initialChecked = window.localStorage.getItem("checked")
//   if(initialChecked !== null){
//     const valorChecked = JSON.parse(initialChecked)
//     setChecked(valorChecked)
//   }
//   getArrayBudget()
// }, []);

// useEffect(() => {
//   localStorage.setItem("inputCheckbox", JSON.stringify(checked));
//   localStorage.setItem("inputPages", JSON.stringify(pages));
//   localStorage.setItem("inputLanguages", JSON.stringify(languages));
//   localStorage.setItem("arrayBudget", JSON.stringify(arrayBudget));
// }, [languages, pages, checked, arrayBudget]);


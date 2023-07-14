import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Budget from './pages/Budget.tsx'
import Wellcome from './pages/Wellcome.tsx'
import React from 'react'
import { BudgetProvider } from './contexts/BudgetContext.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/wellcome',
        element:  <Wellcome />
    },
    {
        path: "/budget",
        element: <Budget />
    }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <>
            <BudgetProvider>
                <RouterProvider router={router} /> 
            </BudgetProvider>
        </>

)

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Presupuesto from './pages/Budget.tsx'
import Wellcome from './pages/Wellcome.tsx'

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
        path: "/presupuesto",
        element: <Presupuesto />
    }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    
    <RouterProvider router={router} />
)

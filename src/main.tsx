import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Presupuesto from './pages/Presupuesto.tsx'
import Bienvenida from './pages/Bienvenida.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/wellcome',
        element:  <Bienvenida />
    },
    {
        path: "/presupuesto",
        element: <Presupuesto />
    }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    
    <RouterProvider router={router} />
)

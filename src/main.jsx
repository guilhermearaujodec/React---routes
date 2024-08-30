import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Importando as dependências para criar as rotas
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Aluno from './routes/Aluno.jsx'


// CRIANDO A FUNÇÃO createBrowserRouter
const router = createBrowserRouter([
  {
    // CRIANDO AS ROTAS PAI
    path:'/',element:<App/>,
    errorElement:<Error/>,


    // CRIANDO ROTAS FILHAS
    children:[
      {path:'/',element:<Home/>},
      {path:'/',element:<Aluno/>}
    ]
  }
])

// () - Método
// [] - Array
// {} - Objeto


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* CRIANDO A DESESTRUCT ROUTER PARA SER RENDERIZADO */}
    <RouterProvider router={router}/>
  </StrictMode>,
)

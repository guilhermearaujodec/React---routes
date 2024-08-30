import Nav from './components/Nav'
// import Home from './routes/Home'
// import Aluno from './routes/Aluno'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {


  return (
   <>
   <Nav/>
    {/* RENDERIZA TODOS OS COMPONENTES FILHOS */}
    <Outlet/>
   <Footer/>
   </>
  )
}

export default App

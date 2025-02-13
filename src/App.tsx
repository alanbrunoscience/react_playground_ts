import './App.css'
import Contador from './pages/contador/Contador'
import ContadorClasse from './pages/contador/ContadorClasse'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Tarefa from './pages/tarefa/Tarefa'

function App() {

  return (
    <>
      <Home titulo={'Componente Home'} texto={'Este é o Componente Home, que recebe props!'} />
      {/* <Home titulo={'Turma JavaScript 06'} texto={'A turme está conhecendo o conceito de props!'} /> */}

      <Contador />

      <ContadorClasse />

      <Tarefa />

      <Login />

    </>
  )
}

export default App

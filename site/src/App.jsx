//importa os componentes de navegação da aplicação
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

// importando o MENU
import NavBar from './components/Layout/NavBar'

// Importa o componente de container
import Container from './components/Layout/Container'

//importação das paginas
import Home from './components/pages/Home'
import ListItem from './components/pages/ListItem'
import CreateItem from './components/pages/CreateItem'

function App() {

  return (
    <>
      
      {/* Estrutura de navegação */}

      <BrowserRouter>

        <Container>

          <Routes>

            <Route path='/' element={<NavBar/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='listItem' element={<ListItem/>}/>
              <Route path='createItem' element={<CreateItem/>}/>
            </Route>

          </Routes>
          
        </Container>

      </BrowserRouter>

    </>
  )
}

export default App


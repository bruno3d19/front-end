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
import DetailItem from './components/pages/DetailItem'
import DeleteItem from './components/pages/DeleteItem'
import UpdateItens from './components/pages/UpdateItens'

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
              <Route path='/detailItem/:cod_item' element={<DetailItem/>}/>
              <Route path='/deleteItem/:cod_item' element={<DeleteItem/>}/>
              <Route path='/updateItens/:cod_item' element={<UpdateItens/>}/>

            </Route>

          </Routes>
          
        </Container>

      </BrowserRouter>

    </>
  )
}

export default App


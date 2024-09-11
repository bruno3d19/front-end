import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Cadastro from './components/pages/Cadastro'
import List from './components/pages/List'
import NavBar from './components/Layout/NavBar'

import Container from './components/Layout/Container'

function App() {

  return (
    <>
      <BrowserRouter>

        <Container>

        <Routes>

          <Route path='/' element={<NavBar/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Cadastro' element={<Cadastro/>}/>
          <Route path='/List' element={<List/>}/>

        </Routes>

        </Container>

      </BrowserRouter>
    </>
  )
}

export default App

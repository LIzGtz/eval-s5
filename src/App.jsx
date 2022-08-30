import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/Pokedex'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<Home />} /> 

        <Route element={<ProtectedRoutes />} >
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokedex/:id' element={}/>

        </Route>

      </Routes>
      <Rou
    </div>
  )
}

export default App

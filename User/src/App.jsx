import { useState } from 'react'
import './App.css'
import{ Routes , Route } from "react-router-dom"
import Signup from './Components/Signup'
import Login from './Components/login'
import HomePage from './Components/HomePage'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
    
      <h1>App</h1>
    
     <Routes>
      <Route path='/' element={<Signup />}/>
      <Route path='/login' element ={<Login />}/>
      <Route path='/home' element ={<HomePage />}/>
     </Routes>
    </div>
  )
}

export default App

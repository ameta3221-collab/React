import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// import Login from './Login'
// import Signup from './Signup'
import Apii from './Apii'
import Defult from './Defult'

function App() {

  return (
    <>
      <BrowserRouter>
        <Defult/>
        <Routes>

        {/* <Route path='/' element = {<Signup/>}/>
        <Route path='/Login' element = {<Login/>}/> */}
        <Route path='/Apii' element = {<Apii/>}/>


        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import Home from './Home/Home'

import { Route,Routes } from 'react-router-dom'

import Courses from './courses/Courses'
import Signup from './Components/Signup'


function App() {
  return (
    <div>
     <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Courses/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
       

      </Routes>
     </div>
      
     
    </div>
  )
}

export default App
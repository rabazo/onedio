import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import {Routes, Route} from 'react-router-dom'
import Book from './pages/Book'
import Homepage from './pages/Homepage'
import Test from './pages/Test'



function App() {
 

  return (
   <div>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}> </Route>
        <Route path='/anasayfa' element={<Homepage/>}> </Route>
        <Route path='/kitap' element={<Book></Book>}> </Route>
        <Route path='/test' element={<Test></Test>}> </Route>

      </Routes>
   </div>
  )
}

export default App

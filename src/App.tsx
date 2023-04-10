import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home, Question, Result } from './pack'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/question" element={<Question/>}/>
      <Route path="/result/:id" element={<Result/>}/>
    </Routes>
  )
}

export default App

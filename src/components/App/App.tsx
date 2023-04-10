import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from 'router/Home'
import Question from 'router/Question'
import Result from 'router/Result'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result/:id" element={<Result />} />
      </Routes>
    </>
  )
}

export default App

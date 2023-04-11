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
        <Route path="/marvel-mbti" element={<Home />} />
        <Route path="/marvel-mbti/question" element={<Question />} />
        <Route path="/marvel-mbti/result/:id" element={<Result />} />
      </Routes>
    </>
  )
}

export default App

import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetCount } from 'redux/slice/QuestionSlice'

const ResultBtn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const reset = () => {
    dispatch(resetCount())
    navigate('/')
    location.reload()
  }

  return (
    <div className="w-full flex flex-row justify-around items-center mb-4">
      <button
        role="button"
        className="p-4 bg-secondary-300 hover:bg-black hover:text-secondary-300 transition-all duration-300"
      >
        공유하기
      </button>
      <button
        role="button"
        className="p-4 bg-secondary-200 hover:bg-primary-100 hover:text-white transition-all duration-300"
        onClick={reset}
      >
        다시하기
      </button>
    </div>
  )
}

export default ResultBtn

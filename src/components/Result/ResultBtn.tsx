import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetCount } from 'redux/slice/QuestionSlice'
import ShareBtn from './ShareBtn'

const ResultBtn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const reset = () => {
    dispatch(resetCount())
    navigate('/marvel-mbti')
    location.reload()
  }

  return (
    <div className="w-full flex flex-row justify-around items-center mb-4">
      <ShareBtn/>
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

import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetCount } from 'redux/slice/QuestionSlice'

type BtnProps = {
  text: string
}

const ResetBtn: React.FC<BtnProps> = ({ text }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const reset = () => {
    dispatch(resetCount())
    navigate('/')
    location.reload()
  }

  return (
    <>
      <button
        role="button"
        aria-label="처음으로 돌아가기"
        className="p-4 bg-secondary-200 hover:bg-primary-100 hover:text-white transition-all duration-300"
        onClick={reset}
      >
        {text}
      </button>
    </>
  )
}

export default ResetBtn

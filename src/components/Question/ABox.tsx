import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { qnaList } from 'data/data'
import { getIndex, plusCount } from 'redux/slice/QuestionSlice'

const ABox: React.FC = () => {
  const navigate = useNavigate()
  const endPoint = 12
  const dispatch = useDispatch()
  const qIdx = useSelector((QueState: RootState) => QueState.qr.questionIndex)

  const goNext = (idx: number) => {
    const target = qnaList[qIdx].a[idx].type
    target.forEach(v => dispatch(plusCount(v)))
    dispatch(getIndex(qIdx + 1))
  }

  useEffect(()=>{
    if (qIdx === endPoint) {
      navigate('/result/1')
    }
  },[qIdx])

  return (
    <div className="grow">
      {qnaList[qIdx]?.a.map((el, idx) => (
        <button
          role="button"
          key={idx}
          className="w-full p-4 border-2 border-primary-100 border-solid bg-white text-justify my-4 text-lg font-tif hover:bg-primary-100 hover:text-white transition-all duration-300 "
          onClick={() => goNext(idx)}
        >
          {el.answer}
        </button>
      ))}
    </div>
  )
}

export default ABox

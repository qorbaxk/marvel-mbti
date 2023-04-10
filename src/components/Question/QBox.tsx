import React from 'react'
import { useNavigate } from 'react-router'
import { qnaList } from 'data/data'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'

const QBox: React.FC = () => {
  const navigate = useNavigate()
  const endPoint = 12
  const qIdx = useSelector((QueState: RootState) => QueState.qr.questionIndex)

  if (qIdx === endPoint) {
    navigate('/result/1')
  }

  return (
    <>
      <div>{qnaList[qIdx]?.q}</div>
    </>
  )
}

export default QBox

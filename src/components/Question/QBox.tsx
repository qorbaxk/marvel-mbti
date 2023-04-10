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
      <h2 className="w-full p-4 my-10 bg-primary-100 text-white font-tif text-2xl text-center">
        {qnaList[qIdx]?.q}
      </h2>
    </>
  )
}

export default QBox

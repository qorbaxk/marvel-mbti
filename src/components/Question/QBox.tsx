import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { qnaList } from 'data/data'

const QBox: React.FC = () => {
  const qIdx = useSelector((QueState: RootState) => QueState.qr.questionIndex)

  return (
    <>
      <h2
        aria-label="질문"
        className="w-full p-4 my-10 bg-primary-100 text-white text-2xl text-center grow flex items-center"
      >
        {qnaList[qIdx]?.q}
      </h2>
    </>
  )
}

export default QBox

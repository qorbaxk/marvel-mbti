import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { qnaList } from 'data/data'

const ABox: React.FC = () => {
  const qIdx = useSelector((QueState: RootState) => QueState.qr.questionIndex)

  return (
    <>
      {qnaList[qIdx].a?.map((el, idx) => (
        <button role="button" key={idx}>
          {el.answer}
        </button>
      ))}
    </>
  )
}

export default ABox

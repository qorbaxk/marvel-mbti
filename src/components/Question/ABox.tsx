import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { qnaList } from 'data/data'

const ABox: React.FC = () => {
  const qIdx = useSelector((QueState: RootState) => QueState.qr.questionIndex)

  return (
    <>
      {qnaList[qIdx].a?.map((el, idx) => (
        <button
          role="button"
          key={idx}
          className="w-full p-4 border-2 border-primary-100 border-solid bg-white text-justify my-4 text-lg font-tif hover:bg-primary-100 hover:text-white transition-all duration-300 "
        >
          {el.answer}
        </button>
      ))}
    </>
  )
}

export default ABox

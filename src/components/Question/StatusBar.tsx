import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'

const StatusBar = () => {
  const [progress, setProgress] = useState(8.3)
  const endPoint = 12
  const qIdx = useSelector((QueState: RootState) => QueState.qr.questionIndex)

  useEffect(() => {
    if (qIdx !== endPoint) {
      setProgress(Math.floor((100 / endPoint) * (qIdx + 1)))
    }
  }, [qIdx])

  return (
    <>
      <span
        role="progressbar"
        aria-label="현재 진행상태"
        className="text-xs font-bold"
      >
        {qIdx + 1}/12
      </span>
      <div aria-hidden className="w-full h-4 mx-auto bg-white">
        <div
          aria-hidden
          className={`w-[${progress}%] h-full bg-primary-100 `}
        ></div>
      </div>
    </>
  )
}

export default StatusBar

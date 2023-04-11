import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'

const StatusBar = () => {
  const [progress, setProgress] = useState<string>('w-[8.3%]')
  const percent = [
    'w-[8.3%]',
    'w-[16.6%]',
    'w-[24.9%]',
    'w-[33.2%]',
    'w-[41.5%]',
    'w-[49.8%]',
    'w-[58.1%]',
    'w-[66.4%]',
    'w-[74.7%]',
    'w-[83%]',
    'w-[91.3%]',
    'w-[100%]',
  ]
  const endPoint = 12
  const qIdx = useSelector((QueState: RootState) => QueState.qr.questionIndex)

  useEffect(() => {
    if (qIdx !== endPoint) {
      setProgress(percent[qIdx])
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
        <div aria-hidden className={`h-full bg-primary-100 ${progress}`}></div>
      </div>
    </>
  )
}

export default StatusBar

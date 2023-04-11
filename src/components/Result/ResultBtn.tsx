import React from 'react'
import ShareBtn from './ShareBtn'
import ResetBtn from './ResetBtn'

const ResultBtn = () => {
  return (
    <div className="w-full flex flex-row justify-around items-center mb-4">
      <ShareBtn />
      <ResetBtn text="다시하기" />
    </div>
  )
}

export default ResultBtn

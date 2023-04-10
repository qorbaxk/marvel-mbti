import MyCharacter from 'components/Result/MyCharacter'
import ResultBtn from 'components/Result/ResultBtn'
import React from 'react'

const Result: React.FC = () => {
  return (
    <section className="container gap-4">
      <MyCharacter />
      <ResultBtn />
    </section>
  )
}

export default Result

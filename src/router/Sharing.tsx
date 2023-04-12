import React from 'react'
import MyCharacter from 'components/Result/MyCharacter'
import ResetBtn from 'components/Result/ResetBtn'

const Sharing: React.FC = () => {
  return (
    <section className="container gap-4">
      <MyCharacter />
      <ResetBtn text="나도 알아보기" />
    </section>
  )
}

export default Sharing

import React from 'react'
import StatusBar from './../components/Question/StatusBar'
import QBox from 'components/Question/QBox'
import ABox from 'components/Question/ABox'

const Question = () => {
  return (
    <section className="container justify-center">
      <StatusBar />
      <QBox />
      <ABox />
    </section>
  )
}

export default Question

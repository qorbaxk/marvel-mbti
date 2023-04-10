import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { infoList } from 'data/data'
import Heroes from 'assets/heroes.png'

const MyCharacter: React.FC = () => {
  const selected = useSelector((QueState: RootState) => QueState.qr.selected)
  const point = selected.indexOf(Math.max(...selected))

  return (
    <>
      <p>{infoList[point].ex}</p>
      <h2>{infoList[point].name}</h2>
      <figure>
        <div
          style={{
            backgroundImage: `url(${Heroes})`,
            backgroundPosition: `${infoList[point].position}`,
            width: `${infoList[point].width}`,
            height: `${infoList[point].height}`,
          }}
        ></div>
        <figcaption>{infoList[point].desc}</figcaption>
      </figure>
    </>
  )
}

export default MyCharacter

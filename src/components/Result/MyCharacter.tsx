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
      <div className="bg-primary-100 text-center p-4 w-[80%]">
        <p className="text-sm">{infoList[point].ex}</p>
        <h2 className="text-white text-4xl my-4">{infoList[point].name}</h2>
      </div>
      <figure className="grow mt-10">
        <div
        className="mx-auto"
          style={{
            backgroundImage: `url(${Heroes})`,
            backgroundPosition: `${infoList[point].position}`,
            width: `${infoList[point].width}`,
            height: `${infoList[point].height}`,
          }}
        ></div>
        <figcaption className="font-light text-justify border-b-2 border-primary-100  border-solid py-4">
          {infoList[point].desc}
        </figcaption>
      </figure>
    </>
  )
}

export default MyCharacter

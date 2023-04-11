import React from 'react'
import { useParams } from 'react-router-dom'
import { infoList } from 'data/data'
import Heroes from 'assets/heroes.png'

const MyCharacter: React.FC = () => {
  const { id } = useParams()

  return (
    <>
      <div className="bg-primary-100 text-center p-4 w-[80%]">
        <p className="text-sm">{infoList[Number(id)].ex}</p>
        <h2 className="text-white text-4xl my-4">
          {infoList[Number(id)].name}
        </h2>
      </div>
      <figure className="grow mt-10">
        <div
          className="mx-auto"
          style={{
            backgroundImage: `url(${Heroes})`,
            backgroundPosition: `${infoList[Number(id)].position}`,
            width: `${infoList[Number(id)].width}`,
            height: `${infoList[Number(id)].height}`,
          }}
        ></div>
        <figcaption className="font-light text-justify border-b-2 border-primary-100  border-solid py-4">
          {infoList[Number(id)].desc}
        </figcaption>
      </figure>
    </>
  )
}

export default MyCharacter

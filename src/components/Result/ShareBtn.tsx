import React, { useEffect } from 'react'
import { infoList } from 'data/data'
import { useParams } from 'react-router-dom'


const ShareBtn = () => {

  const { id } = useParams()
  const myData = infoList.find((el)=>el.id === Number(id))
  

  const shareTitle = '어벤져스 입단 테스트 결과'
  const shareDesc = `${myData?.ex}, 나는 ${myData?.name}!`
  const shareImage = `assets/shareImage/${id}.png`
  const shareURL = `https://qorbaxk-marvel-mbti.netlify.app/marvel-mbti/result/${id}`

  const sendKakaoMessage = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: shareTitle,
        description: shareDesc,
        imageUrl: shareImage,
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
      buttons: [
        {
          title: '결과확인하기',
          link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
          },
        },
      ],
    })
  }

  useEffect(() => {
    window.Kakao.init(process.env.REACT_APP_API_KEY)
  }, [])

  return (
    <>
      <button
        role="button"
        className="p-4 bg-secondary-300 hover:bg-black hover:text-secondary-300 transition-all duration-300"
        onClick={sendKakaoMessage}
      >
        공유하기
      </button>
    </>
  )
}

export default ShareBtn

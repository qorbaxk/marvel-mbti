import React from 'react'
import Cover from 'assets/maincover.gif'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const start = () => {
    navigate('/marvel-mbti/question')
  }

  return (
    <section className="container justify-center">
      <h1 className="w-11/12 bg-primary-100 text-white text-center text-3xl p-4 my-6">
        <p>어벤져스</p>
        <p>입단 테스트</p>
      </h1>
      <img src={Cover} alt="메인 커버 이미지" className="w-10/12 grow" />
      <button
        role="button"
        aria-label="테스트 시작하기 버튼"
        className="p-4 border-2 border-primary-100 border-solid my-6 text-lg text-center w-2/4 hover:bg-primary-100 hover:text-secondary-100 transition-all duration-300 relative"
        onClick={start}
      >
        입단하기
        <span aria-hidden className="absolute flex h-full w-full top-0 right-0">
          <span
            aria-hidden
            className="animate-ping absolute inline-flex h-full w-full bg-primary-100 opacity-75"
          ></span>
        </span>
      </button>
    </section>
  )
}

export default Home

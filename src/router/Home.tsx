import React from 'react'
import Cover from 'assets/maincover.gif'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const start = () => {
    navigate('/marvel-mbti/question')
  }

  return (
    <section className="container">
      <h1 className="bg-primary-100 text-white text-center text-4xl p-4 my-6">
        어벤져스 입단 테스트
      </h1>
      <img src={Cover} alt="메인 커버 이미지" className="w-2/3 grow" />
      <button
        role="button"
        aria-label="테스트 시작하기 버튼"
        className="p-4 border-2 border-primary-100 border-solid my-6 text-lg text-center min-w-[80%] hover:bg-primary-100 hover:text-secondary-100 transition-all duration-300"
        onClick={start}
      >
        입단하기
      </button>
    </section>
  )
}

export default Home

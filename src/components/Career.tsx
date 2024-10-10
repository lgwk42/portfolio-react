import React from 'react'

const careerItems = [
  {
    title: '대구소프트웨어마이스터고등학교 입학',
    date: '2023.03'
  },
  {
    title: '입학전형시스템 개발 동아리 CNS 소속',
    date: '23.03 ~ 23.12'
  },
  {
    title: '3D/게임 동아리 삼디 소속',
    date: '24.03 ~ 26.02'
  },
  {
    title: '기숙사 관리 프로그램 개발 동아리 Team Connect 부장',
    date: '24.03 ~ 24.12'
  }
]

const Career: React.FC = () => {
  return (
    <section id="career" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">경력</h2>
        <div className="space-y-6">
          {careerItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Career
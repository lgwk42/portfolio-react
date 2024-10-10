import React from 'react'

const awards = [
  {
    title: '해커그라운드 해커톤 2024 마이크로소프트 대표이사상 수상',
    description: '마이크로소프트 주관',
    date: '2024년'
  }
]

const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">수상 경력</h2>
        <div className="space-y-6">
          {awards.map((award, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
              <p className="text-gray-600 mb-1">{award.description}</p>
              <p className="text-gray-500 text-sm">{award.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
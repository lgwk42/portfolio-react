import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">소개</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="김건" className="rounded-full w-64 h-64 object-cover mx-auto" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              안녕하세요! 저는 김건입니다. 풀스택 개발자로서 컴퓨터 과학에 대한 강한 기초와 혁신적인 웹 솔루션 창출에 대한 열정을 가지고 있습니다. 프론트엔드와 백엔드 개발 모두에 전문성을 갖추고 있으며, 특히 React와 Node.js에 중점을 두고 있습니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              컴퓨터 과학 학위로 시작된 제 기술 여정은 계속해서 발전하는 웹 개발 세계에서 끊임없이 기술과 지식을 확장해 나가고 있습니다. 깨끗하고 효율적인 코드 작성과 실제 문제를 해결하는 사용자 친화적인 애플리케이션 구축에 전념하고 있습니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              코딩을 하지 않을 때는 새로운 기술을 탐구하거나 오픈 소스 프로젝트에 기여하는 것을 즐깁니다. 웹에서 가능한 것의 경계를 넓히는 혁신적인 프로젝트에 도전하고 협력하는 것에 항상 열정적입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
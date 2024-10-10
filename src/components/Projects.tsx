import React from 'react'

const projects = [
  {
    title: '실시간 채팅 애플리케이션',
    description: 'React와 Socket.io를 사용한 실시간 채팅 애플리케이션입니다. 사용자 인증, 채팅방 생성, 실시간 메시지 전송 기능을 구현했습니다.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: 'https://github.com/luisgunkim/realtime-chat-app'
  },
  {
    title: '블록체인 기반 투표 시스템',
    description: 'Ethereum 블록체인을 활용한 안전하고 투명한 온라인 투표 시스템입니다. 스마트 컨트랙트를 통해 투표의 무결성을 보장합니다.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: 'https://github.com/luisgunkim/blockchain-voting-system'
  },
  {
    title: 'AI 기반 건강 관리 앱',
    description: 'React Native로 개발한 모바일 앱으로, 머신러닝 모델을 통해 사용자의 생활 패턴을 분석하고 맞춤형 건강 조언을 제공합니다.',
    image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: 'https://github.com/luisgunkim/ai-health-advisor'
  }
]

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">프로젝트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">프로젝트 보기</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
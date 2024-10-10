import React from 'react'
import { Menu } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">김건</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#about" className="text-gray-600 hover:text-gray-800">소개</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-800">기술</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-800">프로젝트</a>
          <a href="#awards" className="text-gray-600 hover:text-gray-800">수상 경력</a>
          <a href="#career" className="text-gray-600 hover:text-gray-800">경력</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">연락처</a>
        </nav>
        <button className="md:hidden">
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </header>
  )
}

export default Header
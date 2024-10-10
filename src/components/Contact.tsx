import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">연락처</h2>
        <div className="max-w-lg mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <a href="mailto:luisgunkim@gmail.com" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
              <Mail className="w-6 h-6" />
              <span>luisgunkim@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/luis-gun-kim-b9b1b7246/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn 프로필</span>
            </a>
            <a href="https://github.com/luisgunkim" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
              <Github className="w-6 h-6" />
              <span>GitHub 프로필</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
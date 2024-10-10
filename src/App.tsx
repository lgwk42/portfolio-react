import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Career from './components/Career'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Skills />
        <Projects />
        <Awards />
        <Career />
        <Contact />
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 김건. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/luisgunkim" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/luis-gun-kim-b9b1b7246/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:luisgunkim@gmail.com">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
import React from 'react'
import { Code, Database, Server, Box, Github, Terminal, MessageSquare, FileText } from 'lucide-react'

const backendSkills = [
  { name: 'Java', icon: <Code className="w-12 h-12" /> },
  { name: 'Kotlin', icon: <Code className="w-12 h-12" /> },
  { name: 'Spring Boot', icon: <Server className="w-12 h-12" /> },
  { name: 'MySQL', icon: <Database className="w-12 h-12" /> },
  { name: 'AWS', icon: <Server className="w-12 h-12" /> },
  { name: 'Docker', icon: <Box className="w-12 h-12" /> },
]

const tools = [
  { name: 'Github', icon: <Github className="w-12 h-12" /> },
  { name: 'IntelliJ IDEA', icon: <Terminal className="w-12 h-12" /> },
  { name: 'Postman', icon: <MessageSquare className="w-12 h-12" /> },
  { name: 'Notion', icon: <FileText className="w-12 h-12" /> },
  { name: 'Discord', icon: <MessageSquare className="w-12 h-12" /> },
  { name: 'Slack', icon: <MessageSquare className="w-12 h-12" /> },
]

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">기술 스택</h2>
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Backend</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {backendSkills.map((skill, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center flex flex-col items-center">
                {skill.icon}
                <span className="text-lg font-semibold text-gray-800 mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center flex flex-col items-center">
                {tool.icon}
                <span className="text-lg font-semibold text-gray-800 mt-2">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
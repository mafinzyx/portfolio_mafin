'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="w-80 h-80 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-lg bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <span className="text-white text-2xl font-bold"><img src="/face.png" alt="Logo" className="w-full h-full object-contain" /></span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              Hi, I'm <span className="text-pink-600 dark:text-pink-400">Danylo Zherzdiev</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8">
              Full-Stack Developer
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-200 hover:scale-105 active:scale-95 font-medium"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-pink-600 text-pink-600 dark:text-pink-400 rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I'm a passionate and detail-oriented developer who thrives on learning and growth. 
              I enjoy diving deep into complex systems, understanding how things work, and turning ideas into real, impactful solutions.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm currently focused on expanding my skills in blockchain technologies, exploring how decentralization can change the way we build digital products. I value clean, thoughtful design, efficient code, and products that genuinely improve people's lives.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Key Skills
              </h3>
              <div className="space-y-3">
                {['Modern Web App Development', 'Clean UI/UX Implementation', 'API Architecture & Integration', 'Web3 & Blockchain Foundations', 'Scalable Component Design', 'Problem-Solving Mindset', 'Agile & Independent Workflow', 'Focus on Performance & Code Quality'].map((skill, index) => (
                  <div 
                    key={skill} 
                    className="flex items-center"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                    <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/sidera.png",
                title: "Sidera",
                description: "An innovative platform that combines NFTs, puzzles, and game mechanics. Collect unique fragments, participate in quests, earn rewards, and manage your space inventory.",
                tech: ["React", "Node.js", "Tailwind CSS", "Telegram WebApp", "Blockchain"],
                color: "from-pink-500 to-rose-500",
                // demo: "..."
              },
              {
                image: "/password_manager.png",
                title: "Password Manager",
                description: "A secure web application for storing and managing passwords, complete with a browser extension. The project provides secure password storage, two-factor authentication (2FA), and a user-friendly interface.",
                tech: ["Flask","Werkzeug","Cryptography","Pyotp","2FA"],
                color: "from-rose-500 to-pink-600",
                github: "https://github.com/mafinzyx/Cybersecurity"
              },
              {
                image: "/game.jpg",
                title: "HEX Game",
                description: "The classic variant of the game Hex is played on an 11 x 11 hexagonal board. The goal of the game is to connect the opposite sides of the board with your pieces. The player who connects the opposite sides of the board wins the game.",
                tech: ["C++", "Algorithms", "Data Structures", "DFS/BFS", "Console Application"],
                color: "from-pink-600 to-rose-600",
                github: "https://github.com/mafinzyx/HEX"
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="bg-slate-50 dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <span className="text-white text-4xl font-bold">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-45 object-contain"
                    />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github &&
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition-all duration-200 hover:scale-105 active:scale-95 text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    }
                    {/* {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-200 hover:scale-105 active:scale-95 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* GitHub link */}
          <div className="text-center mt-12">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              More projects can be found on my GitHub account
            </p>
            <a
              href="https://github.com/mafinzyx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-200 hover:scale-105 active:scale-95 font-medium"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-16">
            My technical expertise and tools I work with
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Programming Languages",
                icon: "💻",
                gradient: "from-pink-500 to-rose-500",
                skills: ["Python", "C++", "C", "C#", "Java", "PHP", "JavaScript", "TypeScript"]
              },
              {
                name: "Frontend Development",
                icon: "🎨",
                gradient: "from-rose-500 to-pink-600",
                skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Three.js"]
              },
              {
                name: "Backend & Databases",
                icon: "⚙️",
                gradient: "from-pink-600 to-rose-600",
                skills: ["Node.js", "ASP.NET", "PostgreSQL", "MongoDB", "MySQL"]
              },
              {
                name: "DevOps & Tools",
                icon: "🚀",
                gradient: "from-rose-600 to-pink-700",
                skills: ["Docker", "Git", "Linux", "CI/CD"]
              },
              {
                name: "Development Tools",
                icon: "🛠️",
                gradient: "from-pink-400 to-rose-500",
                skills: ["VS Code", "Figma", "Maven", "CMake", "Unity", "Bash"]
              },
              {
                name: "Blockchain & Web3",
                icon: "🔗",
                gradient: "from-rose-400 to-pink-500",
                skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts", "NFT Development"]
              }
            ].map((category, categoryIndex) => (
              <div 
                key={category.name} 
                className="skill-card group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 overflow-hidden animate-fadeInUp"
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                {/* Header */}
                <div className="relative z-10 flex items-center gap-3 mb-6">
                  <div className="text-3xl">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>
                
                {/* Skills */}
                <div className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-200 dark:bg-slate-700 bg-opacity-50 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-opacity-80 hover:scale-105 transition-all duration-200 cursor-default animate-fadeInUp"
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional skills showcase */}
          <div className="mt-16 text-center animate-fadeInUp" style={{ animationDelay: '900ms' }}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 gradient-text">
              Additional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Problem Solving", "Algorithm Design", "Data Structures", 
                "System Architecture", "API Design", "Performance Optimization",
                "Code Review", "Mobile Development", "Game Development", "Blockchain Development"
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-200 bg-opacity-10 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-opacity-20 hover:scale-105 transition-all duration-200 cursor-default animate-fadeInUp"
                  style={{ animationDelay: `${900 + index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-8">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 text-center">
            Ready for new projects and interesting opportunities.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-12">
            Currently, I'm looking for a part-time job.
          </p>
          
          <div className="flex justify-center">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:danilzerzdev@gmail.com"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-200 hover:translate-x-1"
                >
                  <Mail className="w-5 h-5" />
                  danilzerzdev@gmail.com
                </a>
                <a
                  href="https://github.com/mafinzyx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-200 hover:translate-x-1"
                >
                  <Github className="w-5 h-5" />
                  github.com/mafinzyx
                </a>
                <a
                  href="https://www.linkedin.com/in/danylo-zherzdiev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-200 hover:translate-x-1"
                >
                  <Linkedin className="w-5 h-5" />
                  linkedin.com/in/danylo-zherzdiev
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2025 Zherzdiev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

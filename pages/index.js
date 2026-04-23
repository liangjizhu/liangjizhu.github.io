import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import CVViewer from '../components/CVViewer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveSection('overview');
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-100 to-primary-200">
      <Head>
        <title>Liang Ji Zhu — CV & Portfolio</title>
        <meta
          name="description"
          content="Liang Ji Zhu — Computer Science student. CV, experience, education, skills, and projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="relative w-48 h-48 mx-auto mb-6">
            <Image
              src="/IMG_0521.jpg"
              alt="Liang Ji Zhu"
              fill
              sizes="192px"
              className="rounded-full object-cover shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-primary-50 mb-2">Liang Ji Zhu</h1>
          <p className="text-xl text-primary-400">Computer Science Student • Madrid, Spain</p>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href="/cv2026.pdf"
              className="bg-primary-300 text-primary-50 px-5 py-2 rounded-full hover:bg-primary-400 transition-colors"
              download
            >
              Download CV (PDF)
            </a>
            <a
              href="mailto:liangjizhu29@gmail.com"
              className="text-primary-400 hover:text-primary-50 transition-colors px-5 py-2 rounded-full border border-primary-300/30"
            >
              Email me
            </a>
          </div>
        </motion.div>

        <nav className="mb-12">
          <ul className="flex justify-center space-x-6">
            {['overview', 'experience', 'education', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`text-lg px-4 py-2 rounded-full transition-colors ${
                    activeSection === section
                      ? 'bg-primary-300 text-primary-50'
                      : 'text-primary-400 hover:text-primary-50'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {activeSection === 'overview' && (
            <div className="space-y-8">
              <div className="bg-primary-100/10 backdrop-blur-sm rounded-xl p-8 shadow-xl text-primary-50">
                <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
                <p className="text-primary-50/90 leading-relaxed">
                  Motivated Computer Science student with a solid foundation in software development,
                  data structures and cybersecurity. Interested in building reliable and efficient software
                  solutions, solving complex problems through algorithmic thinking and applying secure
                  development practices. International experience through an Erasmus exchange in Trondheim,
                  Norway, complemented by technical and team-based extracurricular involvement in simulation,
                  volunteering and competitive esports.
                </p>
              </div>
              <div className="bg-primary-100/10 backdrop-blur-sm rounded-xl p-8 shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-primary-50">CV (PDF)</h3>
                <CVViewer />
                <p className="mt-3 text-sm text-primary-400">
                  Tip: use “Expand” for full-screen. The “Download PDF” button saves the latest CV.
                </p>
              </div>
            </div>
          )}

          {activeSection === 'experience' && (
            <div className="bg-primary-100/10 backdrop-blur-sm rounded-xl p-8 shadow-xl text-primary-50">
              <h2 className="text-2xl font-bold mb-6">Experience</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-primary-300 pl-4">
                  <h3 className="text-xl font-semibold">Simulator Engineer</h3>
                  <p className="text-primary-400">Vortex NTNU • Trondheim, Norway • Sep 2025 – Mar 2026</p>
                  <ul className="mt-2 list-disc list-inside text-primary-50/90">
                    <li>Contributed to an underwater drone simulation workflow within a student engineering team.</li>
                    <li>Captured synthetic image data from simulated environments for experimentation/training tasks.</li>
                    <li>Worked with ROS2, C++, and Stonefish in a robotics simulation setting.</li>
                    <li>Investigated multi-sensor data fusion (stereo camera + sonar) to improve perception.</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary-300 pl-4">
                  <h3 className="text-xl font-semibold">Volunteer (Vert)</h3>
                  <p className="text-primary-400">UKA, NTNU • Trondheim, Norway • Sep 2025 – Nov 2025</p>
                  <ul className="mt-2 list-disc list-inside text-primary-50/90">
                    <li>Prepared venues and assembled barriers as part of the volunteer event crew.</li>
                    <li>Built reliability, coordination, and teamwork in large-scale live event settings.</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary-300 pl-4">
                  <h3 className="text-xl font-semibold">Shop Assistant</h3>
                  <p className="text-primary-400">Alimentación Bazar • Madrid, Spain • Mar 2021 – Aug 2025</p>
                  <ul className="mt-2 list-disc list-inside text-primary-50/90">
                    <li>Supported day-to-day store operations in a fast-paced environment.</li>
                    <li>Strengthened communication, teamwork, and problem-solving through customer interaction.</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary-300 pl-4">
                  <h3 className="text-xl font-semibold">Warehouse Organizer</h3>
                  <p className="text-primary-400">Shein • Madrid, Spain • Jun 2022 – Aug 2022</p>
                  <ul className="mt-2 list-disc list-inside text-primary-50/90">
                    <li>Organized inventory and supported warehouse logistics processes.</li>
                    <li>Worked efficiently under time constraints while maintaining accuracy and attention to detail.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'education' && (
            <div className="bg-primary-100/10 backdrop-blur-sm rounded-xl p-8 shadow-xl text-primary-50">
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-300 pl-4">
                  <h3 className="text-xl font-semibold">Bachelor in Computer Science and Engineering</h3>
                  <p className="text-primary-400">University of Carlos III de Madrid</p>
                  <p className="mt-2 text-primary-50/90">
                    Erasmus exchange during academic year 2025/2026 in Trondheim, Norway.
                  </p>
                </div>
                <div className="border-l-4 border-primary-300 pl-4">
                  <h3 className="text-xl font-semibold">Science and Technology Baccalaureate</h3>
                  <p className="text-primary-400">Colegio Villa de Móstoles • Class of 2020</p>
                  <p className="mt-2 text-primary-50/90">Final grade: 9.60</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'skills' && (
            <div className="bg-primary-100/10 backdrop-blur-sm rounded-xl p-8 shadow-xl text-primary-50">
              <h2 className="text-2xl font-bold mb-6">Skills & Interests</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-primary-300/20 p-6">
                  <h3 className="text-xl font-semibold mb-3">Skills</h3>
                  <ul className="list-disc list-inside text-primary-50/90 space-y-1">
                    <li>Software development (C++, ROS2, Python)</li>
                    <li>Databases</li>
                    <li>Debugging & troubleshooting</li>
                    <li>Project management tools</li>
                    <li>Teamwork & communication</li>
                    <li>Algorithmic & logical thinking</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-primary-300/20 p-6">
                  <h3 className="text-xl font-semibold mb-3">Languages</h3>
                  <ul className="list-disc list-inside text-primary-50/90 space-y-1">
                    <li>Chinese — Native</li>
                    <li>Spanish — Proficient</li>
                    <li>English — B2 Certified</li>
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-3">Areas of interest</h3>
                  <ul className="list-disc list-inside text-primary-50/90 space-y-1">
                    <li>Data structures & algorithms</li>
                    <li>Systems & simulation</li>
                    <li>Software engineering</li>
                    <li>Robotics software</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div className="space-y-6">
              <div className="bg-primary-100/10 backdrop-blur-sm rounded-xl p-8 shadow-xl text-primary-50">
                <h2 className="text-2xl font-bold mb-2">Projects</h2>
                <p className="text-primary-400">
                  A few repositories and coursework projects. I’m actively adding more details and demos.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary-100/10 backdrop-blur-sm rounded-xl p-6 shadow-xl text-primary-50"
              >
                <h3 className="text-xl font-bold mb-2">Heurística</h3>
                <p className="text-primary-400 mb-4">Python Project</p>
                <p className="mb-4">Implementation of heuristic algorithms and problem-solving techniques.</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/liangjizhu/heuristica" className="text-primary-300 hover:text-primary-400">View on GitHub</a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary-100/10 backdrop-blur-sm rounded-xl p-6 shadow-xl text-primary-50"
              >
                <h3 className="text-xl font-bold mb-2">RISC-V Projects</h3>
                <p className="text-primary-400 mb-4">Assembly Development</p>
                <p className="mb-4">Collection of RISC-V assembly projects focusing on computer architecture fundamentals.</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/liangjizhu/riscv" className="text-primary-300 hover:text-primary-400">View on GitHub</a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary-100/10 backdrop-blur-sm rounded-xl p-6 shadow-xl text-primary-50"
              >
                <h3 className="text-xl font-bold mb-2">Distributed Systems Labs</h3>
                <p className="text-primary-400 mb-4">C Programming</p>
                <p className="mb-4">Implementation of distributed systems concepts and network programming.</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/liangjizhu/labs_sistemas_distribuidos" className="text-primary-300 hover:text-primary-400">View on GitHub</a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary-100/10 backdrop-blur-sm rounded-xl p-6 shadow-xl text-primary-50"
              >
                <h3 className="text-xl font-bold mb-2">Compiler Design</h3>
                <p className="text-primary-400 mb-4">C Development</p>
                <p className="mb-4">Implementation of compiler components and language processing techniques.</p>
                <div className="flex space-x-4">
                  <a href="https://github.com/100495680/Compiladores" className="text-primary-300 hover:text-primary-400">View on GitHub</a>
                </div>
              </motion.div>
            </div>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="bg-primary-100/10 backdrop-blur-sm rounded-xl p-8 shadow-xl text-primary-50">
              <h2 className="text-2xl font-bold mb-6">Contact</h2>
              <div className="space-y-3 text-primary-50/90">
                <p>
                  <span className="text-primary-400">Email:</span>{' '}
                  <a className="text-primary-300 hover:text-primary-400" href="mailto:liangjizhu29@gmail.com">
                    liangjizhu29@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-primary-400">LinkedIn:</span>{' '}
                  <a
                    className="text-primary-300 hover:text-primary-400"
                    href="https://www.linkedin.com/in/liangjizhu/?locale=en_US"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/liangjizhu
                  </a>
                </p>
                <p>
                  <span className="text-primary-400">GitHub:</span>{' '}
                  <a
                    className="text-primary-300 hover:text-primary-400"
                    href="https://github.com/liangjizhu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/liangjizhu
                  </a>
                </p>
                <p className="pt-2">
                  <span className="text-primary-400">Location:</span> Madrid, Spain (also Trondheim, Norway 2025/2026)
                </p>
              </div>
            </div>
          )}
        </motion.div>

        <footer className="mt-12 text-center">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/liangjizhu"
              className="text-primary-400 hover:text-primary-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/liangjizhu/?locale=en_US"
              className="text-primary-400 hover:text-primary-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:liangjizhu29@gmail.com" className="text-primary-400 hover:text-primary-50 transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
} 
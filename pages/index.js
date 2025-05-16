import { motion } from 'framer-motion';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import CVViewer from '../components/CVViewer';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../utils/emailjs';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({
    status: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ status: 'loading', message: 'Sending message...' });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'liangjizhu29@gmail.com'
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({
        status: 'success',
        message: 'Message sent successfully!'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus({
        status: 'error',
        message: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-100 to-primary-200">
      <Head>
        <title>Liang Ji Zhu - Portfolio</title>
        <meta name="description" content="Professional portfolio of Liang Ji Zhu" />
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
              layout="fill"
              className="rounded-full object-cover shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-primary-50 mb-2">Liang Ji Zhu</h1>
          <p className="text-xl text-primary-400">Student</p>
        </motion.div>

        <nav className="mb-12">
          <ul className="flex justify-center space-x-6">
            {['about', 'experience', 'projects', 'contact'].map((section) => (
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
          {activeSection === 'about' && (
            <div className="space-y-8">
              <div className="bg-primary-100/10 backdrop-blur-sm rounded-xl p-8 shadow-xl text-primary-50">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="mb-4">
                  I am a passionate Full Stack Developer with expertise in modern web technologies.
                  My approach combines technical excellence with creative problem-solving to deliver
                  exceptional digital experiences.
                </p>
              </div>
              <div className="bg-primary-100/10 backdrop-blur-sm rounded-xl p-8 shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-primary-50">My CV</h3>
                <CVViewer />
              </div>
            </div>
          )}

          {activeSection === 'experience' && (
            <div className="bg-primary-100/10 backdrop-blur-sm rounded-xl p-8 shadow-xl text-primary-50">
              <h2 className="text-2xl font-bold mb-6">Education History</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-300 pl-4">
                  <h3 className="text-xl font-semibold">Bachelor in Computer Science and Engineering</h3>
                  <p className="text-primary-400">University of Carlos III de Madrid • Currently enrolled</p>
                  <ul className="mt-2 list-disc list-inside text-primary-50/90">
                    <li>Specializing in software development and computer systems</li>
                    <li>Relevant coursework: Data Structures, Algorithms, Web Development</li>
                    <li>Active participation in coding projects and hackathons</li>
                  </ul>
                </div>
                <div className="border-l-4 border-primary-300 pl-4">
                  <h3 className="text-xl font-semibold">Science and Technology Baccalaureate</h3>
                  <p className="text-primary-400">Colegio Villa de Móstoles • Class of 2020</p>
                  <ul className="mt-2 list-disc list-inside text-primary-50/90">
                    <li>Graduated with distinction - 9.60 GPA</li>
                    <li>Focus on Mathematics, Physics, and Technology</li>
                    <li>Participated in science and technology competitions</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
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
          )}

          {activeSection === 'contact' && (
            <div className="bg-primary-100/10 backdrop-blur-sm rounded-xl p-8 shadow-xl text-primary-50">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-primary-100/20 border border-primary-300/20 focus:border-primary-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-primary-100/20 border border-primary-300/20 focus:border-primary-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-primary-100/20 border border-primary-300/20 focus:border-primary-300 focus:outline-none"
                  ></textarea>
                </div>
                {submitStatus.message && (
                  <div className={`text-sm ${
                    submitStatus.status === 'success' ? 'text-green-400' : 
                    submitStatus.status === 'error' ? 'text-red-400' : 
                    'text-primary-300'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={submitStatus.status === 'loading'}
                  className={`w-full bg-primary-300 text-primary-50 py-2 px-4 rounded-lg transition-colors ${
                    submitStatus.status === 'loading' 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-primary-400'
                  }`}
                >
                  {submitStatus.status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          )}
        </motion.div>

        <footer className="mt-12 text-center">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/liangjizhu" className="text-primary-400 hover:text-primary-50 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/liangjizhu" className="text-primary-400 hover:text-primary-50 transition-colors">
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
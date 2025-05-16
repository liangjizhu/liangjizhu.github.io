import { motion } from 'framer-motion';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import CVViewer from '../components/CVViewer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

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
              <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-300 pl-4">
                  <h3 className="text-xl font-semibold">Shop Assistant</h3>
                  <p className="text-primary-400">Alimentación Bazar, Madrid, Spain • March 2021 – August 2025</p>
                  <ul className="mt-2 list-disc list-inside text-primary-50/90">
                    <li>Provided exceptional customer service and product recommendations</li>
                    <li>Managed cash register transactions and returns accurately</li>
                    <li>Conducted regular inventory counts and restocked merchandise to maintain optimal stock levels</li>
                    <li>Collaborated with team to implement visual merchandising displays, boosting sales</li>
                  </ul>
                </div>
                <div className="border-l-4 border-primary-300 pl-4">
                  <h3 className="text-xl font-semibold">Warehouse Organizer</h3>
                  <p className="text-primary-400">Shein, Madrid, Spain • June 2022 – August 2022</p>
                  <ul className="mt-2 list-disc list-inside text-primary-50/90">
                    <li>Organized and maintained warehouse inventory for efficient order fulfillment</li>
                    <li>Processed incoming shipments and prepared outgoing orders accurately</li>
                    <li>Updated and maintained inventory records using warehouse management software</li>
                    <li>Assisted in optimizing warehouse layout and workflow to improve efficiency</li>
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
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <p className="text-primary-400 mb-4">Full Stack Application</p>
                <p className="mb-4">Description of the project and your role in it.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary-300 hover:text-primary-400">View Project</a>
                  <a href="#" className="text-primary-300 hover:text-primary-400">GitHub</a>
                </div>
              </motion.div>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="bg-primary-100/10 backdrop-blur-sm rounded-xl p-8 shadow-xl text-primary-50">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-primary-100/20 border border-primary-300/20 focus:border-primary-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-primary-100/20 border border-primary-300/20 focus:border-primary-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg bg-primary-100/20 border border-primary-300/20 focus:border-primary-300 focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-300 text-primary-50 py-2 px-4 rounded-lg hover:bg-primary-400 transition-colors"
                >
                  Send Message
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
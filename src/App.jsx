import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Globe, Calendar, MapPin, Award, BookOpen, Code, User, Briefcase, Trophy, Users, ChevronDown, Star, Atom, Zap, Brain, Telescope } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const FloatingParticles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );

  const Navigation = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Atom className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">Madhurendra Mishra</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['About', 'Research', 'Projects', 'Publications', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  const Hero = () => (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <FloatingParticles />
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Madhurendra Mishra
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Theoretical Physicist & Research Scientist
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Exploring the fundamental nature of the universe through relativistic cosmology, quantum gravity, and astrophysics. 
            Bridging complex concepts with innovative interdisciplinary approaches.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="mailto:madhurendramishra24@gmail.com" className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">
            <Mail className="h-6 w-6 text-white" />
          </a>
          <a href="#" className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">
            <Linkedin className="h-6 w-6 text-white" />
          </a>
          <a href="#" className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">
            <Github className="h-6 w-6 text-white" />
          </a>
          <a href="#" className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">
            <Globe className="h-6 w-6 text-white" />
          </a>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </button>
      </div>
    </section>
  );

  const About = () => (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Academic Journey</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">Bachelor of Science (Hons) in Physics</h4>
                <p className="text-gray-600">Sri Guru Tegh Bahadur Khalsa College, University of Delhi</p>
                <p className="text-sm text-gray-500">Nov 2022 - Present</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">Bachelor of Science in Data Science</h4>
                <p className="text-gray-600">Indian Institute of Technology, Madras</p>
                <p className="text-sm text-gray-500">Nov 2023 - Present</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Brain className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Research Focus</h4>
              <p className="text-gray-600 text-sm">Quantum Gravity, Relativistic Cosmology, Astrophysics</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Telescope className="h-12 w-12 text-purple-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h4>
              <p className="text-gray-600 text-sm">Working with leading astronomers and researchers globally</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Code className="h-12 w-12 text-green-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Technical Skills</h4>
              <p className="text-gray-600 text-sm">Python, FORTRAN, LaTeX, Quantum Computing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Zap className="h-12 w-12 text-yellow-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">Bridging Indian philosophy with modern physics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Research = () => (
    <section id="research" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Research Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration with Dr. Aswin Sekhar</h3>
                <p className="text-blue-400">Paris Observatory • Remote</p>
              </div>
              <span className="text-gray-400 text-sm">Dec 2022 - Present</span>
            </div>
            <p className="text-gray-300 mb-4">
              Developing Python codes for orbital mechanics analysis, utilizing Mercury integrator's FORTRAN files 
              to study MOID, small body dynamics, and the Lidov–Kozai mechanism in Sun-grazing comets.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Orbital Mechanics</span>
              <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">FORTRAN</span>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration with Dr. Adarsh Ganesan</h3>
                <p className="text-blue-400">BITS Pilani, Dubai • Remote</p>
              </div>
              <span className="text-gray-400 text-sm">Aug 2024 - Present</span>
            </div>
            <p className="text-gray-300 mb-4">
              Researching phononic combs in MEMS and NEMS systems. Contributed to two research papers 
              accepted for RSES-2025 conference at BITS Pilani, Rajasthan.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">MEMS/NEMS</span>
              <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Research Papers</span>
              <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">Conference</span>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration with Dr. Balaganapathi Devarakonda</h3>
                <p className="text-blue-400">University of Delhi • ICCR Project</p>
              </div>
              <span className="text-gray-400 text-sm">Sep 2021 - Dec 2021</span>
            </div>
            <p className="text-gray-300 mb-4">
              Worked on a project sponsored by ICCR, Ministry of External Affairs, focusing on 
              Indo-Jamaican cultural relations and preparing reports for international collaboration.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">Cultural Relations</span>
              <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">Government Project</span>
              <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">International</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Projects = () => (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects & Research</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Atom className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quantum Encryption System</h3>
            <p className="text-gray-600 mb-4">
              Developed quantum encryption using Qiskit and Python, integrating quantum circuits for secure communication.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">Qiskit</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-sm">Python</span>
              <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-sm">Quantum</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
            <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Gold Nano-Prism Optics</h3>
            <p className="text-gray-600 mb-4">
              Analyzed optical properties of gold nanoparticles using DDSCAT simulation to study size and shape effects.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded text-sm">DDSCAT</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-sm">Simulation</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">Optics</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Optoelectronic Device Analysis</h3>
            <p className="text-gray-600 mb-4">
              Analyzed ideality factors of RGB LEDs and solar cells, comparing experimental results with theoretical predictions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-sm">LEDs</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">Solar Cells</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-sm">Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Publications = () => (
    <section id="publications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Publications & Awards</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Publications</h3>
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Heart Full of Pain, Serene Verses of Emotions</h4>
                <p className="text-gray-300 mb-2">True Dreamster • August 2022</p>
                <p className="text-gray-400 text-sm">Book publication exploring emotional themes through verse</p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Conference Presentations</h4>
                <div className="space-y-2 text-gray-300">
                  <p>• RSES-2025 - BITS Pilani (2 research posters)</p>
                  <p>• ASAC'24 - Ashoka University</p>
                  <p>• CBSE Regional Science Exhibition</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Awards & Recognition</h3>
            <div className="space-y-4">
              {[
                "1st Prize - Lok Kalyan Buddha Foundation Quiz (45,000 participants)",
                "1st Position - Inter-Zonal Sanskrit Shloka Recitation",
                "2nd Position - National Computer Olympiad",
                "Silver Medal - National Hindi Olympiad",
                "Bronze Medal (x2) - National Astronomy Olympiad"
              ].map((award, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Trophy className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-300">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Contact = () => (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Interested in collaboration or have questions about my research? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">madhurendramishra24@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Current Role</h3>
                <p className="text-gray-600">Research Intern & Physics Student</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">Delhi, India</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Research Interests</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Theoretical Physics</h4>
                <p className="text-blue-700 text-sm">Quantum Gravity, Relativistic Cosmology, Astrophysics</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Computational Physics</h4>
                <p className="text-purple-700 text-sm">Quantum Computing, Numerical Analysis, Data Science</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Interdisciplinary Research</h4>
                <p className="text-green-700 text-sm">Philosophy of Science, Science Communication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Research />
      <Projects />
      <Publications />
      <Contact />
    </div>
  );
};

export default App;
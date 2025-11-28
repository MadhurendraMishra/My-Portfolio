import React, { useState, useEffect } from 'react';
import { X, Github, Linkedin, BookOpen, Atom, Brain, Globe, Lightbulb, ChevronDown, FileText } from 'lucide-react';

export default function ResearchPortfolio() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const research = [
    {
      id: 1,
      icon: <Globe className="w-12 h-12" />,
      title: "Orbital Dynamics Research",
      subtitle: "with Dr. Aswin Sekhar",
      affiliation: "Paris Observatory",
      description: "Collaborating on orbital dynamics research, developing Python scripts and using MERCURY (FORTRAN) to analyze orbital parameters, MOID, Lidov–Kozai effects, and resonant interactions in celestial mechanics.",
      skills: ["Python", "FORTRAN", "Orbital Mechanics", "Numerical Simulation", "Astronomical Simulation"],
      details: "This research involves sophisticated computational analysis of how celestial bodies interact gravitationally over time. I'm focusing on understanding minimum orbital intersection distances (MOID) and how secular perturbations like the Lidov-Kozai mechanism affect long-term orbital stability."
    },
    {
      id: 2,
      icon: <Atom className="w-12 h-12" />,
      title: "Phononic Frequency Combs in MEMS/NEMS",
      subtitle: "under Dr. Adarsh Ganesan",
      affiliation: "BITS Pilani, Dubai",
      description: "Conducting research on nonlinear dynamics and phononic combs in micro and nanoelectromechanical systems. Performing simulations, literature synthesis, and model development for frequency comb-driven devices.",
      skills: ["Python", "Research Writing", "Nonlinear Dynamics", "MEMS/NEMS", "Data Analysis", "Literature Review"],
      details: "Frequency combs in mechanical systems represent a cutting-edge research area with applications in sensing, signal processing, and fundamental physics. My work focuses on understanding how nonlinear coupling can generate stable frequency combs in nanoscale mechanical resonators."
    },
    {
      id: 3,
      icon: <Brain className="w-12 h-12" />,
      title: "Transcranial Acoustic Stimulation",
      subtitle: "with Dr. Zhen Qi and Dr Adarsh Ganesan",
      affiliation: "Worcester Polytechnic Institute and BITS Pilani, Dubai",
      description: "Interdisciplinary project studying ultrasonic frequency combs for non-invasive brain stimulation using the Hodgkin–Huxley framework to model neuronal response to acoustic pressure waves.",
      skills: ["Python", "Computational Neurophysics", "Acoustics", "Numerical Modelling"],
      details: "This project bridges physics, neuroscience, and biomedical engineering. We're investigating how carefully designed ultrasonic frequency combs can lower neuronal activation thresholds, potentially opening new pathways for treating neurological conditions non-invasively."
    },
    {
      id: 4,
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Optical & Semiconductor Research",
      subtitle: "under Dr. Kuldeep Kumar",
      affiliation: "University of Delhi",
      description: "Completed two projects: computation of optical properties of gold nanoprisms using DDSCAT, and analysis of ideality factors in optoelectronic devices including LEDs and solar cells.",
      skills: ["Python", "DDSCAT Software", "Nanophotonics", "Semiconductor Devices", "Experimental Analysis"],
      details: "These projects explored light-matter interactions at the nanoscale and the practical performance of semiconductor devices. The nanoprism work revealed how geometry dramatically affects plasmonic resonances, while the ideality factor study provided insights into device efficiency and recombination mechanisms."
    },
    {
      id: 5,
      icon: <BookOpen className="w-12 h-12" />,
      title: "Philosophy & Cultural Research",
      subtitle: "under Dr. Balaganapathi Devarakonda",
      affiliation: "University of Delhi",
      description: "ICCR-sponsored research internship fostering Indo–Jamaican cultural relations, contributing to international collaboration reports and cross-cultural philosophical studies.",
      skills: ["Research Writing", "ICCR", "Cross-Cultural Studies", "Policy Research"],
      details: "This unique interdisciplinary experience broadened my perspective beyond physics. I contributed to documenting cultural exchanges and preparing policy recommendations that strengthen educational and research ties between India and Jamaica."
    }
  ];

  const projects = [
    {
      id: 6,
      icon: <Brain className="w-12 h-12" />,
      title: "Transcranial Acoustic Stimulation",
      type: "Computational Neuroscience",
      description: "Exploring methods to lower neuronal activation threshold using ultrasonic frequency combs for non-invasive brain stimulation, employing the Hodgkin–Huxley model to simulate neuronal membrane dynamics.",
      skills: ["Python", "Numerical Computing", "Neurophysics", "Data Analysis"],
      github: null
    },
    {
      id: 7,
      icon: <Atom className="w-12 h-12" />,
      title: "Quantum Encryption System",
      type: "Quantum Computing",
      description: "Developed encryption and decryption system using Qiskit and Python. Integrated quantum circuits, converted classical bits to qubits and vice versa, testing for correctness and efficiency.",
      skills: ["Python", "Qiskit", "Quantum Computing", "Cryptography"],
      github: "https://github.com/MadhurendraMishra/QuantumComputingQubitxQubit"
    },
    {
      id: 8,
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Gold Nano-Prism Optical Properties",
      type: "Computational Physics",
      description: "Detailed computational study on how gold nanoparticle size and shape influence optical properties like extinction, scattering, and absorption efficiencies using DDSCAT for light–matter interactions.",
      skills: ["DDSCAT", "Computational Physics", "Data Analysis", "Visualization"],
      github: "https://github.com/MadhurendraMishra/SolidStatePhysics/blob/main/Madhurendra_Solid_State_Project.pdf"
    },
    {
      id: 9,
      icon: <Atom className="w-12 h-12" />,
      title: "Ideality Factor Analysis",
      type: "Experimental Physics",
      description: "Analyzed ideality factor of RGB LEDs, Solar Cells, and P–N Junction Diodes, comparing experimental results with theoretical expectations to study deviations and optimize performance.",
      skills: ["Experimental Physics", "Data Analysis", "Semiconductor Theory", "Python"],
      github: null
    }
  ];

  const publications = [
    {
      id: 10,
      icon: <BookOpen className="w-12 h-12" />,
      title: "Cosmological Frequency Combs",
      authors: "Trivedi, O., Mishra, M., & Ganesan, A.",
      year: "2025",
      venue: "arXiv:2507.01929",
      description: "Explored the concept of frequency combs arising from cosmological phenomena, bridging quantum mechanics, general relativity, and observational cosmology.",
      link: "https://arxiv.org/abs/2507.01929"
    },
    {
      id: 11,
      icon: <BookOpen className="w-12 h-12" />,
      title: "Heart Full of Pain",
      authors: "Mishra, M.",
      year: "2022",
      venue: "Serene Verses of Emotions, True Dreamster, pp. 87–90",
      description: "A poetic exploration of emotional depth and self-reflection, published in an anthology celebrating human experiences.",
      link: "https://amzn.in/d/eUNT67e"
    }
  ];

  const Modal = ({ item, onClose }) => {
    if (!item) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1729] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-cyan-900/50 text-gray-100 border border-cyan-900/50" onClick={e => e.stopPropagation()}>
          <div className="sticky top-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white p-6 rounded-t-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="flex justify-between items-start relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                </div>
                {item.subtitle && (
                  <p className="text-cyan-100 text-sm">{item.subtitle}</p>
                )}
                {item.affiliation && (
                  <p className="text-cyan-200 text-xs mt-1">{item.affiliation}</p>
                )}
                {item.type && (
                  <span className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs mt-2">{item.type}</span>
                )}
              </div>
              <button onClick={onClose} className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="p-6">
            <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>

            {item.details && (
              <div className="bg-cyan-900/20 border border-cyan-800/30 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-cyan-300 mb-2">Research Details</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.details}</p>
              </div>
            )}

            {item.authors && (
              <div className="mb-4">
                <h3 className="font-semibold text-cyan-300 mb-2">Authors</h3>
                <p className="text-gray-300 text-sm">{item.authors} ({item.year})</p>
                <p className="text-gray-400 text-sm italic">{item.venue}</p>
              </div>
            )}

            {item.skills && (
              <div className="mb-4">
                <h3 className="font-semibold text-cyan-300 mb-2">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <span key={idx} className="bg-cyan-900/30 text-cyan-200 px-3 py-1 rounded-full text-sm border border-cyan-800/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {(item.github || item.link) && (
              <div className="flex gap-3 pt-4 border-t border-cyan-900/30">
                {item.github && (
                  <a href={item.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1a1f3a] text-white px-4 py-2 rounded-lg hover:bg-cyan-900/50 transition border border-cyan-800/50">
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                )}
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition">
                    <BookOpen className="w-4 h-4" />
                    <span>Read Publication</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const Card = ({ item, delay }) => (
    <div
      className="bg-gradient-to-br from-[#1a1f3a]/80 to-[#0f1729]/80 backdrop-blur-sm rounded-xl shadow-lg shadow-cyan-900/20 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden text-gray-100 border border-cyan-900/30 hover:border-cyan-500/50"
      onClick={() => setSelectedItem(item)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-gradient-to-br from-cyan-600/90 via-blue-600/90 to-purple-600/90 p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="relative z-10">
          {item.icon}
          <h3 className="text-xl font-bold mt-3">{item.title}</h3>
          {item.subtitle && <p className="text-cyan-100 text-sm mt-1">{item.subtitle}</p>}
          {item.type && <p className="text-cyan-100 text-sm mt-1">{item.type}</p>}
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{item.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {item.skills?.slice(0, 3).map((skill, idx) => (
            <span key={idx} className="bg-cyan-900/30 text-cyan-200 px-2 py-1 rounded-full text-xs border border-cyan-800/50">
              {skill}
            </span>
          ))}
          {item.skills?.length > 3 && (
            <span className="bg-cyan-900/30 text-cyan-200 px-2 py-1 rounded-full text-xs border border-cyan-800/50">
              +{item.skills.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0e27] text-gray-100 relative overflow-x-hidden">
      {/* Animated Starfield Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0f1729]"></div>
        <div className="stars-small"></div>
        <div className="stars-medium"></div>
        <div className="stars-large"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-[#0a0e27]/95 backdrop-blur-md shadow-lg shadow-purple-900/20' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className={`text-2xl font-bold ${scrolled ? 'text-cyan-300' : 'text-white'}`}>
              Madhurendra Mishra
            </h1>
            <div className="flex gap-4">
              <a href="https://github.com/MadhurendraMishra" target="_blank" rel="noopener noreferrer"
                className={`hover:scale-110 mt-3 transition hover:text-cyan-400 ${scrolled ? 'text-gray-300' : 'text-white'}`}>
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/madhurendramishra24/" target="_blank" rel="noopener noreferrer"
                className={`hover:scale-110 mt-3 transition hover:text-cyan-400 ${scrolled ? 'text-gray-300' : 'text-white'}`}>
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://drive.google.com/file/d/1YWaanbQD_ROpOXoESpHq9cu2hiOQDU59/view" target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${scrolled ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500' : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'}`}>
                <FileText className="w-5 h-5" />
                <span className="hidden sm:inline">CV</span>
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
          {/* Nebula Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Hello, I'm Madhurendra
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-cyan-100">
              Physics Student & Aspiring Researcher
            </p>
            <p className="text-lg md:text-xl mb-8 text-blue-200">
              SGTB Khalsa College, University of Delhi
            </p>
            <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto text-gray-300">
              Passionate about cosmology, relativity, and computational physics.
            </p>
            <a href="#research" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transition transform hover:scale-105 shadow-lg shadow-cyan-500/50">
              Explore My Research
            </a>
          </div>
          <ChevronDown className="absolute bottom-8 w-8 h-8 animate-bounce text-cyan-300" />
        </section>

        {/* About Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I am a young physics researcher passionate about understanding the universe
                    at its most fundamental level. I am currently pursuing my Bachelor's in Physics at
                    SGTB Khalsa College, University of Delhi along with a Diploma in Data Science from IIT Madras.
                  </p>

                  <p>
                    My interests cover a wide range of physics, with a special focus on cosmology, relativity,
                    astronomy, nonlinear systems, and computational physics. I enjoy working on questions
                    where theory, simulation, and data come together to reveal something new. I am always
                    eager to take on new projects, collaborate with others, and keep learning from people
                    across the broader physics community.
                  </p>

                  <p>
                    My short and long term goal is to pursue a Ph.D. in cosmology and contribute to our understanding
                    of the universe respectively. I believe that through rigorous research, collaboration, and
                    continuous learning, we can uncover the mysteries of the cosmos and push the boundaries of human knowledge.
                  </p>

                </div>
                <div className="mt-6 bg-gradient-to-br from-[#1a1f3a]/80 to-[#0f1729]/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-cyan-900/20 border border-cyan-900/30 p-6">
                  <h3 className="text-xl font-bold text-cyan-300 mb-4">Quick Facts</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li><strong>Location:</strong> Delhi, India</li>
                    <li><strong>Education:</strong> B.Sc (Hons.) in Physics (Expected 2026)</li>
                    <li><strong>Research Areas:</strong> Cosmology, Astronomy, Nonlinear Physics, Neurophysics</li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/madhuu.jpg"
                    alt="Madhurendra Mishra"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="bg-gradient-to-br from-indigo-500 to-purple-600 w-full h-96 flex items-center justify-center text-white text-6xl font-bold">MM</div>';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-4">Research Experience</h2>
              <p className="text-xl text-gray-300">Collaborative projects across multiple institutions</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {research.map((item, idx) => (
                <Card key={item.id} item={item} delay={idx * 100} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-4">Projects</h2>
              <p className="text-xl text-gray-300">Independent research and computational work</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {projects.map((item, idx) => (
                <Card key={item.id} item={item} delay={idx * 100} />
              ))}
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="pt-20 pb-32 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">Publications</h2>
              <p className="text-xl text-gray-300">Contributing to scientific literature</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {publications.map((item, idx) => (
                <Card key={item.id} item={item} delay={idx * 100} />
              ))}
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto mb-12 rounded shadow-lg shadow-cyan-500/50"></div>

            <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
              Interested in collaboration, research discussions, or academic opportunities?
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
              I'm always open to connecting with fellow researchers and physicists.
            </p>

            <div className="space-y-6 mb-12">
              <a href="mailto:madhurendramishra24@gmail.com"
                className="flex items-center justify-center gap-3 text-gray-300 hover:text-cyan-400 transition text-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>madhurendramishra24@gmail.com</span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="https://github.com/MadhurendraMishra"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#1a1f3a]/60 backdrop-blur-sm hover:bg-[#1a1f3a]/80 text-white rounded-lg border border-cyan-900/50 hover:border-cyan-500 transition-all duration-300 font-medium shadow-lg shadow-cyan-900/20">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/madhurendramishra24/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#1a1f3a]/60 backdrop-blur-sm hover:bg-[#1a1f3a]/80 text-white rounded-lg border border-purple-900/50 hover:border-purple-500 transition-all duration-300 font-medium shadow-lg shadow-purple-900/20">
                LinkedIn
              </a>
            </div>

            <a href="mailto:madhurmishra.phy@gmail.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transform hover:scale-105">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0a0e27]/80 backdrop-blur-sm border-t border-cyan-900/30 text-white py-16 px-4 relative">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center gap-6 mb-6">
              <a href="https://github.com/MadhurendraMishra" target="_blank" rel="noopener noreferrer"
                className="hover:text-cyan-400 transition transform hover:scale-110">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/madhurendramishra24/" target="_blank" rel="noopener noreferrer"
                className="hover:text-cyan-400 transition transform hover:scale-110">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
            <p className="text-gray-400">&copy; 2025 Madhurendra Mishra. All rights reserved.</p>
          </div>
        </footer>

        {/* Modal */}
        {selectedItem && <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />}
      </div>

      {/* CSS for Stars Animation */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .stars-small, .stars-medium, .stars-large {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .stars-small {
          background-image: 
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(2px 2px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent),
            radial-gradient(1px 1px at 15% 90%, white, transparent);
          background-size: 200% 200%;
          animation: twinkle 3s ease-in-out infinite;
          background-repeat: repeat;
        }

        .stars-medium {
          background-image:
            radial-gradient(3px 3px at 30% 20%, rgba(147, 197, 253, 0.8), transparent),
            radial-gradient(2px 2px at 70% 80%, rgba(196, 181, 253, 0.8), transparent),
            radial-gradient(3px 3px at 10% 60%, rgba(147, 197, 253, 0.8), transparent),
            radial-gradient(2px 2px at 85% 40%, rgba(196, 181, 253, 0.8), transparent);
          background-size: 300% 300%;
          animation: twinkle 4s ease-in-out infinite 1s;
          background-repeat: repeat;
        }

        .stars-large {
          background-image:
            radial-gradient(4px 4px at 40% 50%, rgba(103, 232, 249, 0.9), transparent),
            radial-gradient(3px 3px at 75% 25%, rgba(167, 139, 250, 0.9), transparent),
            radial-gradient(4px 4px at 25% 75%, rgba(103, 232, 249, 0.9), transparent);
          background-size: 400% 400%;
          animation: twinkle 5s ease-in-out infinite 2s;
          background-repeat: repeat;
        }
      `}</style>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { X, Github, Linkedin, BookOpen, Atom, Brain, Globe, Lightbulb, ChevronDown } from 'lucide-react';

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
      skills: ["Python", "FORTRAN", "Orbital Mechanics", "Numerical Simulation"],
      details: "This research involves sophisticated computational analysis of how celestial bodies interact gravitationally over time. I'm focusing on understanding minimum orbital intersection distances (MOID) and how secular perturbations like the Lidov-Kozai mechanism affect long-term orbital stability."
    },
    {
      id: 2,
      icon: <Atom className="w-12 h-12" />,
      title: "Phononic Frequency Combs in MEMS/NEMS",
      subtitle: "under Dr. Adarsh Ganesan",
      affiliation: "BITS Pilani, Dubai",
      description: "Conducting research on nonlinear dynamics and phononic combs in micro and nanoelectromechanical systems. Performing simulations, literature synthesis, and model development for frequency comb-driven devices.",
      skills: ["Python", "Nonlinear Dynamics", "MEMS/NEMS", "Data Analysis"],
      details: "Frequency combs in mechanical systems represent a cutting-edge research area with applications in sensing, signal processing, and fundamental physics. My work focuses on understanding how nonlinear coupling can generate stable frequency combs in nanoscale mechanical resonators."
    },
    {
      id: 3,
      icon: <Brain className="w-12 h-12" />,
      title: "Transcranial Acoustic Stimulation",
      subtitle: "with Dr. Zhen Qi",
      affiliation: "Worcester Polytechnic Institute",
      description: "Interdisciplinary project studying ultrasonic frequency combs for non-invasive brain stimulation using the Hodgkin–Huxley framework to model neuronal response to acoustic pressure waves.",
      skills: ["Python", "Computational Neuroscience", "Acoustics", "Numerical Modelling"],
      details: "This project bridges physics, neuroscience, and biomedical engineering. We're investigating how carefully designed ultrasonic frequency combs can lower neuronal activation thresholds, potentially opening new pathways for treating neurological conditions non-invasively."
    },
    {
      id: 4,
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Optical & Semiconductor Research",
      subtitle: "under Dr. Kuldeep Kumar",
      affiliation: "University of Delhi",
      description: "Completed two projects: computation of optical properties of gold nanoprisms using DDSCAT, and analysis of ideality factors in optoelectronic devices including LEDs and solar cells.",
      skills: ["DDSCAT", "Nanophotonics", "Semiconductor Devices", "Experimental Analysis"],
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
      skills: ["Python", "Numerical Computing", "Multithreading", "GUI Framework"],
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
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-gray-100" onClick={e => e.stopPropagation()}>
          <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                </div>
                {item.subtitle && (
                  <p className="text-indigo-100 text-sm">{item.subtitle}</p>
                )}
                {item.affiliation && (
                  <p className="text-indigo-200 text-xs mt-1">{item.affiliation}</p>
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
            <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>
            
            {item.details && (
              <div className="bg-indigo-900/20 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-indigo-200 mb-2">Research Details</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.details}</p>
              </div>
            )}

            {item.authors && (
              <div className="mb-4">
                <h3 className="font-semibold text-gray-100 mb-2">Authors</h3>
                <p className="text-gray-300 text-sm">{item.authors} ({item.year})</p>
                <p className="text-gray-400 text-sm italic">{item.venue}</p>
              </div>
            )}
            
            {item.skills && (
              <div className="mb-4">
                <h3 className="font-semibold text-gray-100 mb-2">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <span key={idx} className="bg-indigo-800 text-indigo-100 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {(item.github || item.link) && (
              <div className="flex gap-3 pt-4 border-t">
                {item.github && (
                  <a href={item.github} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                )}
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
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
      className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden text-gray-100"
      onClick={() => setSelectedItem(item)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white">
        {item.icon}
        <h3 className="text-xl font-bold mt-3">{item.title}</h3>
        {item.subtitle && <p className="text-indigo-100 text-sm mt-1">{item.subtitle}</p>}
        {item.type && <p className="text-indigo-100 text-sm mt-1">{item.type}</p>}
      </div>
      <div className="p-6">
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{item.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {item.skills?.slice(0, 3).map((skill, idx) => (
            <span key={idx} className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs">
              {skill}
            </span>
          ))}
          {item.skills?.length > 3 && (
            <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs">
              +{item.skills.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100">
      {/* Header */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-gray-800 shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className={`text-2xl font-bold ${scrolled ? 'text-indigo-300' : 'text-white'}`}>
            Madhurendra Mishra
          </h1>
          <div className="flex gap-4">
            <a href="https://github.com/MadhurendraMishra" target="_blank" rel="noopener noreferrer"
               className={`hover:scale-110 transition ${scrolled ? 'text-gray-300' : 'text-white'}`}>
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/madhurendramishra24/" target="_blank" rel="noopener noreferrer"
               className={`hover:scale-110 transition ${scrolled ? 'text-gray-300' : 'text-white'}`}>
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hello, I'm Madhurendra
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-indigo-100">
            Physics Student & Aspiring Cosmology Researcher
          </p>
          <p className="text-lg md:text-xl mb-8 text-indigo-200">
            SGTB Khalsa College, University of Delhi | IIT Madras Diploma in Data Science
          </p>
          <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto text-indigo-100">
            Passionate about cosmology, quantum mechanics, and computational physics. 
            Pursuing research in orbital dynamics, frequency combs, and transcranial stimulation.
          </p>
          <a href="#research" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-100 transition transform hover:scale-105 shadow-lg">
            Explore My Research
          </a>
        </div>
        <ChevronDown className="absolute bottom-8 w-8 h-8 animate-bounce" />
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a 22-year-old physics undergraduate passionate about understanding the universe 
                  at its most fundamental level. Currently pursuing my Bachelor's in Physics at 
                  SGTB Khalsa College and a Diploma in Data Science from IIT Madras.
                </p>
                <p>
                  My research interests span cosmology, quantum mechanics, and computational physics. 
                  I'm particularly fascinated by how frequency combs appear across scales—from 
                  MEMS devices to cosmological phenomena—and how computational methods can 
                  unlock new insights in these domains.
                </p>
                <p>
                  My ultimate goal is to pursue a Ph.D. in cosmology and contribute to our 
                  understanding of the universe's evolution, dark matter, and the fundamental 
                  nature of spacetime.
                </p>
              </div>
              <div className="mt-6 bg-gray-800 rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-4">Quick Facts</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><strong>Age:</strong> 22 Years</li>
                  <li><strong>Location:</strong> Delhi, India</li>
                  <li><strong>Education:</strong> B.Sc. Physics (Expected 2025)</li>
                  <li><strong>Research Areas:</strong> Cosmology, Quantum Computing, Orbital Dynamics</li>
                  <li><strong>Career Goal:</strong> Ph.D. in Cosmology</li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/Gemini_Generated_Image_kvf1pakvf1pakvf1.png"
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
      <section id="research" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Research Experience</h2>
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Projects</h2>
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
      <section className="pt-20 pb-32 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Publications</h2>
            <p className="text-xl text-gray-300">Contributing to scientific literature</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {publications.map((item, idx) => (
              <Card key={item.id} item={item} delay={idx * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Subtle centered divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-36 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-40 my-8 rounded" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/MadhurendraMishra" target="_blank" rel="noopener noreferrer"
               className="hover:text-indigo-400 transition">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/madhurendramishra24/" target="_blank" rel="noopener noreferrer"
               className="hover:text-indigo-400 transition">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
          <p className="text-gray-400">&copy; 2025 Madhurendra Mishra. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Aspiring Cosmologist | Physics Researcher | Future Ph.D. Candidate</p>
        </div>
      </footer>

      {/* Modal */}
      {selectedItem && <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
}
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import AICaseStudies from './components/AICaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [selectedProject, setSelectedProject] = React.useState<number | null>(null);

  if (selectedProject) {
    return <ProjectDetail projectId={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <Hero />
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"></div>
      <About />
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"></div>
      <Work onProjectClick={setSelectedProject} />
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"></div>
      <AICaseStudies onProjectClick={setSelectedProject} />
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"></div>
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
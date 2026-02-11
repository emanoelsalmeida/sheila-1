
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import About from './components/About';
import Services from './components/Services';
import DiagnosisIA from './components/DiagnosisIA';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <About />
      <Services />
      <DiagnosisIA />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

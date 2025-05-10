import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import ValueProp from './components/ValueProp/ValueProp.jsx';
import Services from './components/Services/Services.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import TechExpertise from './components/TechExpertise/TechExpertise.jsx';
import ContactCTA from './components/ContactCTA/ContactCTA.jsx';
import Footer from './components/Footer/Footer.jsx';
import FloatingActionButton from './components/FloatingActionButton/FloatingActionButton.jsx';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-light text-deep">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <ValueProp />
      <Services />
      <Portfolio />
      <Testimonials />
      <TechExpertise />
      <ContactCTA />
      <FloatingActionButton />
      <Footer />
    </div>
  );
}

export default App;
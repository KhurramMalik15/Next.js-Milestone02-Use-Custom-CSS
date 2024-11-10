// pages/index.js
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import Image from 'next/image';

const Home = () => {
  return (
    <div id='index'>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer /> 
    </div>
  );
};

export default Home;
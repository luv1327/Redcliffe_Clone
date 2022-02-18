import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import GeneticTesting from './components/GeneticTesting';
import HealthQuestion from './components/HealthQuestion';
import HowToTest from './components/HowToTest';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <GeneticTesting />
      <HealthQuestion />
      <HowToTest />
      <Footer />
    </>
  );
}

export default App;

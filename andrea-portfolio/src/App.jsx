import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Libraries from './components/sections/Libraries';
import Contact from './components/sections/Contact';
import About from './components/sections/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Libraries />
          <About />
          <Contact />
        </main>
      </div>
    </Router>
  );
}

export default App;

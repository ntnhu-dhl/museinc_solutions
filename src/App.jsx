import Header from './components/Header';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ProjectShowcase />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;

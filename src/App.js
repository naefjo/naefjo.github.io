// import logo from './logo.svg';
// import './App.css';
import About from './components/about'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Projects from  './components/projects'
import CV from './components/cv'
import Contact from './components/contact'

function App() {
  return (
    <main className="text-gray-800 bg-zinc-50 body-font">
      <Navbar />
      <About />
      <CV />
      <Projects />
      <Contact />
      < Footer />
    </main>
  )
}

export default App;

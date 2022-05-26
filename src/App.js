// import logo from './logo.svg';
// import './App.css';
import About from './components/about'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Projects from  './components/projects'
import CV from './components/cv'

function App() {
  return (
    <main className="text-gray-800 bg-gray-700 body-font">
      <Navbar />
      <About />
      <CV />
      <Projects />
      < Footer />
    </main>
  )
}

export default App;

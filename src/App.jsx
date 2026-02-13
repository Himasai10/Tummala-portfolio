import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Timeline />
        <Skills />
        <Hobbies />
      </main>
      <Footer />
    </div>
  )
}

export default App
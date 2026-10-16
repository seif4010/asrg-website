
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import PillarsSection from './components/PillarsSection'
import ImpactSection from './components/ImpactSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutSection />
        <PillarsSection />
        <ImpactSection />
        
      </main>
      <Footer />
      
    </>
  )
}

export default App

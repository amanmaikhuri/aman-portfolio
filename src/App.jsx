import AboutSection from './components/AboutSection'
import BlogsSection from './components/BlogsSection'
import Certifications from './components/Certifications'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MotivationSection from './components/MotivationSection'
import './index.css'

function App() {

  return (
   <div className='h-full w-full bg-[var(--bg-dark)] relative'>

    {/* header */}
      <div className='absolute top-0 right-0 left-0 z-2'>
          <Header />
      </div>
    
    {/* hero section */}
      <div className='h-full pt-16 md:pt-20 lg:pt-22'>
        <Hero />
        <MotivationSection />
      </div>

      {/* about section */}
        <AboutSection />

      {/* blog section */}
      <BlogsSection />

      {/* certifications */}
      <Certifications />

      {/* contact section */}
      <ContactMe />

      {/* footer section  */}
      <Footer />
   </div>
  )
}

export default App

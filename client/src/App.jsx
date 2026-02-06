import MainLayout from './layouts/MainLayout'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Reviews from './components/Reviews'
import BookCTA from './components/BookCTA'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Reviews />
      <BookCTA />
      <ContactForm />
    </MainLayout>
  )
}

export default App

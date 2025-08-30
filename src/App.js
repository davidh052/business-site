
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contacts';
import Reviews from './components/Reviews';
import Services from './components/Services';
import BookCTA from './components/BookCTA';
import Works from './components/works';






function App() {
  return (
    <>
    <Navbar />
      <div className = 'App'>

        <div className='hero-sec'> 
          <h1 className='header1'>Professional phlebotomy services</h1>
         
        </div>
          <About />
          <Services/>
          <Works/>
          <Reviews />
          <BookCTA/>
          <Contact />
          
          
        </div>
    </>
  );
}

export default App;

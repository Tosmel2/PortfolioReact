import './App.css';
import Contact from './components/Contact';
import About from './pages/About';
// import styled from 'styled-components';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import Profile from './components/Profile';
// import Navbar from './components/Navbar';
import Services from './components/Services';
import Projects from './components/Projects';


// const JSXStyled = styled.div`
// padding: 0 2em;
// `

function App() {
  return (
    
      <div className="App">
        {/* <Navbar /> */}
        <Profile />
        <About />
        <Services />
        <Projects />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
   
  );
}

export default App;

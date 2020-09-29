import React, { useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Aos from 'aos';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Banner/Header';
import Resume from './components/Resume/Resume';
import Skill from './components/Skills/Skill';
import Work from './components/Work/Work';
import Testimonial from './components/Testimonial/Testimonial';
import 'aos/dist/aos.css';
import './App.css';

function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Header id="land" />
      <About id="about" />
      <Resume id="resume" />
      <Skill id="skill" />
      <Work id="work" />
      <Testimonial id="testimonial" />
      <Contact id="contact" />
      <Footer />
    </div>

    // <Router>
    //   <div className="App">
    //     <NavBar />
    //     <Switch>

    //       <Route path="/home">
    //         <Header />
    //       </Route>

    //       <Route path="/about">
    //         <About />
    //       </Route>

    //       <Route path="/resume">
    //         <Resume />
    //       </Route>

    //       <Route path="/skills">
    //         <Skill />
    //       </Route>

    //       <Route path="/works">
    //         <Work />
    //       </Route>

    //       <Route path="/testimonials">
    //         <Testimonial />
    //       </Route>

    //       <Route path="/contact">
    //         <Contact />
    //       </Route>

    //       <Route path="/">
    //         <Header />
    //       </Route>

    //     </Switch>
    //   </div>
    // </Router>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import Typewriter  from 'typewriter-effect';

//import '../node_modules/react-bootstrap/dist/react-bootstrap-icons.css';
//import '../node_modules/react-bootstrap/dist/react-bootstrap-icons.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/aos/dist/aos.js';
import '../node_modules/aos/dist/aos.css';
import ScrollToTop   from "./components/ScrollToTop.jsx";
import Preloader from './components/pre.jsx';
import { About } from './components/about.jsx';
import { Contact } from './components/contact.jsx';
import { Hero } from './components/hero.jsx';

import { Barnav  } from './components/navbar.jsx';
import { Portfolio } from './components/portfolio.jsx';
import { Resume } from './components/resume.jsx';
import { Footer } from './components/footer.jsx';
import React, {useState, useEffect} from "react";

function App() {
  
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  
  
  return (
    <BrowserRouter >
    <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
    

    
      
      
      <Barnav/>
      <ScrollToTop/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Resume/>
      <Contact/>
      <Footer/>
    
    </div>
    </BrowserRouter>
      
  );
}

export default App;

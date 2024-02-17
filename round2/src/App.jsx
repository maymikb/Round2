import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import About from './components/about';

function App() {
 

  return (
    <>
   <Navbar/>
   <About />
    
  
    
    <section id="resume">
        <h1>Resume</h1>

        <p id="description"> 
            <ul>
                <li>Nanny</li>
                <li>Language tutor</li>
                <li>Elemenatary school teacher</li>
            
                    <li>Substitute teacher</li>
                    <li>Tech student</li>
            </ul>
            </p>
    </section>


    <section id="contact">
        <h1>Contact</h1>

        <p id="description"> 
            <ul>
    
                <li>Email: makabs12@gmail.com</li>
                <li>Email: sarrmaymi@gmail.com</li>
                <li>Phone: (650) 8..-....</li>
            </ul>
            </p>
    </section>

    </>
  )
  
}

export default App

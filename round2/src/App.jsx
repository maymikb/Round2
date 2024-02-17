import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects'; 
import Resume from './components/Resume';
import Contacts from './components/Contacts';

function App(){
  const [currentPage, setCurrentPage]=usesState("About")

  return (
    <>
    <h1>{currentPage}</h1>
    <button
     onClick={()=>
      setCurrentPage("About"
      )}
<Click</button>

   <Navbar currentPage={currentPage} set currentPage={setCurrentPage}/>

   <About />
   <Projects/>
   <Resume/>
   <Contacts/>





  
  )
  
}

export default App

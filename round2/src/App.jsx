import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { useState } from 'react';

import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {

  const [currentPage, setCurrentPage] = useState("About")

  function renderCurrentPage () {
    if(currentPage == "About") {
      return <About/>
    }
    if(currentPage == "Projects") {
      return <Projects/>
    }
    if(currentPage == "Resume") {
      return <Resume/>
    }
    if(currentPage == "Contact") {
      return <Contact/>
    }

  }

  return (
    <>


  <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>

    {renderCurrentPage()}

    </>
  )
}

export default App

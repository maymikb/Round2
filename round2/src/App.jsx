import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
 

  return (
    <>
    <nav>
        <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    

    <figure class="myPic">
        <img src="./PortfolioPic.png" alt="myPic"/>  
        <h2>Maymi K. B. Sarr</h2>
    </figure>
         
                
        
    <section id="about">
        <h1>About Me</h1>
        <p id="description">
            Greetings! 
            I am a teacher and language enthusiast making a career change. I am surrounded by 
            technology in the California Bay Area, and coding has always sparked my interest. I speak four langugaes 
            fluently and curently learning others. I am 
            looking forward to joining the tech world, and keeping up with understanding
            its many advances.
            </p>
    </section>

   
    <section id="projects">

        <h1>Projects</h1>
        <div id="container">
        
            <figure class="project">
                <img src="./Project1.png" alt="Project 1 Image"/>
                <figcaption>
                    <h2>Project 1</h2>
                    <p>With a team of three others, the "find-me-food" web page was developed
                        with data from multiple different server-side API requests to solve 
                        the issue of not knowing where to eat. Whether you are new in town, 
                        visiting, or just looking for something different, “find-me-food” 
                        will help you find a restaurant with your desired cuisine and within
                        your set radius.</p>
                    <a href="https://ericrisher.github.io/find-me-food/" target="_blank">View Project</a>
                </figcaption>
            </figure>
    
         
            <figure class="project">
                <img src="./ProjectPlaceholder.png" alt="Project 2 Placeholder Image"/>
                <figcaption>
                    <h2>Project 2</h2>
                    <p>Description of Project 2</p>
                    <a href="project2_url.html" target="_blank">View Project</a>
                </figcaption>
            </figure>
    
           
            <figure class="project">
                <img src="./ProjectPlaceholder.png" alt="Project 3 Placeholder Image"/>
                <figcaption>
                    <h2>Project 3</h2>
                    <p>Description of Project 3</p>
                    <a href="project2_url.html" target="_blank">View Project</a>
                </figcaption>
            </figure>
        </div>

       
    </section>

    
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

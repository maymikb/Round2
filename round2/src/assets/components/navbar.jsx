import React from 'react';

function Navbar({currentPage, setCurrentPage}) {
    return (
            <nav>
        <ul>
            <li
            onClick={()=>
            setCurrentPage("About"
            )}><a href="#about">About Me</a></li>

            <li>
            onClick={()=>
            setCurrentPage("Projects"
            )}<a href="#projects">Projects</a></li>
            
            <li>  onClick={()=>
            setCurrentPage("Resume"
            )}<a href="#resume">Resume</a></li>
            
            <li>  onClick={()=>
            setCurrentPage("Contact"
            )}<a href="#contact">Contact</a></li>
        </ul>
    </nav>
            
    );
}

export default Navbar;
import React from 'react';

function Projects(props) {
    return (
        <>
        <section id="projects">

<h1>Projects</h1>
<div id="container">

    <figure className="project">
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

 
    <figure className="project">
        <img src="./ProjectPlaceholder.png" alt="Project 2 Placeholder Image"/>
        <figcaption>
            <h2>Project 2</h2>
            <p>Description of Project 2</p>
            <a href="project2_url.html" target="_blank">View Project</a>
        </figcaption>
    </figure>

   
    <figure className="project">
        <img src="./ProjectPlaceholder.png" alt="Project 3 Placeholder Image"/>
        <figcaption>
            <h2>Project 3</h2>
            <p>Description of Project 3</p>
            <a href="project2_url.html" target="_blank">View Project</a>
        </figcaption>
    </figure>
</div>


</section>

            
        </>
    );
}

export default Projects;



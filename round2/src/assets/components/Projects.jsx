import React from 'react';

function Projects(props) {

    const data = [
    
        {
            image: "./Project1.png",
            title: "Find Me Food!",
            description: "With a team of three others, the 'find-me-food' web page was developed with data from multiple different server-side API requests to solve  the issue of not knowing where to eat. Whether you are new in town,  visiting, or just looking for something different, “find-me-food”  will help you find a restaurant with your desired cuisine and within your set radius.",
            link: "https://ericrisher.github.io/find-me-food/"
        },
        {
            image: "./PickyPaws.png",
            title: "PickyPaws",
            description: "PickyPaws is an app for pet-lovers. This platform is a space for sharing pet food reviews. With our app users cann leave and read food and ratings reviews left by other pet owners, leave reviews of their own[after their own personal experiences, connect with other pet parents, benefit from nutritional, health/safety comparisons, and quickly learn/figure out what may be best for their pet all in one place!" ,
            link: "https://github.com/EricRisher/picky-paws"
        },
        {
            image: "./ProjectPlaceholder.png",
            title: "Project 3",
            description: "Convenience and shopping! Two of our favorite words!We take your feedback into consideration in order to continue to improve pur user experience! UrbanUptake is a new website to help with the chore of going to the store!",
            
        }
    ]


    return (
        <section id="projects">

        <h1>Projects</h1>
        <div id="container">
                
                    {
                        data.map(project => {
                            return (
                                <>
                                    <figure className="project">
                                    <img src={project.image} alt="find Me Food! Image"/>
                                    <figcaption>
                                        <h2>{project.title}</h2>
                                        <p>{project.description}</p>
                                        <a href={project.link} target="_blank">View Project</a>
                                    </figcaption>
                                </figure>
                                </>

                            )
                            return (
                                <>
                                    <figure className="project">
                                    <img src={project.image} alt="Project Placeholder Image"/>
                                    <figcaption>
                                        <h2>{project.title}</h2>
                                        <p>{project.description}</p>
                                        <a href={project.link} target="_blank">View Project</a>
                                    </figcaption>
                                </figure>
                                </>
                            )
                })
                
            }
    









            {/* <figure className="project">
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
            </figure> */}
        </div>


    </section>
    );
}

export default Projects;
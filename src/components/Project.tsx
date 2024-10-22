import React from "react";

interface Project{
    title: string;
    description : string;
}

const Projects : React.FC = ()=>{

    const ProjectList : Project[]=[
        {title:"first",description:"fmskmgon"},
        {title:"second",description:"dmgfdgno"}
    ];

    return(
        <section>
            <h2>
                Projects
            </h2>
            <p>Hi this are the projects i have done </p>
            <ul>
                {ProjectList.map((project,index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}
                        </p>
                    </li>
                ))}
            </ul>

        </section>
    )
}

export default Projects;
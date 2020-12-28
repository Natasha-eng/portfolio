import React from "react";
import style from './Projects.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project projectName = {"Name of the project"} description = {"Short description of the project"}/>
                    <Project projectName = {"Name of the project"} description = {"Short description of the project"}/>
                    <Project projectName = {"Name of the project"} description = {"Short description of the project"}/>
                    <Project projectName = {"Name of the project"} description = {"Short description of the project"}/>
                    <Project projectName = {"Name of the project"} description = {"Short description of the project"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;

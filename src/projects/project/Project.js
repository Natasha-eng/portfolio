import React from "react";
import style from './Project.module.css'

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.imageContainer}>

                <a href = "#" className={style.button}>Look</a>
            </div>

            <h3>{props.projectName}</h3>
            <div className={style.projectDescription}>{props.description}</div>
        </div>
    )
}

export default Project;
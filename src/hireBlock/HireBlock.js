import React from "react";
import style from './HireBlock.module.css';
import styleContainer from "../common/styles/Container.module.css";


function HireBlock(props) {
    return (
        <div className={style.hireBlock}>
            <div className={styleContainer.container}>
                <div className={style.hire}>
                    <h2>{props.title}</h2>
                    <a href = "#" className={style.hireButton}>Hire me</a>
                </div>

            </div>
        </div>
    );
}

export default HireBlock;
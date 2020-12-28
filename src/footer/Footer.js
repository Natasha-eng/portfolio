import React from "react";
import style from './Footer.module.css';
import styleContainer from './../common/styles/Container.module.css'


function Footer(props) {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footer}`}>
                <h2>Shilova Natallia</h2>
                <div className={style.links}>
                    <a href="#"><i>Facebook</i></a>
                    <a href="#"><i>Twitter</i></a>
                    <a href="#"><i>Linkedin</i></a>
                    <a href="#"><i>Instagram</i></a>
                </div>
                <span>2020 All Rights Reserved</span>
            </div>
        </div>
    );
}

export default Footer;
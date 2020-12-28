import React from "react";
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";


function Contacts(props) {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contacts}`}>

                <h2>Contacts</h2>
                <form  className={style.form} action="#">
                    <input type="text" placeholder={'Name'}/>
                    <input type="text" placeholder={'E-mail'}/>
                    <textarea name="" id="" cols="30" rows="10" placeholder={'Your message'}></textarea>
                </form>
                <a href = "#" className={style.contactButton}>Send message</a>

            </div>

        </div>
    );
}

export default Contacts;

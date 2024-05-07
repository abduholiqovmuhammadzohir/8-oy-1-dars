import React from 'react'
import styles from "./index.module.css"
import edit from "../../assets/edit.png"
import amo from "../../assets/amo.svg"
import telegram from "../../assets/telegram.svg"
import trello from "../../assets/trello.svg"
import bit from "../../assets/bit.svg"
import phone from "../../assets/phone.svg"

function Integratsiya() {
    return (
        <div>
            <h1>Integratsiyalar</h1>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <img src={amo} />
                    <h2>AmoCrm <br /><span>CRM</span></h2>
                </div>
                <img src={edit} alt="" />
            </div>
            <div className={styles.card}>
                <div className={styles.icon}> 
                    <img src={telegram} />
                    <h2>TelegramBot<br /><span>Habar yuboruvchi</span></h2></div>
                <img src={edit} alt="" />
            </div>
            <div className={styles.card}>
                <div className={styles.icon}> 
                    <img src={trello} />
                    <h2>Trello<br /><span>Task Management</span></h2></div>
                <img src={edit} alt="" />
            </div>
            <div className={styles.card}>
                <div className={styles.icon}> 
                    <img src={bit} />
                    <h2>Bitrix<br /><span>CRM</span></h2></div>
                <img src={edit} alt="" />
            </div>
            <div className={styles.card}>
                <div className={styles.icon}> 
                    <img src={phone} />
                    <h2>IP Phone<br /><span>Phone</span></h2></div>
                <img src={edit} alt="" />
            </div>
            <h3>Barcha integratsiyalar</h3>
        </div>
    )
}

export default Integratsiya
import { useState } from "react";
import timer from "../../Images/clock.png"
import styles from "./Timer.module.css"

const Timer = () => {
    const [Timer , setTimer] = useState(1)
    setTimeout(() => {
        if(Timer !== 10)
        setTimer(Timer + 1);
    } , 1000);
    return (
        <div className={styles.timer}>
        <img src={timer} alt="timer" />
        <h1>{Timer}</h1>
        </div>
    )
}
export default Timer;
import React from "react";
import "../styles/App.css";

const Timer = ({minutes, seconds, centi}) => {
    return(
       <div className="timer-container">
        <p>{minutes <= 9 && minutes >= 0? `0${minutes}` : minutes}:{seconds <= 9 && seconds >= 0? `0${seconds}` : seconds}:{centi <= 9 && centi >= 0? `0${centi}` : centi}</p>
       </div>
    )
}

export default Timer;
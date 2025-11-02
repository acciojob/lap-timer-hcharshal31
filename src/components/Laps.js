import React from "react";

const Laps = ({lapsObj}) => {
    const {min, sec, centiSec} = lapsObj;
    return(
        <div>
            <p>{min <= 9 && min >= 0? `0${min}` : min}:{sec <= 9 && sec >= 0? `0${sec}` : sec}:{centiSec <= 9 && centiSec >= 0? `0${centiSec}` : centiSec}</p>
        </div>
    )
}

export default Laps;
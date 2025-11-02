import React, { useEffect, useRef, useState } from "react";
import Timer from "./Timer";
import Laps from "./Laps";
import { FaStopwatch } from "react-icons/fa";
import "../styles/App.css";

const CountTime = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [centi, setCenti] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [lap, setLap] = useState([]);

    const timer = useRef();

    useEffect(()=>{
        if(isRunning){
            timer.current = setInterval(() => {
    setCenti((prev) => {
      if (prev === 99) {
        setSeconds((s) => {
          if (s === 59) {
            setMinutes((m) => m + 1);
            return 0;
          }
          return s + 1;
        });
        return 0;
      }
      return prev + 1;
    });
  }, 10);
        
}
        

  return ()=>{
    clearInterval(timer.ref);

  }
    }, [isRunning])

    const startTimer = () => {
        setIsRunning(true);
    }

    const stopTimer = () => {
        setIsRunning(false);
        console.log("stop");
        clearInterval(timer.current);
    }

    const addLap = () => {
        setLap(lap => [...lap, {
                min: minutes,
                sec: seconds,
                centiSec: centi,
            }])
    }

    const resetTimer = () => {
        setIsRunning(false);
        setMinutes(0);
        setSeconds(0);
        setCenti(0);
        setLap([]);
        clearInterval(timer.current);
    }

    return(
        <div>
            <Timer minutes={minutes} seconds={seconds} centi={centi} />
            <div className="button-div">
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={addLap}>Lap</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
            <div className="lap-container">
                {
                    lap.map((item, index)=>{
                        return(
                            <div className="lap-row">
                                <span>{index+1}.</span><Laps key={index} lapsObj={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default CountTime;
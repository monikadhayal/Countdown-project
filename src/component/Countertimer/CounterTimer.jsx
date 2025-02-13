// //  import React, { useRef, useState } from "react";
// import { useState } from "react";
// import { useRef } from "react";
import React, { useRef, useState ,useEffect } from "react";

export default function CounterTimer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false); 
  const [isPause, setIsPause] = useState(false);
   
  const intervalRef = useRef(null);

  const handleInput =(event) => {
    setTime(parseInt(event.target.value * 60));
  }

  const formatTime = () => {
    const min = String(Math.floor(time/60)).padStart(2,'0');
    const sec = String(time%60).padStart(2,'0');
    return `${min} : ${sec}`
  }

  const handleStart = () => {
    setIsActive(true);
    setIsPause(false);
  }
  // const handlePause =() => {

  // }
  useEffect(()=>{
       if(isActive && ! isPause && time >0){
             intervalRef.current = setInterval(()=>{
              setTime((prev) => prev-1)
            },1000)
       }
       else if(time === 0){
        clearInterval(intervalRef.current);
        setIsActive(false);
        alert('time is up')
       }
       return () => clearInterval(intervalRef.current);   
       } , [isActive,isPause,time])

       const handlePause = () => {
        setIsPause(!isPause)
       }
       const handleReset = () => {
         clearInterval(intervalRef.current);
         setIsActive(false);
         setIsPause(false);
         setTime(0);
       }
  return (
    <div className="flex  justify-center items-center h-screen bg-gray-100 text-2xl mb-5 flex-col font-sans">

      <h1>Countdown Timer</h1>

      <div className="text-2xl mb-5 flex flex-col items-center">

        <input 
        type="number"
         placeholder="Enter time in minutes"
        onChange={handleInput} />

        <div>{formatTime()}</div>

        <div className="flex gap-2.5">

          <button 
          onClick={handleStart}
          disabled = {isActive && !isPause}
          className="bg-blue-500 px-5 py-2 text-base border-none rounded-md">
          Start
          </button>

          <button 
          onClick={handlePause} 
          disabled = {!isActive}
          className="bg-blue-500 px-5 py-2 text-base border-none rounded-md">
            {isPause ? 'Resume' : 'Pause'}
          </button>

          <button  onClick={handleReset} className="bg-blue-500 px-5 py-2 text-base border-none rounded-md">
            Reset
          </button>

        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useState } from "react";

export default function CounterTimer() {
  const[time,setTime] = useState(0);

  const handleInput =(event) => {
    setTime(parseInt(event.target.value * 60));
  }

  const formatTime = () => {
    const min = String(Math.floor(time/60)).padStart(2,'0');
    const sec = String(time%60).padStart(2,'0');
    return `${min} : ${sec}`
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

          <button className="bg-blue-500 px-5 py-2 text-base border-none rounded-md">
            Start
          </button>
          <button className="bg-blue-500 px-5 py-2 text-base border-none rounded-md">
            Pause
          </button>
          <button className="bg-blue-500 px-5 py-2 text-base border-none rounded-md">
            Reset
          </button>

        </div>
      </div>
    </div>
  );
}

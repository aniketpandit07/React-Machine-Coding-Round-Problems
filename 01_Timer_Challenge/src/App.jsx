
import { useEffect, useState } from 'react'
import './App.css'
import InputTimer from './InputTimer'
import ShowTImer from './ShowTImer'

function App() {
  const [isStart, setIsStart] = useState(false)
  const [isPause, setIsPause] = useState(false)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [timerId, setTimerId] = useState(0)


  function startHandler() {
    if (hours < 0 || minutes < 0 || seconds < 0) {
      alert("Invalid Input")
      return
    } else {
      setIsStart(true)
    }
  }

  function pauseHandler() {
    setIsPause(true)
    clearInterval(timerId)
  }

  function resumeHandler() {
    setIsPause(false)
    runtimer(seconds, minutes, hours)

  }

  function resetHandler() {
    setIsStart(false)
   resetTimer()
  }

  function resetTimer(){
    setHours(0)
    setMinutes(0)
    setSeconds(0)
    clearInterval(timerId)

  }
  function handleInput(e) {
    console.log(e.target.value, e.target.id)
    const value = parseInt(e.target.value)
    const id = e.target.id
    if (id === 'hours') {
      setHours(value)
    } else if (id === 'minutes') {
      setMinutes(value)
    } else {
      setSeconds(value)
    }
  }


  const runtimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSeconds((s) => s - 1)
    } else if (sec === 0 && min > 0) {
      setMinutes((m) => m - 1)
      setSeconds(59)
    } else {
      setHours((h) => h - 1)
      setMinutes(59)
      setSeconds(59)
    }

    if (sec === 0 && min === 0 && hr === 0) {
     resetTimer()
      alert("Timer is finished")
      clearInterval(tid)
      return
    }
  }
  useEffect(() => {
    let tid;
    if (isStart) {

      tid = setInterval(() => {
        runtimer(seconds, minutes, hours, tid)
      }, 1000);
      setTimerId(tid)
    }
    return () => {
      clearInterval(tid)
    }
  }, [isStart, hours, minutes, seconds])
  console.log(hours, minutes, seconds)


  return (
    <>
      <h1>Countdown Timer</h1>
      {
        !isStart && <InputTimer handleInput={handleInput} startHandler={startHandler}/>
      }

      {
        isStart && <ShowTImer hours={hours} minutes={minutes} seconds={seconds} isPause={isPause} pauseHandler={pauseHandler} resetHandler={resetHandler} resumeHandler={resumeHandler} />
      }
    </>
  )
}

export default App

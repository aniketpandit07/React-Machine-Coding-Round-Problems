/* eslint-disable react/prop-types */

const ShowTImer = (props) => {
    const{hours, minutes, seconds, isPause, pauseHandler, resumeHandler, resetHandler} = props
  return (
    <div className='show-container'>
            <div className='timer-box'>
              <div>{hours < 10 ? `0${hours}` : hours}</div>
              <span>:</span>
              <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
              <span>:</span>
              <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
            </div>
            <div className='action-box'>
              {
                !isPause && <button onClick={pauseHandler} className='timer-btn'>Pause</button>
              }
              {
                isPause && <button onClick={resumeHandler} className='timer-btn'>Resume</button>
              }
              <button onClick={resetHandler} className='timer-btn'>Reset</button>
            </div>
          </div>
  )
}

export default ShowTImer

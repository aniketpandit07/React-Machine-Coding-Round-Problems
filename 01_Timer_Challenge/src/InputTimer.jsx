/* eslint-disable react/prop-types */


const InputTimer = ({handleInput,startHandler}) => {
  return (
    <div className='input-container'>
    <div className='input-box'>
      <input onChange={handleInput} type="text" id='hours' placeholder='HH' />
      <input onChange={handleInput} type="text" id='minutes' placeholder='MM' />
      <input onChange={handleInput} type="text" id='seconds' placeholder='SS' />
    </div>
    <button onClick={startHandler} className='timer-btn'>Start</button>
  </div>
  )
}

export default InputTimer

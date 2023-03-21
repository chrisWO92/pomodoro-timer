import React from 'react'
import './timer-label.css'

const TimerLabel = ({displayTime, countID, setCountID}) => {

  const formatTime = (time) => {
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    return(
       (minutes < 10 ? '0' + minutes : minutes) + ":" + (seconds < 10 ? '0' + seconds : seconds)
    );
  }

  return (
    <div id='timer-label'>
      <div id="string">
        {countID}
      </div>
      <div id="time-left">
        {formatTime(displayTime)}
      </div>
    </div>
  )
}

export default TimerLabel

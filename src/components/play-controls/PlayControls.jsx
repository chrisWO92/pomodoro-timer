import React from 'react'
import './play-controls.css'
import {BsFillPlayFill} from 'react-icons/bs'
import {BsFillPauseFill} from 'react-icons/bs'
import {GrPowerReset} from 'react-icons/gr'

const PlayControls = ({playB, pause, reset}) => {

  return (
    <div id='button-controls'>
        <div 
          id="start-pause" 
          className='pointer'
        >
            <BsFillPlayFill id='start-icon' onClick={playB}/>
            <BsFillPauseFill id='pause-icon' onClick={pause}/>
        </div>
        <div 
          id="reset" 
          className='pointer'
          onClick={reset}
        >
            <GrPowerReset id='reset-icon'/>
        </div>
    </div>
  )
}

export default PlayControls

import React from 'react'
import './play-controls.css'
import {BsFillPlayFill} from 'react-icons/bs'
import {BsFillPauseFill} from 'react-icons/bs'
import {GrPowerReset} from 'react-icons/gr'

const PlayControls = ({playpause, reset}) => {

  return (
    <div id='button-controls'>
        <div 
          id="start-pause" 
          className='pointer'
          onClick={playpause}
        >
            <BsFillPlayFill id='start-icon' />
            <BsFillPauseFill id='pause-icon' />
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

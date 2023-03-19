import React from 'react'
import './play-controls.css'
import {BsFillPlayFill} from 'react-icons/bs'
import {BsFillPauseFill} from 'react-icons/bs'
import {GrPowerReset} from 'react-icons/gr'

const PlayControls = () => {
  return (
    <div id='button-controls'>
        <div id="start-pause" className='pointer'>
            <BsFillPlayFill id='start-icon'/>
            <BsFillPauseFill id='pause-icon'/>
        </div>
        <div id="reset" className='pointer'>
            <GrPowerReset id='reset-icon'/>
        </div>
    </div>
  )
}

export default PlayControls

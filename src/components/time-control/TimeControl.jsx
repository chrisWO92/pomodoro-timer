import React from 'react'
import './time-control.css'
import {BsChevronDown} from 'react-icons/bs'
import {BsChevronUp} from 'react-icons/bs'

const TimeControl = () => {
  return (
    <div id='time-control'>
        <div id="break-label">
            Break Length
            <div id="break-control">
                <BsChevronDown className='pointer'/>
                <div id="break-length">
                    5
                </div>
                <BsChevronUp className='pointer'/>
            </div>
        </div>
        <div id="session-label">
            Session Length
            <div id="session-control">
                <BsChevronDown className='pointer'/>
                <div id="session-length">
                    25
                </div>
                <BsChevronUp className='pointer'/>
            </div>
        </div>      
    </div>
  )
}

export default TimeControl

import React, { useState } from 'react'
import './time-control.css'
import {BsChevronDown} from 'react-icons/bs'
import {BsChevronUp} from 'react-icons/bs'

const TimeControl = ({breakTime, sessionTime, setDisplayTime, setBreakTime, setSessionTime}) => {


const changeTime = (action) => {
    if (action === 'break-down'){
        if (breakTime <= 60){
            setBreakTime(60);
        }else{
            setBreakTime(prevBreakTime => prevBreakTime - 60);
        }
    }else if (action === 'break-up'){
        if (breakTime >= 60*60){
            setBreakTime(60*60);
        }else{
            setBreakTime(prevBreakTime => prevBreakTime + 60);
        }
    }else if (action === 'session-down'){
        if (sessionTime <= 60){
            setSessionTime(60);
        }else{
            setSessionTime(prevSessionTime => prevSessionTime - 60);
            setDisplayTime(prevDisplayTime => prevDisplayTime - 60);
        }
    }else {
        if (sessionTime >= 60*60){
            setSessionTime(60*60);
            setDisplayTime(60*60);
        }else{
            setSessionTime(prevSessionTime => prevSessionTime + 60);
            setDisplayTime(prevDisplayTime => prevDisplayTime + 60);
        }
    }
}

  return (
    <div id='time-control'>
        <div id="break-label">
            Break Length
            <div id="break-control">
                <BsChevronDown
                    className='pointer'
                    onClick={() => changeTime('break-down')}
                />
                <div id="break-length">
                    {Math.floor(breakTime/60)}
                </div>
                <BsChevronUp 
                    className='pointer'
                    onClick={() => changeTime('break-up')}
                />
            </div>
        </div>
        <div id="session-label">
            Session Length
            <div id="session-control">
                <BsChevronDown 
                    className='pointer'
                    onClick={() => changeTime('session-down')}
                />
                <div id="session-length">
                    {Math.floor(sessionTime/60)}
                </div>
                <BsChevronUp 
                    className='pointer'
                    onClick={() => changeTime('session-up')}
                />
            </div>
        </div>      
    </div>
  )
}

export default TimeControl

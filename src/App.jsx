import { useEffect, useState, useRef } from "react";
import Title from './components/title/Title'
import TimerControl from './components/time-control/TimeControl'
import TimerLabel from "./components/timer-label/TimerLabel";
import PlayControls from "./components/play-controls/PlayControls";
import './app.css';

const App = () => {

  const [displayTime, setDisplayTime] = useState(25*60);
  const [breakTime, setBreakTime] = useState(5*60);
  const [sessionTime, setSessionTime] = useState(25*60);
  const [countID, setCountID] = useState('Session');
  const [play, setPlay] = useState(false);
  const beep = useRef();

  useEffect(() => {
    if (displayTime === 0){
      if (countID === 'Session') {
        setDisplayTime(breakTime);
        setCountID('Break');
      }else{
        setDisplayTime(sessionTime);
        setCountID('Session');
      }
      beep.current.play();
    }
  }, [displayTime, countID, breakTime, sessionTime]);


  useEffect(() => {
    let interval = null;
    if (play) {
      interval = setInterval(() => {
        setDisplayTime(prevDisplayTime => prevDisplayTime - 1);
      }, 300);
    }else{
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [play]);

  const playpause = () => {
    setPlay(!play);    
  }

  const reset = () => {
    setDisplayTime(25*60);
    setBreakTime(5*60);
    setSessionTime(25*60);
    setCountID('Session');
    setPlay(false);
    beep.current.load();
  }

  return (
    <div id="app-container">
      <Title />
      <TimerControl 
        breakTime={breakTime}
        sessionTime={sessionTime}
        setDisplayTime={setDisplayTime}
        setBreakTime={setBreakTime}
        setSessionTime={setSessionTime}
      />
      <TimerLabel
        displayTime={displayTime}
        countID={countID}
      />
      <PlayControls
        playpause={playpause}
        reset={reset}
      />
      <audio
        ref={beep}
        id="beep" 
        preload="auto"   
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" 
      />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import Title from './components/title/Title'
import TimerControl from './components/time-control/TimeControl'
import TimerLabel from "./components/timer-label/TimerLabel";
import PlayControls from "./components/play-controls/PlayControls";
import './app.css';

const App = () => {

  const [displayTime, setDisplayTime] = useState(60);
  const [breakTime, setBreakTime] = useState(5*60);
  const [sessionTime, setSessionTime] = useState(60);
  const [countID, setCountID] = useState('Session');
  const [play, setPlay] = useState(false);
  var interval;


  /*lo que se me ocurre hacer es usar useEffect para hacer la consulta if (displayTime === 0), y hacer allí la actualización de estados pertinente*/

  useEffect(() => {
    console.log(displayTime);
    if (displayTime === 0){
      console.log('true');
    }
  }, [displayTime]);


  const updateSessionCount = () => {
    if (displayTime === 0) {
        if (countID === 'Session') {
            setDisplayTime(breakTime);
            setCountID('Break');
        }else{
            setDisplayTime(sessionTime);
            setCountID('Session');
        }
    }else{
        setDisplayTime(prevDisplayTime => prevDisplayTime - 1);
    }
  }

  // const playpause = () => {
  //   //setPlay(!play);
  //   if (play === true){
  //       interval = setInterval(updateSessionCount, 300);
  //       //clearInterval(interval);
  //   }else{
  //     //clearInterval(interval);
  //   }
  // }

  const playB = () => {
    if (play === true) {
      return;
    }else{
      setPlay(true);
      interval = setInterval(updateSessionCount, 300);
    }
    
  }

  const pause = () => {
    if (play === false) {
      return;
    }else{
      setPlay(false);
      clearInterval(interval);
    }
    
  }

  const reset = () => {
    pause();
    setDisplayTime(60);
    setBreakTime(5*60);
    setSessionTime(60);
    setCountID('Session');
    setPlay(false);
    clearInterval(interval);
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
        playB={playB}
        pause={pause}
        reset={reset}
      />
    </div>
  );
}

export default App;

import { useState } from "react";
import Title from './components/title/Title'
import TimerControl from './components/time-control/TimeControl'
import TimerLabel from "./components/timer-label/TimerLabel";
import PlayControls from "./components/play-controls/PlayControls";
import './app.css';

const App = () => {
  return (
    <div id="app-container">
      <Title />
      <TimerControl />
      <TimerLabel />
      <PlayControls />
    </div>
  );
}

export default App;

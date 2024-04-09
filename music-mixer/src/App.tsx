// src/App.tsx
import './App.css';
import React from 'react';
import Mixer from './Components/MusicMixer';

const App: React.FC = () => {
  const tracks = ['Track 1', 'Track 2', 'Track 3'];

  return (
    <div className="App">
      <Mixer tracks={tracks} />
    </div>
  );
};

// checked, completion receipt for exercise 7

export default App;
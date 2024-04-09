// MusicMixerApp.js
import React from 'react';
import Instrument from './Instrument';
import soundWaves from '../Sounds';
import './MusicMixerApp.css';

const MusicMixerApp = () => {
  return (
    <div className="music-mixer-app">
      <h1>React Music Mixer</h1>
      <div className="instrument-container">
        {soundWaves.map((wave, index) => (
          <Instrument key={index} name={wave.name} wave={wave.wave} />
        ))}
      </div>
    </div>
  );
};

export default MusicMixerApp;
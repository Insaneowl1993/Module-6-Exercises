// MusicMixer.js
import React from 'react';
import Instrument from './Instrument';
import soundWaves from '../Sounds';

function MusicMixer() {
  return (
    <div>
      <h1>React Music Mixer</h1>
      {soundWaves.map((wave, index) => (
        <Instrument key={index} name={wave.name} wave={wave.wave} />
      ))}
    </div>
  );
}

export default MusicMixer;
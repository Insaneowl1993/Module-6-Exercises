import React, { useState, useEffect } from 'react';

export default function Instrument({ name, wave }) {
  const [isPlaying, setIsPlaying] = useState(null);
  const [audioContext, setAudioContext] = useState(null);
  const [frequency, setFrequency] = useState(440);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    setAudioContext(new (window.AudioContext || window.webkitAudioContext)());
  }, []);

  const playSound = () => {
    const osc = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    osc.type = wave;
    osc.frequency.setValueAtTime(frequency, audioContext.currentTime);
    osc.connect(gainNode);
    gainNode.connect(audioContext.destination);

    gainNode.gain.setValueAtTime(volume, audioContext.currentTime);

    osc.start();
    return { osc, gainNode };
  };

  const handleFrequencyChange = (event) => {
    setFrequency(Number(event.target.value));
    if (isPlaying) {
      isPlaying.osc.frequency.setValueAtTime(Number(event.target.value), audioContext.currentTime);
    }
  };

  const handleVolumeChange = (event) => {
    setVolume(Number(event.target.value));
    if (isPlaying) {
      isPlaying.gainNode.gain.setValueAtTime(Number(event.target.value), audioContext.currentTime);
    }
  };

  const handleClick = () => {
    if (isPlaying) {
      isPlaying.osc.stop();
      setIsPlaying(null);
    } else {
      setIsPlaying(playSound());
    }
  };

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={handleClick}>{isPlaying ? 'Stop' : 'Play'}</button>

      <div>
        <label>Frequency:</label>
        <input
          type="range"
          min="20"
          max="2000"
          value={frequency}
          onChange={handleFrequencyChange}
        />
        <span>{frequency.toFixed(2)} Hz</span>
      </div>

      <div>
        <label>Volume:</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <span>{volume.toFixed(2)}</span>
      </div>
    </div>
  );
}
import { useState, useMemo } from 'react';

const GlobalSettings = ({ settings, handleUpdate }) => {
  const [bpm, setBpm] = useState(settings.bpm);

  const handleBPMChange = (value) => {
    setBpm(value);
    handleUpdate('bpm', value);
  };

  return (
    <ul>
      <li>
        <label htmlFor='bpm'>BPM</label>
        <input
          type='number'
          id='bpm'
          value={bpm}
          min='0'
          max='350'
          onChange={(e) => handleBPMChange(e.target.value)}
        />
      </li>

      <li>
        <label htmlFor='paused'>Pause</label>
        <input
          type='checkbox'
          checked={settings.checked}
          onChange={(e) => handleUpdate('paused', e.target.checked)}
        />
      </li>
    </ul>
  );
};

export default GlobalSettings;

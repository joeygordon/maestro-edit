import { useState } from 'react';
import styled from 'styled-components';

const GlobalSettingsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
`;

const BPMInput = styled.input`
  font-size: 1em;
  margin-right: 0.3em;
`;

const GlobalSettings = ({ settings, handleUpdate }) => {
  const [bpm, setBpm] = useState(settings.bpm);

  const handleBPMChange = (value) => {
    setBpm(value);
    handleUpdate('bpm', value);
  };

  return (
    <GlobalSettingsContainer>
      <div>
        <BPMInput
          type='number'
          id='bpm'
          value={bpm}
          min='0'
          max='350'
          onChange={(e) => handleBPMChange(e.target.value)}
        />
        <label htmlFor='bpm'>BPM</label>
      </div>

      <div>
        <input
          id='paused'
          type='checkbox'
          checked={settings.checked}
          onChange={(e) => handleUpdate('paused', e.target.checked)}
        />
        <label htmlFor='paused'>Pause</label>
      </div>
    </GlobalSettingsContainer>
  );
};

export default GlobalSettings;

import styled from 'styled-components';

import AttenuationSelect from './AttenutationSelect';

const ChannelSettingsContainer = styled.div`
  background: #292929;
  border-bottom: 3px solid #666666;
  padding: 1em;
  margin-bottom: 1em;
`;

const ChannelSettings = ({ settings, handleUpdate }) => {
  return (
    <ChannelSettingsContainer>
      <input
        type='checkbox'
        id='mute'
        checked={settings['mute'] === 1 ? true : false}
        onChange={(cb) => handleUpdate('mute', cb.target.checked ? 1 : 0)}
      />
      <label htmlFor='mute'>Mute</label>

      <AttenuationSelect
        handleSelect={handleUpdate}
        selectedAmount={settings['attenuationShift']}
      />
    </ChannelSettingsContainer>
  );
};

export default ChannelSettings;

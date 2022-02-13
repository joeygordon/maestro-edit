import styled from 'styled-components';

import StepSettings from './StepSettings';
import ChannelSettings from './ChannelSettings';

const AddChainButton = styled.button`
  display: block;
  border: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  padding: 0;
  margin: 1rem auto;
  font-size: 2em;
  background: #666666;
  color: #dddddd;
  line-height: 35px;
  cursor: pointer;

  &:before {
    content: '';
    display: inline-block;
    height: 40px;
    vertical-align: middle;
  }
`;

const Settings = ({
  channelSettings,
  handleSettingsUpdate,
  handleAddChainStep,
}) => {
  const renderSettingsRow = () => {
    return channelSettings['chains'].map((step, i) => {
      return (
        <StepSettings
          key={`chain-${i}`}
          chainIdx={i}
          channelSettings={channelSettings}
          handleSettingsUpdate={handleSettingsUpdate}
        />
      );
    });
  };

  return (
    <>
      <ChannelSettings
        settings={channelSettings}
        handleUpdate={handleSettingsUpdate}
      />
      {renderSettingsRow()}
      {channelSettings['chains'].length < 32 ? (
        <AddChainButton onClick={handleAddChainStep}>+</AddChainButton>
      ) : null}
    </>
  );
};

export default Settings;

import { useEffect, useState } from 'react';

import SettingsRow from './SettingsRow';

const Settings = ({ channelSettings, handleSettingsUpdate }) => {
  // const [selectedChannelSettings, setSelectedChannelSettings] = useState({});

  // useEffect(() => {
  //   const selectedSettings = channelSettings.getIn([activeChannel.toString()]);
  //   setSelectedChannelSettings(selectedSettings.toJS());
  // }, [activeChannel, channelSettings]);

  return (
    <SettingsRow
      channelSettings={channelSettings}
      handleSettingsUpdate={handleSettingsUpdate}
    />
  );
};

export default Settings;

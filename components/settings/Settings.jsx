import SettingsRow from './SettingsRow';

const Settings = ({ channelSettings, handleSettingsUpdate }) => {
  return (
    <SettingsRow
      channelSettings={channelSettings}
      handleSettingsUpdate={handleSettingsUpdate}
    />
  );
};

export default Settings;

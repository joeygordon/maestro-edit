import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { fromJS } from 'immutable';

import ChannelTabs from '../components/ChannelTabs';
import Settings from '../components/settings/Settings';

import defaultSettings from '../data/defaultSettings';

const Editor = () => {
  const defaults = fromJS({
    0: defaultSettings,
    1: defaultSettings,
    2: defaultSettings,
    3: defaultSettings,
    4: defaultSettings,
    5: defaultSettings,
  });

  const [activeTab, setActiveTab] = useState(0);
  const [currentSettings, setCurrentSettings] = useState(defaults);

  // how to update a thing
  // useEffect(() => {
  //   const newSettings = currentSettings.setIn(
  //     ['1', 'randomSeed'],
  //     'joey rules'
  //   );
  //   setCurrentSettings(newSettings);
  // }, [currentSettings]);

  const handleSelectTab = (tab) => {
    setActiveTab(tab);
  };

  const handleSettingsUpdate = (setting, value) => {
    const newSettings = currentSettings.setIn(
      [activeTab.toString(), setting],
      value
    );
    setCurrentSettings(newSettings);
  };

  return (
    <>
      <Head>
        <title>Maestro Edit</title>
        <meta name='description' content='Acid Rain Maestro editor' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ChannelTabs handleSelectTab={handleSelectTab} activeTab={activeTab} />

      <Settings
        handleSettingsUpdate={handleSettingsUpdate}
        channelSettings={currentSettings.getIn([activeTab.toString()]).toJS()}
      />
    </>
  );
};

export default Editor;

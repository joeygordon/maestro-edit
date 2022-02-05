import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { fromJS } from "immutable";

import ChannelTabs from "../components/ChannelTabs";
import Settings from "../components/settings/Settings";

import defaultSettings from "../data/defaultSettings";

const Editor = () => {
  const defaults = fromJS({
    0: defaultSettings,
    1: defaultSettings,
    2: defaultSettings,
    3: defaultSettings,
    4: defaultSettings,
    5: defaultSettings,
  });

  const [activeTab, setActiveTab] = useState(1);
  const [currentSettings, setCurrentSettings] = useState(defaults);

  // how to update a thing
  // const newSettings = defaults.setIn(['1', 'randomSeed'], 'joey rules');
  // console.log('newOne', newSettings);

  const handleSelectTab = (tab) => {
    setActiveTab(tab);
  };

  const handleSettingsUpdate = (updatedSettings) => {
    setCurrentSettings(defaults);
  };

  return (
    <>
      <Head>
        <title>Maestro Edit</title>
        <meta name="description" content="Acid Rain Maestro editor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChannelTabs handleSelectTab={handleSelectTab} activeTab={activeTab} />

      <Settings channelSettings={currentSettings} activeChannel={activeTab} />
    </>
  );
};

export default Editor;

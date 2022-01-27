import React, { useState } from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import ChannelTabs from '../components/ChannelTabs'
import Settings from '../components/settings/Settings'

const Editor = () => {
  const [activeTab, setActiveTab] = useState(1)
  const [currentSettings, setCurrentSettings] = useState({})
  const [isChain, setIsChain] = useState(false)

  const handleSelectTab = (tab) => {
    setActiveTab(tab)
  }

  return (
    <>
      <Head>
        <title>Maestro Edit</title>
        <meta name="description" content="Acid Rain Maestro editor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChannelTabs
        handleSelectTab={handleSelectTab}
        activeTab={activeTab}
      />

      <Settings
        channelSettings={currentSettings}
        activeChannel={activeTab}
      />
    </>
  )
}

export default Editor
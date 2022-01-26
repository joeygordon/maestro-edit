import React, { useState } from 'react'
import styled from 'styled-components'
import Head from 'next/head'

import Settings from '../components/settings/Settings'

const ChannelTabs = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 0 2em;
  padding: 0;
  gap: 8px;

  li {
    flex-grow: 1;
    list-style: none;
  }

  button {
    width: 100%;
    border: none;
    border-radius: 4px;
    background: #eeeeee;
    padding: 3px;
    text-align: center;
    font-size: 1em;
    cursor: pointer;

    &:hover {
      background: #dddddd;
    }

    &.active {
      background: #cccccc;
    }
  }
`

const Editor = () => {
  const [activeTab, setActiveTab] = useState(1)
  const [currentSettings, setCurrentSettings] = useState({});

  const handleTabSelect = (tab) => {
    setActiveTab(tab)
  }

  return (
    <>
      <Head>
        <title>Maestro Edit</title>
        <meta name="description" content="Acid Rain Maestro editor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChannelTabs>
        <li><button type="button" className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabSelect(1)}>I</button></li>
        <li><button type="button" className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabSelect(2)}>II</button></li>
        <li><button type="button" className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabSelect(3)}>III</button></li>
        <li><button type="button" className={activeTab === 4 ? 'active' : ''} onClick={() => handleTabSelect(4)}>IV</button></li>
        <li><button type="button" className={activeTab === 5 ? 'active' : ''} onClick={() => handleTabSelect(5)}>V</button></li>
        <li><button type="button" className={activeTab === 6 ? 'active' : ''} onClick={() => handleTabSelect(6)}>VI</button></li>
      </ChannelTabs>

      <Settings channelSettings='' />
    </>
  )
}

export default Editor
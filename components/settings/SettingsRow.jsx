import React, { useState } from 'react';
import styled from 'styled-components';

import ratios from '../../data/ratios';

const SettingsRow = ({ channelSettings, handleSettingsUpdate, chainIndex }) => {
  const [attenuationShift, setAttenuationShift] = useState(
    channelSettings['attenuationShift']
  );
  const [randomSeed, setRandomSeed] = useState(channelSettings['randomSeed']);
  const [stepRatioIdx, setStepRatioIdx] = useState(
    channelSettings['stepRatioIdx']
  );
  const [stepSmooth, setStepSmooth] = useState(channelSettings['stepSmooth']);
  const [stepBipolar, setStepBipolar] = useState(
    channelSettings['stepBipolar']
  );

  const handleUpdate = (setting, value) => {
    handleSettingsUpdate(setting, value);
  };

  const RenderSettings = () => {
    return (
      <>
        {Object.keys(channelSettings).map((key) => (
          <div key={key}>
            {key}: {channelSettings[key]}
          </div>
        ))}
      </>
    );
  };

  const RenderRatios = () => (
    <>
      {ratios.map((r) => {
        return (
          <React.Fragment key={r.id}>
            <input
              type='radio'
              id={`ratio-${r.id}`}
              name='ratio'
              value={r.id}
              checked={channelSettings['ratio'] === r.id}
              onChange={() => handleUpdate('ratio', r.id)}
            />
            <label htmlFor={`ratio-${r.id}`}>{r.title}</label>
          </React.Fragment>
        );
      })}
    </>
  );

  return (
    <>
      <RenderSettings />
      <hr />

      <input
        type='checkbox'
        id='mute'
        checked={channelSettings['mute'] === 1 ? true : false}
        onChange={(cb) => handleUpdate('mute', cb.target.checked ? 1 : 0)}
      />
      <label htmlFor='mute'>Mute</label>

      <input
        type='checkbox'
        id='smooth'
        checked={channelSettings['smooth'] === 1 ? true : false}
        onChange={(cb) => handleUpdate('smooth', cb.target.checked ? 1 : 0)}
      />
      <label htmlFor='smooth'>Smooth</label>

      <input
        type='checkbox'
        id='bipolar'
        checked={channelSettings['bipolar'] === 1 ? true : false}
        onChange={(cb) => handleUpdate('bipolar', cb.target.checked ? 1 : 0)}
      />
      <label htmlFor='bipolar'>Bipolar</label>

      <br />
      <hr />

      <input
        type='radio'
        id='shape-0'
        name='shape'
        value='0'
        checked={channelSettings['stepShape'] === 0}
        onChange={(e) => handleUpdate('stepShape', 0)}
      />
      <label htmlFor='shape-0'>Ramp Up</label>
      <input
        type='radio'
        id='shape-1'
        name='shape'
        value='1'
        checked={channelSettings['stepShape'] === 1}
        onChange={(e) => handleUpdate('stepShape', 1)}
      />
      <label htmlFor='shape-1'>Ramp Down</label>
      <input
        type='radio'
        id='shape-2'
        name='shape'
        value='2'
        checked={channelSettings['stepShape'] === 2}
        onChange={(e) => handleUpdate('stepShape', 2)}
      />
      <label htmlFor='shape-2'>High</label>
      <input
        type='radio'
        id='shape-3'
        name='shape'
        value='3'
        checked={channelSettings['stepShape'] === 3}
        onChange={(e) => handleUpdate('stepShape', 3)}
      />
      <label htmlFor='shape-3'>Low</label>
      <input
        type='radio'
        id='shape-4'
        name='shape'
        value='4'
        checked={channelSettings['stepShape'] === 4}
        onChange={(e) => handleUpdate('stepShape', 4)}
      />
      <label htmlFor='shape-4'>Triangle Up</label>
      <input
        type='radio'
        id='shape-5'
        name='shape'
        value='5'
        checked={channelSettings['stepShape'] === 5}
        onChange={(e) => handleUpdate('stepShape', 5)}
      />
      <label htmlFor='shape-5'>Triangle Down</label>
      <input
        type='radio'
        id='shape-6'
        name='shape'
        value='6'
        checked={channelSettings['stepShape'] === 6}
        onChange={(e) => handleUpdate('stepShape', 6)}
      />
      <label htmlFor='shape-6'>Square</label>
      <input
        type='radio'
        id='shape-7'
        name='shape'
        value='7'
        checked={channelSettings['stepShape'] === 7}
        onChange={(e) => handleUpdate('stepShape', 7)}
      />
      <label htmlFor='shape-7'>Random</label>

      <hr />

      <RenderRatios />
    </>
  );
};

export default SettingsRow;

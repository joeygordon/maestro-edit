import React, { useState } from 'react';
import styled from 'styled-components';

import ratios from '../../data/ratios';
import shapes from '../../data/shapes';

const RowContainer = styled.div`
  background: #292929;
  border-bottom: 3px solid #666666;
  padding: 1em;
  margin-bottom: 2em;
`;

const SettingsRow = ({ channelSettings, handleSettingsUpdate, chainIdx }) => {
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

  const ratio =
    chainIdx > 0
      ? channelSettings.chains[chainIdx]['stepRatioIdx']
      : channelSettings['ratio'];

  const smooth =
    chainIdx > 0
      ? channelSettings.chains[chainIdx]['stepSmooth']
      : channelSettings['smooth'];

  const bipolar =
    chainIdx > 0
      ? channelSettings.chains[chainIdx]['stepBipolar']
      : channelSettings['bipolar'];

  const shape = channelSettings.chains[chainIdx]['stepShape'];

  const RenderRatios = () => (
    <>
      {ratios.map((r) => {
        return (
          <React.Fragment key={r.id}>
            <input
              type='radio'
              id={`ratio-${r.id}-${chainIdx}`}
              name='ratio'
              value={r.id}
              checked={ratio === r.id}
              onChange={() => handleUpdate('ratio', r.id, chainIdx)}
            />
            <label htmlFor={`ratio-${r.id}-${chainIdx}`}>{r.title}</label>
          </React.Fragment>
        );
      })}
    </>
  );

  const RenderShapes = () => (
    <>
      {shapes.map((s) => {
        return (
          <React.Fragment key={s.id}>
            <input
              type='radio'
              id={`shape-${s.id}-${chainIdx}`}
              name='shape'
              value={s.id}
              checked={shape === s.id}
              onChange={(e) => handleUpdate('stepShape', s.id, chainIdx)}
            />
            <label htmlFor={`shape-${s.id}-${chainIdx}`}>{s.title}</label>
          </React.Fragment>
        );
      })}
    </>
  );

  return (
    <RowContainer>
      {chainIdx}
      <input
        type='checkbox'
        id='mute'
        checked={channelSettings['mute'] === 1 ? true : false}
        onChange={(cb) =>
          handleUpdate('mute', cb.target.checked ? 1 : 0, chainIdx)
        }
      />
      <label htmlFor='mute'>Mute</label>

      <input
        type='checkbox'
        id={`smooth-${chainIdx}`}
        checked={smooth === 1 ? true : false}
        onChange={(cb) =>
          handleUpdate('smooth', cb.target.checked ? 1 : 0, chainIdx)
        }
      />
      <label htmlFor={`smooth-${chainIdx}`}>Smooth</label>

      <input
        type='checkbox'
        id={`bipolar-${chainIdx}`}
        checked={bipolar === 1 ? true : false}
        onChange={(cb) =>
          handleUpdate('bipolar', cb.target.checked ? 1 : 0, chainIdx)
        }
      />
      <label htmlFor={`bipolar-${chainIdx}`}>Bipolar</label>

      <hr />

      <RenderShapes />

      <hr />

      <RenderRatios />
    </RowContainer>
  );
};

export default SettingsRow;

import React, { useState } from 'react';
import styled from 'styled-components';

import ChannelSettings from './ChannelSettings';
import StepSettings from './StepSettings';

import ratios from '../../data/ratios';
import shapes from '../../data/shapes';
import ShapeSelect from './ShapeSelect';
import RatioSelect from './RatioSelect';

const RowContainer = styled.div`
  background: #292929;
  padding: 1em;
  margin-bottom: 1em;
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

  const slow =
    chainIdx > 0
      ? channelSettings.chains[chainIdx]['slow']
      : channelSettings['slow'];

  const triplet =
    chainIdx > 0
      ? channelSettings.chains[chainIdx]['triplet']
      : channelSettings['triplet'];

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

      <ShapeSelect
        selectedShape={shape}
        handleSelect={handleUpdate}
        chainIdx={chainIdx}
      />

      <RatioSelect
        selectedRatio={ratio}
        handleSelect={handleUpdate}
        chainIdx={chainIdx}
      />

      <input
        type='checkbox'
        id={`slow-${chainIdx}`}
        checked={slow === 1 ? true : false}
        onChange={(cb) =>
          handleUpdate('slow', cb.target.checked ? 1 : 0, chainIdx)
        }
      />
      <label htmlFor={`slow-${chainIdx}`}>Slow</label>

      <input
        type='checkbox'
        id={`triplet-${chainIdx}`}
        checked={triplet === 1 ? true : false}
        onChange={(cb) =>
          handleUpdate('triplet', cb.target.checked ? 1 : 0, chainIdx)
        }
      />
      <label htmlFor={`triplet-${chainIdx}`}>Triplet</label>
    </RowContainer>
  );
};

export default SettingsRow;

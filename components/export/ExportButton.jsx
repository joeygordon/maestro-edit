import { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import styled from 'styled-components';

import generateChannel from './generateChannel';
import generateGlobal from './generateGlobal';

const PresetModal = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);

  &.hidden {
    display: none;
  }
`;

const ModalContent = styled.div`
  width: 400px;
  padding: 2em;
  background: white;
  text-align: center;
`;

const ExportButton = ({ settings }) => {
  const [selectedPreset, setSelectedPreset] = useState('00');
  const [modalVisible, setModalVisible] = useState(false);

  const createZip = async () => {
    const zip = new JSZip();
    zip.file(
      `${selectedPreset}/0.TXT`,
      generateChannel(settings.getIn(['0']).toJS())
    );
    zip.file(
      `${selectedPreset}/1.TXT`,
      generateChannel(settings.getIn(['1']).toJS())
    );
    zip.file(
      `${selectedPreset}/2.TXT`,
      generateChannel(settings.getIn(['2']).toJS())
    );
    zip.file(
      `${selectedPreset}/3.TXT`,
      generateChannel(settings.getIn(['3']).toJS())
    );
    zip.file(
      `${selectedPreset}/4.TXT`,
      generateChannel(settings.getIn(['4']).toJS())
    );
    zip.file(
      `${selectedPreset}/5.TXT`,
      generateChannel(settings.getIn(['5']).toJS())
    );
    zip.file(
      `${selectedPreset}/G.TXT`,
      generateGlobal(settings.getIn(['global']).toJS())
    );
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, `${selectedPreset}.zip`);
    });
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <button type='button' onClick={toggleModal}>
        Export
      </button>
      <PresetModal className={modalVisible ? '' : 'hidden'}>
        <ModalContent>
          <div>Choose a preset slot</div>
          <select
            id='preset'
            onChange={(e) => setSelectedPreset(e.target.value)}
          >
            <option value='00'>00</option>
            <option value='01'>01</option>
            <option value='02'>02</option>
            <option value='03'>03</option>
            <option value='04'>04</option>
            <option value='05'>05</option>
            <option value='06'>06</option>
            <option value='07'>07</option>
            <option value='08'>08</option>
            <option value='09'>09</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
          </select>
          <br />
          <button type='button' onClick={createZip}>
            Export Preset
          </button>

          <button type='button' onClick={toggleModal}>
            Cancel
          </button>
        </ModalContent>
      </PresetModal>
    </>
  );
};

export default ExportButton;

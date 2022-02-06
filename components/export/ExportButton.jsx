import JSZip from 'jszip';
import { saveAs } from 'file-saver';

import generateChannel from './generateChannel';
import generateGlobal from './generateGlobal';

const ExportButton = ({ settings }) => {
  const createZip = async () => {
    const zip = new JSZip();
    zip.file('maestro/00/0.TXT', generateChannel(settings.getIn(['0']).toJS()));
    zip.file('maestro/00/1.TXT', generateChannel(settings.getIn(['1']).toJS()));
    zip.file('maestro/00/2.TXT', generateChannel(settings.getIn(['2']).toJS()));
    zip.file('maestro/00/3.TXT', generateChannel(settings.getIn(['3']).toJS()));
    zip.file('maestro/00/4.TXT', generateChannel(settings.getIn(['4']).toJS()));
    zip.file('maestro/00/5.TXT', generateChannel(settings.getIn(['5']).toJS()));
    zip.file(
      'maestro/00/G.TXT',
      generateGlobal(settings.getIn(['global']).toJS())
    );
    zip.generateAsync({ type: 'blob' }).then((content) => {
      // code
      saveAs(content, 'maestro.zip');
    });
  };

  return (
    <button type='button' onClick={createZip}>
      Export Settings
    </button>
  );
};

export default ExportButton;

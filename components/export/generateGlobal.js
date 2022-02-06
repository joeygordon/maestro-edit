const generateGlobal = (settings) => {
  const content = `version:2\npaused:${settings.paused}\nbpm:${settings.bpm}\n`;
  return content;
};

export default generateGlobal;

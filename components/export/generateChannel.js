const generateChains = (chains) => {
  return chains
    .map((chain) => {
      return `step_ratio_idx:${-1}\nstep_shape:${1}\nstep_smooth:${-1}\nstep_bipolar:${-1}\n`;
    })
    .join('');
};

const generateChannel = (settings) => {
  const content = `version:2\nattenuation_shift:0\nratio:${
    settings.ratio
  }\nmute:${settings.mute}\nbipolar:${settings.bipolar}\nsmooth:${
    settings.smooth
  }\nrandom_seed:${settings.randomSeed}\nchain_size:${
    settings.chains.length
  }\n${generateChains(settings.chains)}`;
  return content;
};

export default generateChannel;

const generateChannel = (settings) => {
  const content = `version:2\nattenuation_shift:0\nratio:${settings.ratio}\nmute:${settings.mute}\nbipolar:${settings.bipolar}\nsmooth:${settings.smooth}\nrandom_seed:${settings.randomSeed}\nchain_size:1\nstep_ratio_idx:-1\nstep_shape:1\nstep_smooth:-1\nstep_bipolar:-1\n`;
  return content;
};

export default generateChannel;

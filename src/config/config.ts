export const staticConfig = {
  encryptKey: '',
  encryptIV: '',
};

export default () => {
  staticConfig.encryptKey = process.env.ENCRYPT_KEY;
  staticConfig.encryptIV = process.env.ENCRYPT_IV;

  return {};
};

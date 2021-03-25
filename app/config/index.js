import env from 'react-native-config';

const config = {
  api: {
    host: env.API_HOST,
    timeout: 20000,
  },
};

const API_HOST = config.api.host;
const API_TIMEOUT = config.api.timeout;
const {ENV_FILE} = env;

export {ENV_FILE, API_HOST, API_TIMEOUT};

export default config;

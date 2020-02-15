import * as dotenv from 'dotenv';

dotenv.config();

const appConfig = {
  appVersion: '1.0.0',
  port: process.env.PORT || '9090',
  appName: 'meta-image-search-api',
  flickr: {
    host: process.env.FLICKR_HOST || 'https://www.flickr.com/',
    path: process.env.FLICKR_PATH || '/services/feeds/photos_public.gne',
  },
};

const testConfig = {
  port: process.env.PORT || '9091',
  ...appConfig,
};

export const config = process.env.NODE_ENV !== 'test' ? appConfig : testConfig;
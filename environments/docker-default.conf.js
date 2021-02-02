const _ = require('lodash');
const defaultConf = require('./default.conf');

const config = {
  test_workers: {
    enabled: true,
    workers: 'auto'
  },
  test_settings: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [
            '--no-sandbox',
            '--headless',
            // '--remote-debugging-port=9222',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--window-size=1280,800',
            '--disable-popup-blocking',
            '--disable-notifications',
            // '--screenshot',
            '--verbose'
          ],
          w3c: false
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: ['no-sandbox', 'headless', 'window-size=1280,800']
        }
      }
    }
  }
};

module.exports = _.merge(_.cloneDeep(defaultConf), config);
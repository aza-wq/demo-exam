const path = require('path');
const selenium = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

const download_directory = path.resolve('./downloads_browser/');
const commonDesiredCapabilities = {
  javascriptEnabled: true,
  acceptSslCerts: true,
  acceptInsecureCerts: true,
  applicationCacheEnabled: true
};

module.exports = {
  src_folders: ['./tests'],
  output_folder: './reports',
  custom_commands_path: '',
  page_objects_path: "./pages",
  globals_path: 'globals.js',
  live_output: false,
  parallel_process_delay: 10,
  detailed_output: true,
  test_workers: {
    enabled: false,
    workers: 'auto'
  },
  selenium: {
    start_process: true,
    selenium_host: '127.0.0.1',
    port: 9515,
    check_process_delay: 5000,
    server_path: selenium.path,
    cli_args: {
      'webdriver.gecko.driver': geckodriver.path,
      'webdriver.chrome.driver': chromedriver.path
    }
  },
  test_settings: {
    default: {
      launch_url: "https://www.saucedemo.com/#",
      skip_testcases_on_fail: false,
      globals: {
        environment: 'QA',
        download_directory
      },
      silent: true,
      disable_colors: false,
      screenshots: {
        enabled: true,
        on_failure: true,
        path: './reports'
      }
    },
    chrome: {
      desiredCapabilities: {
        ...commonDesiredCapabilities,
        browserName: 'chrome',
        chromeOptions: {
          w3c: false,
          prefs: {
            'profile.default_content_settings.popups': 0,
            'profile.default_content_settings.notifications': 0,
            'profile.default_content_settings.Automatic downloads': true,
            download: {
              prompt_for_download: false,
              default_directory: download_directory
            }
          },
          args: [
            '--no-sandbox',
            '--window-size=1280,800',
            '--disable-popup-blocking',
            '--disable-notifications'
          ]
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        ...commonDesiredCapabilities,
        browserName: 'firefox',
        w3c: false,
        'moz:firefoxOptions': {
          args: ['--window-size=1280,800'],
          prefs: {
            'browser.download.folderList': 2,
            'browser.download.manager.showWhenStarting': false,
            'browser.download.manager.focusWhenStarting': false,
            'browser.download.manager.showAlertOnComplete': false,
            'browser.download.forbid_open_with': true,
            'browser.download.panel.shown': false,
            'pdfjs.previousHandler.alwaysAskBeforeHandling': false,
            'browser.helperApps.alwaysAsk.force': false,
            'browser.helperApps.neverAsk.openFile': 'application/pdf',
            'browser.helperApps.neverAsk.saveToDisk': 'application/pdf',
            'browser.download.dir': download_directory
          }
        }
      }
    }
  }
};
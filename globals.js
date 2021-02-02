
const fs = require('fs');
module.exports = {

  // reporter: reporter,
  // this controls whether to abort the test execution when an assertion failed and skip the rest
  // it's being used in waitFor commands and expect assertions
  abortOnAssertionFailure: false,

  // this will overwrite the default polling interval (currently 500ms) for waitFor commands
  // and expect assertions that use retry
  waitForConditionPollInterval: 500,

  // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
  // expect assertions
  waitForConditionTimeout: 10000,

  // this will cause waitFor commands on elements to throw an error if multiple
  // elements are found using the given locate strategy and selector
  throwOnMultipleElementsReturned: true,

  // controls the timeout time for async hooks. Expects the done() callback to be invoked within this time
  // or an error is thrown
  asyncHookTimeout: 60000,

  before: function () {
    /**
         * If any file in downloads is present, delete it
         */
    const directory = './downloads/';

    new Promise(function (resolve) {
      const filesToDelete = [];
      fs.readdir(directory, function (err, items) {
        // console.log(items);
        if (items.length === 1 && items[0] === '.gitignore') {
          console.log('No files to delete');
          resolve();
        } else {
          for (let i = 0; i < items.length; i++) {
            if (items[i] != '.gitignore') {
              filesToDelete.push(items[i]);
            }
          }
          resolve(filesToDelete);
        }
      });
    }).then(function (results) {
      if (results) {
        /**
                 * delete the files
                 */
        results.forEach(function (res) {
          fs.unlink(directory + res);
        });
      }
    });
    /**
         * Create a new test run
         */

    
  },

  beforeEach: function (browser, cb) {
    cb();
  },

  after: function (cb) {
    cb();
  },

  afterEach: function (browser, cb) {
    cb();
  },

  reporter: function (results, cb) {
    // console.log(results);
    cb();
  }

};
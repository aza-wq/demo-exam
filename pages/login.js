
const config = require('../nightwatch.conf');

const testConfigPath = require('path').resolve(__dirname + config.testConfig);
const testConfig = require(testConfigPath);






module.exports = {
  
  url: function () {
    return this.api.launchUrl;
  },
  elements: {
   
    usernameInput:{
      locateStrategy : 'xpath',
      selector : "//input[@id='user-name']"
    },

    passwordInput: {
      locateStrategy : 'xpath',
      selector: "//input[@id='password']"
    },    

    
    signInButton:  {
      locateStrategy : 'xpath',
      selector:"//input[@id='login-button']"
    }

   
  },
  commands: [
    
    {
      login:  function (client) {
        const currentTest = client.currentTest.name;
        const username = testConfig[currentTest].username;
        const password = testConfig[currentTest].password;
        
        
        const PAGE_LOAD_TIME = 60000;
        
        this.waitForElementVisible('@usernameInput',PAGE_LOAD_TIME);
        this.waitForElementVisible('@signInButton',PAGE_LOAD_TIME);
        this.clearValue('@usernameInput');
        this.clearValue('@passwordInput');
        this.setValue('@usernameInput',username);
        this.setValue('@passwordInput',password);
       
        
        this.click('@signInButton');
        
        
       
          
        this.api.pause(1000); // Rendering error in Docker
       
       
        
        
          
        

        return this;
      }
    }
  ]

};
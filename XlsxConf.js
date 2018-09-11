// An example configuration file.
exports.config = {
   directConnect: true,
//  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['./src/Regression/XLDataReadWrite.js'],
//  specs: ['./src/FunctionalTests/NonAngular(Salesforce).js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  
//  onPrepare: function() {
////	  browser.ignoreSynchronization = true; // For non angular applications
//	  browser.ignoreSynchronization = false; // For angular applications
//  },
};

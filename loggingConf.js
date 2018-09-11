//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// An example configuration file.
exports.config = {
//   directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',

//   Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome' /* you can mention Firefox here instead of chrome */
    						/* If we want to use IE then webdriver-manager start, 
    						 * and webdriver-manager update --ie*/
  },
  
  
//  capabilities: {
//	  browserName: 'chrome',   //If we want to execute one testcase in one chrome instance
//	  							// and other in another chrome instance
//	  shardTestfiles: true,     
//	  maxInstances: 2,
//  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
//  specs: ['./src/Regression/Logging.js'],
  specs: ['./src/Regression/Logging.js'],
  
//  multiCapabilities: [
//  {
//	  'browserName': 'chrome',
//  },							 // If you want to execute same testscripts in 
//  										//mutliple browsers//
//  {
//	  'browserName': 'firefox,'  
//  }
//  
//],

  
  
//  suites: {
//	  smoke:
//	  functional: ['./src/FunctionalTests/*.js'], /* This is the perticular package and give files names to execute,
	  													/*  .* execute all the fles under the package mentioned*/
//	  regression: ['./src/Regression/Logging.js'],
//  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  
//  onPrepare: function() {
////	  browser.ignoreSynchronization = true; // For non angular applications
//	  browser.ignoreSynchronization = false; // For angular applications
//  },
  
//		   onPrepare: function() {
//		      jasmine.getEnv().addReporter(
//		        new Jasmine2HtmlReporter({
//		          savePath: 'target/screenshots'
////		        	 takeScreenshotsOnlyOnFailures: true
//		        })
//		      );
//		   }
		
};

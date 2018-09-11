//These are the types of logging we can perform : 

/* error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 */
//'use strict';
const winston = require('winston');
 
/* If we want don not want to print the results in the console give the following code */
//winston.remove(winston.transports.Console);

const logger = winston.createLogger ({
	transports: [
		new (winston.transports.Console) ({}),
		new (winston.transports.File) ({
			filename: '.\\winstonBasicsLog.log',
			level: 'info'
		})
	]
})

//winston.add(winston.transports.File, { filename: '.\\reports\\winstonBasicLog.log' })
logger.level='debug'; /* If it is not default you need to mention here before using this in the code */


describe('angularjs homepage', function() {
  
	it('should greet the named user', function() {
    
		browser.get('http://www.angularjs.org');
		
		logger.log("info","url has been opened");
		
		element(by.model('yourName')).sendKeys('World');
		
		logger.log("info","name World entered"); /* info is default */
		
		var greeting = element(by.binding('yourName'));
		expect(greeting.getText()).toEqual('Hello World!');
		
		logger.log("info","closing the browser");
    
		logger.log("error","closing"); /* Error is also default */
		
		logger.log("debug","closing"); /* Debug is not default hence we need to mention before using it */
		
		logger.log("warn", "closing"); /* warn is not default hence we need to mention before using it */
 
 });

 });
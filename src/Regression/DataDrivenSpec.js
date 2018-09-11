var data = require('C:/Users/username/workspace-neon/Protractor/src/Utility/Data.json') 
					/* Here we are reading value form json file under utility package*/

describe('calculator homepage', function() {
	it ('visit to the website', function() {
		browser.get(data.url);
		browser.manage().window().maximize();
		element(by.model('first')).sendKeys(data.add.a);
		element.all(by.options('value for (key, value) in operators')).then(function(text) {
			text[0].click();
		});
		element(by.model('second')).sendKeys(data.add.b);
		
		element(by.partialButtonText('Go')).click();
		browser.sleep(4000);
	});
});
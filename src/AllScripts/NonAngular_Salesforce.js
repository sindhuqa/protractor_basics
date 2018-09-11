describe('Salesforce homepage', function() {
	it ('Visit salesforce website', function() {
//		browser.ignoreSynchronization = true;
		browser.get('https://login.salesforce.com/');
		element(by.id('username')).sendKeys('user@gmail.com')
		browser.sleep(4000);
		
	});
});

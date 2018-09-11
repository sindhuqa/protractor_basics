describe('Multiform e2e automation', function() {
	
	it('e2e flow', function() {
		
		browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
		
		element(by.model('formData.name')).sendKeys('username');
		element(by.model('formData.email')).sendKeys('user@user.com');
		
		element(by.partialLinkText('Next')).click();
	//	
		browser.sleep(3000);
		
		element.all(by.model('formData.type')).get(1).click();
		element(by.partialLinkText('Next')).click();
	//	
		browser.sleep(3000);
		element(by.partialButtonText('Submit')).click();
	//	
		browser.sleep(4000);
		browser.switchTo().alert().accept();
		
		browser.sleep(4000);
	});
});
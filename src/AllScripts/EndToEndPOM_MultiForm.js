//var data = require ('C:/Users/username/workspace-neon/Protractor/src/Utility/MutliFormData.json')
				

var data = require(process.cwd() + '\\src\\Utility\\MutliFormData.json')

var profile = require(process.cwd() + '\\src\\PagesFromMultiForms\\ProfilePage.js')

describe('Multiform e2e automation', function() {
	 
	it('e2e flow', function() {
		
		browser.get(data.url);
		
		profile.enterId(data.userData.id);
		profile.enterEmail(data.userData.email);
		
		var interest = profile.clickNext();
		
		interest.SelectRadio(1);
		
		var payment = interest.clickNext();
		
		payment.clickNext();
		payment.acceptAlert();
	
		browser.sleep(4000);
	});
});
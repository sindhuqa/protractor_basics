function calculate(Avalue, Bvalue, index) {
	
	element(by.model('first')).sendKeys(Avalue);
	element(by.model('second')).sendKeys(Bvalue);
	
    element.all(by.options('value for (key, value) in operators')).then(function(text)
    	    {
    	    	  text[index].click();
    	    });
    element(by.buttonText('Go!')).click();
	
	
}

describe('Calculator Test Scripts', function() {
	
	beforeEach(function()
	{
		browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
	    browser.manage().window().maximize();
	});
	
//	afterEach(function()
//	{
//		console.log("Test case execution completed")
//	}
	
	
  xit('Addition', function() {
    
//	browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
//    browser.manage().window().maximize();
    
    calculate(10, 10, 0);
    
//    element(by.model('first')).sendKeys(10);
//    element(by.model('second')).sendKeys(10);
//    element(by.buttonText('Go!')).click();
//    
//    var sum = element(by.binding('latest'));
//    expect(sum.getText()).toBe('20');
    browser.sleep(4000);
  
  });
  
  xit('Division', function() {
	    
//		browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
//	    browser.manage().window().maximize();
	    
	    calculate(20, 2, 1);
	    
//	    element(by.model('first')).sendKeys(20);
//	    element.all(by.options('value for (key, value) in operators')).then(function(text)
//	    {
//	    	  text[1].click();
//	    });
//	    element(by.model('second')).sendKeys(2);
//
//	    
//	    element(by.partialButtonText('Go')).click();
//	    browser.sleep(4000);
//	    
//	    var divide = element(by.binding('latest'));
//	    expect(divide.getText()).toBe('10');
	    browser.sleep(4000);
  	});
  
  xit('Multiplication', function() {
	    
//		browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
//	    browser.manage().window().maximize();
	    
	    calculate(20, 2, 2);
//	    element(by.model('first')).sendKeys(20);
//	    element.all(by.css('select option')).then(function(text)
//	    {
//	    	  text[3].click();
//	    }); //If we select element by css selector then you can use $ --> element, $$ --> element.all
	       // Example: $$(' ').click(); (element.all using css)
	       //           $(' ').sendkeys(); (element using css)
	    
//	    element(by.model('second')).sendKeys(2);               
//
//	    
//	    element(by.buttonText('Go!')).click();
//	    browser.sleep(4000);
//	    
//	    var divide = element(by.binding('latest'));
//	    expect(divide.getText()).toBe('40');
	    browser.sleep(4000);
	    
	});
  
  xit('Subtraction', function() {
	    
//		browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
//	    browser.manage().window().maximize();
	    
	    calculate(20, 9, 4);
	    
//	    element(by.model('first')).sendKeys(20);
//	    element.all(by.options('value for (key, value) in operators')).then(function(text)
//	    {
//	    	  text[4].click();
//	    });
//	    element(by.model('second')).sendKeys(9);
//
//	    
//	    element(by.buttonText('Go!')).click();
//	    browser.sleep(4000);
//	    
//	    var divide = element(by.binding('latest'));
//	    expect(divide.getText()).toBe('11');
	    browser.sleep(4000);
	    
	});
  
  it('Display web table of the contents', function()
 {
	  calculate (10, 20, 1)
	  calculate(10, 10, 0);
	  calculate(13, 21, 2);
	  element.all(by.repeater('result in memory')).then(function(text){
		  for (i = 0; i < text.length; i++) {  // to get columns
		  text[i].getText().then(function(data) { // to get rows
			  console.log(data);
		  });
		  }
	  });
	  
	  
 });
  
  it('Display specific row of the contents', function()
		  {
		 	  calculate (10, 20, 1)
		 	  calculate(10, 10, 0);
		 	  calculate(13, 21, 2);
		 	  element(by.repeater('result in memory').row(1)).getText().then(function(text){
			  console.log(text);   // to get rows
		 		
		 	  });
		 	  
		 	  browser.sleep(4000);
		 	  
		  });
  
  it('Display specific column of the contents', function()
		  {
		 	  calculate (10, 20, 1)
		 	  calculate(10, 10, 0);
		 	  calculate(13, 21, 2);
		 	  element.all(by.repeater('result in memory').column('result.value')).getText().then(function(text){
			  console.log(text);   // to get rows
		 		
		 	  });
		 	  
		 	  browser.sleep(4000);
		 	  
		  });
  
  
});

var XLSX = require('xlsx'); /* Import xlsx which is available inside node module (no need to give path) */

describe('Protractor demo app', function() {
	
	xit('should have a title', function() {
		
		var workbook = XLSX.readFile('./src/Utility/Test.xlsx');
		var sheet = workbook.SheetNames[0]; // Sheet is a list //
		
		var worksheet = workbook.Sheets[sheet]; /*This will open required sheet, contains all info of sheet*/
		var cell = worksheet['A1']; /* can read any cell value */
		
		var res = cell.v; /* To read the value of the result*/
		console.log("value of cell b1 = "+ res) /* To print the result */
		
		
		/* To perform Write operation on excel sheet following lines of code needs to be added */
		
		worksheet['A1'].v = "Hello World";
		
		console.log("b1 cell value(alternative way)= "+ worksheet.B1.v);
		
		 /* Over ride the perticular cell value with new data */
		XLSX.writeFile(workbook, './src/Utility/Test.xlsx');
		
		/* If you want to write a data to a new excel sheet following code needs to be added */
		XLSX.writeFile(workbook, './src/Utility/newTest.xlsx');
		
		
	});
	
	it("reading all data", function() {

		var workbook = XLSX.readFile('./src/Utility/Test.xlsx');
		
		 /* All sheet names [list] comes here */
		var sheetList = workbook.SheetNames;
		
		/* Every time picks one sheet then perform operation on that then goes to next sheet and so on */
		sheetList.forEach(function(sheet) {
		var worksheet = workbook.Sheets[sheet]; 
		console.log(worksheet)
		
		/* to traverse to each and every cells in the worksheet */
			for (cells in worksheet) {
				console.log(worksheet[cells]) /* this gives excel sheet data along with referene and margin value*/
				
				/* If we do not want to print reference and marginal value the following if condition is added */
				if (cells[0] === '!')
					continue;
				console.log(sheet + " and " + cells + " data = "+ worksheet[cells].v); /*.v giver raw data*/
			}
		});
	});
});
// Original code from GitHub fork:

// function compute()
// {
// p = document.getElementById("principal").value;
// }





function computeSimpleIntRate() {
  
var num1 = parseFloat (document.getElementById('interestRate').value);
var num2 = 100;
var num3 = num1 / num2;
	
	
var num4 = parseFloat (document.getElementById('principal').value);
	

var earningsPerYear = num4 * num3;
	
	var showRangeNumber = parseFloat (document.getElementById('interestRate').value);
	

var num5 = parseFloat (document.getElementById('numOfYears').value);
	
	
var totalInterest = earningsPerYear * num5;
	
var thisCurrentYear = new Date().getFullYear();
	
var futureYearsAhread = thisCurrentYear + num5;
	

	
document.getElementById("display_myStr1").innerHTML =
String("If you deposit $") + num4;
	
document.getElementById("display_myStr2").innerHTML =
String("at an interest rate of ") + num1 +("%,");
	
document.getElementById("display_myStr3").innerHTML =
String("you will receive an amount of $") + totalInterest;

document.getElementById("display_myStr4").innerHTML =
String("in the year ") + futureYearsAhread + (".");
	

}



// I struggled with the slider portion of the HTML, CSS & JavaScript
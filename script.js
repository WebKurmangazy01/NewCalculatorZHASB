/*SB*/
function putInThree(){
	document.calculator.textfield.value += '3';
}
function putInEight(){
	document.calculator.textfield.value += '8';
}
function putInSeven(){
	document.calculator.textfield.value += '7';
}function putInTZero(){
	document.calculator.textfield.value += '0';
}
//This function putting 1 in a textfield on button onclick event
function putInOne(){
	document.calculator.textfield.value += '1';
}
//This function putting 2 in a textfield on button onclick event
function putInTwo(){
	document.calculator.textfield.value += '2';
}
//This function putting 9 in a textfield on button onclick event
function putInNine(){
	document.calculator.textfield.value += '9';
}
//4-ty kosady
function putInFour(){
	document.calculator.textfield.value += '4';
}
//5-ty kosady
function putInFive(){
	document.calculator.textfield.value += '5';
}
//6-ny kosady
function putInSix(){
	document.calculator.textfield.value += '6';
}
/*процент*/ 
function percentage(){
	document.calculator.textfield.value = Number(document.calculator.textfield.value) / 100;
}
function root(){
	let rootValue =  document.calculator.textfield.value**0.5;
	document.calculator.textfield.value = rootValue.toFixed(3);
}
//kosu function
function putInPlus(){
	document.calculator.textfield.value += '+';
}
//minus function
function putInMinus(){
	document.calculator.textfield.value += '-';	
}
//This function doing division operation
function putInDivide(){
	document.calculator.textfield.value += '/';
}
//This function doing multiplication operation
function putInMultiply(){
	document.calculator.textfield.value += 'x';
}
//This function makes square
function square(){
	document.calculator.textfield.value = document.calculator.textfield.value**2; 
}
//cl-da tochka fucn-sy
function putInDot(){
	document.calculator.textfield.value += '.';
}
/**////////////////////*/

let input = null;
let didProvideInput = input || false;

let input1 = " ";
let didProvideInput1 = input || false; // this check for falsy first value else gives second value

//to only check for null and undefined use ??

let input2 = "";
let didProvideInput2 = input ?? false;

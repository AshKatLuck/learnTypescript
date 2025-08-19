let age = 92;

//person dead so age is 'NA' now

age = "NA";

let age1: any = 92;
age1 = "NA";
age1 = [];
age1 = {};
age1 = true;
//but it can be boolean, array or anything.
// so we are back to vanilla js. so use any only as a last resort

//Union type
let age2: string | number = 92;
age2 = "NA";
age2 = {};

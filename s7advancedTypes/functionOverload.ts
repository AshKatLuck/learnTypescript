function getLength(val: string): string;
function getLength(val: any[]): number;

function getLength(val: string | any[]) {
  if (typeof val == "string") {
    const noOfWords = val.split(" ").length;
    return `${noOfWords} words`;
  }
  return val.length;
}

const noOfWords = getLength("How are you?");
noOfWords.length; // Now this can be calculated coz ts knows that if string is given as input, string would be the return type
const length = getLength(["a", "b", "c"]);

/*
    Values to Boolean
    -----------------
    -0, 0 ==> False
    NaN (Not a Number) ==> False
    null ==> False
    undefined ==> False
    Empty String ("") ==> False
    Any number other than 0 (number !== 0) ==> True
    Any String that is not empty or null (string != "" && string != null)==> True
 */
function isEvenNumber(num) {
    return (num%2 === 0);
}

function isOddNumber(num) {
    return (num%2 !== 0);
}

var a = 4;
var b = "4";

if (a == b) {
    console.log("(a == b)   a = " + a + " of type " + (typeof a) + " is equal to b = " + b + " of type " + (typeof b));
} else {
    console.log("(a == b)   a = " + a + " of type " + (typeof a) + " is NOT equal to b = " + b + " of type " + (typeof b));
}

if (a != b) {
    console.log("(a != b)   a = " + a + " of type " + (typeof a) + " is NOT equal to b = " + b + " of type " + (typeof b));
} else {
    console.log("(a != b)   a = " + a + " of type " + (typeof a) + " is equal to b = " + b + " of type " + (typeof b));
}

if (a === b) {
    console.log("(a === b)  a = " + a + " of type " + (typeof a) + " is identical (===) to b = " + b + " of type " + (typeof b));
} else {
    console.log("(a === b)  a = " + a + " of type " + (typeof a) + " is NOT identical (===) to b = " + b + " of type " + (typeof b));
}

if (a !== b) {
    console.log("(a !== b)  a = " + a + " of type " + (typeof a) + " is NOT identical (===) to b = " + b + " of type " + (typeof b));
} else {
    console.log("(a !== b)  a = " + a + " of type " + (typeof a) + " is identical (===) to b = " + b + " of type " + (typeof b));
}

b = "7";
if (a > b) {
    console.log("(a > b)    a = " + a + " of type " + (typeof a) + " is GREATER THAN b = " + b + " of type " + (typeof b));
} else if (a == b) {
    console.log("(a > b)    a = " + a + " of type " + (typeof a) + " is EQUAL TO b = " + b + " of type " + (typeof b));
} else {
    console.log("(a > b)    a = " + a + " of type " + (typeof a) + " is SMALLER THAN b = " + b + " of type " + (typeof b));
}

if (a < b) {
    console.log("(a < b)    a = " + a + " of type " + (typeof a) + " is SMALLER THAN b = " + b + " of type " + (typeof b));
} else if (a == b) {
    console.log("(a < b)    a = " + a + " of type " + (typeof a) + " is EQUAL TO b = " + b + " of type " + (typeof b));
} else {
    console.log("(a < b)    a = " + a + " of type " + (typeof a) + " is GREATER THAN b = " + b + " of type " + (typeof b));
}

if (a >= b) {
    console.log("(a >= b)   a = " + a + " of type " + (typeof a) + " is GREATER THAN or EUQAL TO b = " + b + " of type " + (typeof b));
} else {
    console.log("(a >= b)   a = " + a + " of type " + (typeof a) + " is SMALLER THAN b = " + b + " of type " + (typeof b));
}

if (a <= b) {
    console.log("(a <= b)   a = " + a + " of type " + (typeof a) + " is SMALLER THAN or EQUAL TO b = " + b + " of type " + (typeof b));
} else {
    console.log("(a <= b)   a = " + a + " of type " + (typeof a) + " is GREATER THAN b = " + b + " of type " + (typeof b));
}

if (isEvenNumber(a)) {
    console.log("isEvenNumber(a)   a = " + a + " of type " + (typeof a) + " is an EVEN number.");
} else {
    console.log("isEvenNumber(a)   a = " + a + " of type " + (typeof a) + " is an ODD number.");
}

if (isOddNumber(b)) {
    console.log("isEvenNumber(b)   b = " + b + " of type " + (typeof b) + " is an ODD number.");
} else {
    console.log("isEvenNumber(b)   b = " + b + " of type " + (typeof b) + " is an EVEN number.");
}
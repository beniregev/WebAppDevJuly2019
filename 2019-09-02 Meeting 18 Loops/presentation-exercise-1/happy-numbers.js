/*
According to Wikipedia a happy number is defined by 
the following process:
*   Starting with any positive integer, replace the 
    number by the sum of the squares of its digits, 
    and repeat the process until the number equals 1 
    (where it will stay), or it loops endlessly in a 
    cycle which does not include 1. Those numbers for 
    which this process ends in 1 are happy numbers, 
    while those that do not end in 1 are unhappy numbers
    (or sad numbers).
    Write a JavaScript program to find and print the 
    first 5 happy numbers. 
*/
function isHappyNumber(num) {
    var isHappyNumber = false;
    var result = "Is " + num + " a Happy Number? ";

    // this will function as a kind of HashSet of 
    // the previous summaries already encountered
    var previous = new Object();
    while (!isHappyNumber && previous[num] == undefined) {
        // Adding index of a Happy number to the HashSet
        previous[num] = true;
        var sum = 0;    //  Summary of the digits squares
        while (num > 0) {
            //  Seperate the less significant (right-most) digit
            sum += Math.pow(num % 10, 2);
            //  Shrink the number 
            num = Math.floor(num / 10);
        }

        if (sum == 1) {
            // When 'isHappyNumber' flag is TRUE then the outter WHILE-LOOP will broken
            isHappyNumber = true;
        }
        else {
            num = sum;
        }
    }
    result += (isHappyNumber ? " Yes!!!" : " No");
    console.log(result);
    return isHappyNumber;
}

var counter = 5;
var number = 1;
var output = "The first 5 Happy Numbers are: "; 
while(counter > 0) {
    while(!isHappyNumber(number)) {
        number++ ;
    }
    output += number + ", ";   //  Add the number to output string
    counter-- ;

    //  Advance to the next number
    number++ ; 
}
console.log(output);
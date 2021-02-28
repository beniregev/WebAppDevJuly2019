/*  Write a JavaScript function that reverse a number.
    e.g. when num = 32245 the expected output: 34225.
 */
function reverseNumber(num) {
    var strNum = toString(num);
    //  Solution 1: Using .split("").reverse().join()
    var reversed = parseInt(num.toString()
                        .split("")
                        .reverse()
                        .join()
                    ) * Math.sign(num);
    console.log("Solution 1: Number " + num + " in reverse is " + reversed);

    //  Solution 2: Using arrow function
    var reversedNum = num => parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
    console.log("Solution 2: Number " + num + " in reverse is " + reversedNum);
}

reverseNumber(123400);
reverseNumber(-12300);

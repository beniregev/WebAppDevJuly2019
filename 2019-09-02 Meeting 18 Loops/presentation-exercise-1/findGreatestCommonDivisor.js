/*  interactive findGreatestCommonDivisor 
    Prerequisite: num1 > num2
*/
function findGreatestCommonDivisor(num1, num2) {
    var reminder;
    while ((num1 % num2) > 0) {
        reminder = num1 % num2;
        console.log(num1 + " % " + num2 + " = " + reminder);
        num1 = num2;
        num2 = reminder;
    }
    return num2;
}

/*  Recursive findGreatestCommonDivisor 
    Prerequisite: num1 > num2
*/
function recursiveFindGCD(num1, num2) {
    if (num2 == 0)
        return num1;
    else {
        console.log(num1 + " % " + num2 + " = " + (num1 % num2));
        return recursiveFindGCD(num2, (num1 % num2));
    }
}
/*  The Algorithm:
    -----------------
    1220 % 516  = 188
    516 % 188   = 140
    188 % 140   = 48
    140 % 48    = 44
    48 % 44     = 4
    44 % 4      = 0
    GreatestCommonDivisor is 4
 */
console.log("Interactive Greatest Common Divisor (GCD) is " + findGreatestCommonDivisor(1440, 900));
console.log("Recursive Greatest Common Divisor (GCD) is " + recursiveFindGCD(1220, 516));

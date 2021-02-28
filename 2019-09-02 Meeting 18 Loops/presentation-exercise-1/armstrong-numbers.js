/*
    Write a JavaScript program to find the armstrong 
    numbers of 3 digits.
    An Armstrong number of three digits is an integer 
    such that the sum of the cubes of its digits is 
    equal to the number itself. For example, 371 is an 
    Armstrong number since: 3**3 + 7**3 + 1**3 = 371. 
 */
for (var i=100; i < 1000; i++) {
    var num = i;
    var sum = (num % 10)**3;        //  1st digit
    num = Math.trunc(num / 10);
    sum += (num % 10)**3;           //  2nd digit
    sum += Math.trunc(num / 10) ** 3; //  3rd digit
    if (i === sum) {
        console.log("number " + i + " ==> sum = " + sum);
    } 
}

function positiveNegativeOrZero(num) {
    var output = "The number " + num + " is ";
    if (num > 0) {
        output += "a positive number";
    } else if (num < 0) {
        output += "a negative number";
    } else {
        output += "zero";
    }
    console.log(output);
    return output;
}

function divisibleBy5And11(num) {
    var output = "The number " + num + " is ";

    output += (num % 5 === 0) 
                ? "divisible by 5, and " 
                : "not divisible by 5, and ";
    output += (num % 11 === 0) 
                ? "divisible by 11" 
                : "not divisible by 11";
    
    console.log(output);
    return output;
}

/* num%2 === 0 is an EVEN number, otherwise it's an ODD numnber */
function isEvenNumber(num) {
    var output = "Output: The number " + num + " is an ";
    console.log(output + (num%2 === 0 ? "EVEN number" : "ODD number"));
    return num%2 === 0;
}

/*
    Question 10:
    Write a program to input month number and print number of 
    days in that month.
*/
function numberOfDays(monthNum) {
    var output = "Number of days in month " + monthNum + " are ";
    var daysInMonth = 0;
    if (",1,3,5,7,8,10,12,".indexOf("," + monthNum + ",") >= 0) {
        daysInMonth = 31;
    } else if (",4,6,9,11,".indexOf("," + monthNum + ",") >= 0) {
        daysInMonth = 30;
    } else {
        daysInMonth = 28;  //  monthNum = 2 (Feb)
    }
    console.log(output + daysInMonth);
    return daysInMonth;
}

/*
    Question 11:
    The minimum number of notes (and details) that are required 
    for a given amount. 
    e.g. 570 ==> 2x 200 ILS + 1x 100 ILS + 1x 50 ILS + 1x 20 ILS total of 5 notes
 */
function minimumNumberOfNotesILS(num) {
    if ((num < 0) || (num % 20 !== 0) || (num % 50 !== 0)) {
        return "Can't be paid with only notes";
    }
    var totalNotes = 0;
    var output = "For amount " + num + " you will receive: ";
    var notesNum = 0;
    var amount = num;
    if (amount > 200) {
        notesNum = amount % 200;
        totalNotes += notesNum;
        amount -= notesNum * 200;
        output += notesNum + "x 200 ILS, ";
    } 
    
    if (amount > 100) {
        notesNum = amount % 100;
        totalNotes += notesNum;
        amount -= notesNum * 100;
        output += notesNum + "x 100 ILS, ";
    } 
    
    if (amount > 50) {
        notesNum = amount % 50;
        totalNotes += notesNum;
        amount -= notesNum * 50;
        output += notesNum + "x 50 ILS, ";
    } 
    
    if (amount > 20) {
        notesNum = amount % 20;
        totalNotes += notesNum;
        amount -= notesNum * 20;
        output += notesNum + "x 20 ILS, ";
    } 
    
    output += " that's a total of " + totalNotes + "notes.";
    console.log(output);
    return output;
}

/* 
    Question 12:
    if any of the angles or the sumaary of the angles 
    is greater than 180 then NOT VALID, otherwise it is VALID 
*/
function isValidTriangle(angle1, angle2, angle3) {
    var output = "Angles: " + angle1 + ", " + angle2 + 
                " and " + angle3 + " are part of ";
    output += ((angle1 > 180) || (angle2 > 180) || (angle3 > 180) || ((angle1 + angle2 + angle3) > 180))
                    ? "an invalid Triangle" 
                    : "a valid Triangle";
    console.log(output);
    
    return ((angle1 > 180) || (angle2 > 180) || (angle3 > 180) || ((angle1 + angle2 + angle3) > 180)) 
                ? false 
                : true;
}

function electricityUnitCharge(unit) {
    /*
    1   <= x <=  50     ==> 0.50 US$/unit
    51  <= x <= 150     ==> 0.75 US$/unit
    151 <= x <= 250     ==> 1.20 US$/unit
    251 <= x            ==> 1.50 US$/unit
    */
    var amount = 0;
    if (units > 0 && units <= 50) {
        amount += units * 0.5;
    } else if (units > 51 && units <= 150) {
        amount += 50*0.5 + (units-50) * 0.75;
    } else if (units > 151 && units <= 250) {
        amount += 50*0.5 + 100*0.75 + (units-150) * 1.2;
    } else if (units > 250) {
        amount += 50*0.5 + 100*0.75 + 100*1.2 + (units-250) * 1.2;
    }
    return amount;
}
console.log("\n1.  Write a program to check whether a number is negative, \n\tpositive or zero: ");
positiveNegativeOrZero(-7);
positiveNegativeOrZero(0);
positiveNegativeOrZero(77);

console.log("\n2.  Write a program to check whether a number is divisible \n\tby 5 and 11 or not: ");
divisibleBy5And11(15);
divisibleBy5And11(22);
divisibleBy5And11(55);

console.log("\n3.  Write a program to check whether a number is even or odd.");
isEvenNumber(7);
isEvenNumber(8);

console.log("\n4.  Write a program to check whether a year is leap year or not");

console.log("\n5.  Write a program to check whether a character is alphabet or not");

console.log("\n6.  Write a program to input any alphabet and check whether it is \n\tvowel or consonant");

console.log("\n7.  Write a program to input any character and check whether it is \n\talphabet, digit or special character");

console.log("\n8.  Write a program to check whether a character is uppercase or \n\tlowercase alphabet.");

console.log("\n9.  Write a program to input week number and print week day");

console.log("\n10. Write a program to input month number and print number of days \n\tin that month.");
numberOfDays(1);
numberOfDays(2);
numberOfDays(5);
numberOfDays(6);
numberOfDays(12);

console.log("\n11. Write a program to count total number of notes in given amount");
minimumNumberOfNotesILS(10);
minimumNumberOfNotesILS(30);
minimumNumberOfNotesILS(50);
minimumNumberOfNotesILS(60);
minimumNumberOfNotesILS(570);

console.log("\n12. Write a program to input angles of a triangle and check whether \n\ttriangle is valid or not.");
isValidTriangle(181, 2, 3);
isValidTriangle(1, 181, 2);
isValidTriangle(1, 2, 181);
isValidTriangle(100, 50, 40);
isValidTriangle(100, 60, 20);

console.log("\n13. Write a program to input all sides of a triangle and check whether \n\ttriangle is valid or not.");

console.log("\n14. Write a program to check whether the triangle is equilateral, \n\tisosceles or scalene triangle.");

console.log("\n15. Write a program to find all roots of a quadratic equation.");

console.log("\n16. UNCLEAR!!! -- Write a program to calculate profit or loss.");

console.log("\n17. Write a program to input electricity unit charges and calculate " 
            + "\ntotal electricity bill according to the given condition: " + 
            + "\n\t * For first 50 units $0.50/unit."
            + "\n\t * For next 100 units $0.75/unit." 
            + "\n\t * For next 100 units $1.20/unit." 
            + "\n\t * For unit above 250 $1.50/unit." 
            + "\n\t * An additional surcharge of 20% is added to the bill."
            );

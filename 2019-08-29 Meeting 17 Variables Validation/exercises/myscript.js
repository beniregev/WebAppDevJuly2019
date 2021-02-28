    console.log("1. Wrtie JavaScript that declare 2 numeric variables and outputs the \nhighest value.");
    var a = 5;
    var b = 7;
    var output = "Example: a=" + a + ", b=" + b + " ==> \nOutput: "; 
    console.log("Output: " + (a > b ? a : b));

    console.log("\n2. Write a condition in JavaScript that outputs the sign of the summary \nof 3 numbers, e.g. 3, -7, 2 the output will be: 'The sign is -'.");
    a = 3;
    b = -7;
    var c = 2;
    var summary = a + b + c;
    output = "Example: a=" + a + ", b=" + b + ", c=" + c + ", summary=" + summary + " ==> \nOutput: The sign is "; 
    console.log(output + (summary < 0 ? '-' : '+'));

    console.log("\n3. Write a condition in JavaScript that sorts 3 numbers and displays \nthem in decending order, e.g. 0, -1, 4 the output will be: 4, 0, -1");
    a = 0;
    b = -7;
    c = 2;
    output = "Example: a=" + a + ", b=" + b + ", c=" + c + " ==> \nOutput: ";
    if (a >= b) {
        if (c >= a) {
            /* c >= a >= b */
            output += c + ", " + a + ", " + b;
        } else if (b >= c) {
            /* a >= b >= c */
            output += a + ", " + b + ", " + c;
        } else {
            /* a >= c >=bc */
            output += a + ", " + c + ", " + b;
        }
    } else {
        /* b >= a */
        if (c >= b) {
            /* c >= b >= a */
            output += c + ", " + b + ", " + a;
        } else if (a >= c) {
            /* b >= a >= c */
            output += b + ", " + a + ", " + c;
        } else {
            /* b >= c >= a */
            output += b + ", " + c + ", " + a;
        }
    }
    console.log(output);

    console.log("\n4. Write a condition in JavaScript that outputs the larger number \nbetween 5 numbers, e.g. given -6, 0, -2, -1 -5 the output will be: 0");
    a = -6;
    b = 0;
    c = -2;
    var d = -1;
    var e = -5;
    output = "Exampe: a=" + a + ", b=" + b + ", c=" + c + ", d=" + d + ", e=" + e;
    var highest = a;
    if (b > highest) { highest = b; };
    if (c > highest) { highest = c; };
    if (d > highest) { highest = d; };
    if (e > highest) { highest = e; };
    console.log(output + " ==> \nOutput: " + highest);

    console.log("\n5. Write JavaScript that computes the average of the following grades, and outputs a message of the average level according to the computed average.");
    var david = 80;
    var vinoth = 77;
    var divya = 88;
    var ishitha = 95;
    var thomas = 68;
    var average = (david + vinoth + divya + ishitha + thomas) / 5;
    output = "Exampe: david=" + david + ", vinoth=" + vinoth + ", divya=" + divya + ", ishitha=" + ishitha + ", thomas=" + thomas + ", average=" + average + " ==> \nOutput: ";
    if (average < 60) {
        output += "רע מאוד";
    } else if (average < 70) {
        output += "רע";
    } else if (average < 80) {
        output += "בינוני";
    } else if (average < 90) {
        output += "טוב";
    } else {
        output += "טוב מאוד";
    }
    console.log(output);

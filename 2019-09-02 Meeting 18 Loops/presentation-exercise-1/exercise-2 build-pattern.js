/*  Presentation Question 4: Create the following 
    pattern using nested loops:
    *
    * *
    * * *
    * * * *
    * * * * *
*/
function createPatternUsingForLoop(linesNum) {

    for (var line=1; line <= linesNum; line++ ) {
        var output = "";
        for (var i=1; i <= line; i++) {
            output += "* ";
        }
        console.log(output);
    }
}

function createPatternUsingWhileLoop(linesNum) {

    var line = 1;
    do {
        var output = "";
        var i = 1;
        do {
            output += "* ";
            i++;
        } while (i <= line);
        console.log(output);
        line++;
    } while (line <= linesNum);

}
console.log("Create Pattern Using For Loop");
createPatternUsingForLoop(5);

console.log("Create Pattern Using While Loop");
createPatternUsingWhileLoop(7);
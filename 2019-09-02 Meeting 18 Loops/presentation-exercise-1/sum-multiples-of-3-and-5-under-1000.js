function sumMultiplesOf3And5Under1000() {
    var sum = 0;
    for (var i = 3; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log("");
            sum += i;
        }
    }
    return sum;
}

console.log("Sum of the multiples of 3 and 5 under 1000 is " + sumMultiplesOf3And5Under1000());

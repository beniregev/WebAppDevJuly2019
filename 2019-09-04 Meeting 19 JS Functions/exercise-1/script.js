/* Presentation Logic Function */
function getArgsAndDisplayResult() {
    var num1 = document.getElementById("sle-num1").value;
    var num2 = document.getElementById("sle-num2").value;
    var maxNum = findMaxNumber(num1, num2);
    document.getElementById("div-result").innerHTML = "<b>Given the numbers " + num1 + " and " + num2 + " the biggest number is " + maxNum + "</b>";
}

/* Business Logic function */
function findMaxNumber(num1, num2) {
    var retval = 0;
    if (num1 > num2)
        retval = num1;
    else
        retval = num2;
    return retval;
}
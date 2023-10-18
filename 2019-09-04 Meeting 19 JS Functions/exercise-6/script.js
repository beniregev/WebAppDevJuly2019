/* Presentation Logic Function */
function getArgsAndDisplayResult() {
    var num1 = document.getElementById("sle-num1").value;
    var num2 = document.getElementById("sle-num2").value;
    var maxNum = findMaxNumber(num1, num2);
    document.getElementById("div-result").innerHTML = "<b>Given the numbers " + num1 + " and " + num2 + " the biggest number is " + maxNum + "</b>";
}

function getElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    console.log(elements);
    for(var i=0;i<elements.length;i++){
        if(elements[i].id.length === 0) {
            elements[i].id="bx--search-result" + i;
            // The element without any attribute
            console.log(elements[i]);
        }
    }
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
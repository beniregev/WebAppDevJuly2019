/* Presentation Logic Function */
function getArgsAndDisplayResult() {
    var num1 = document.getElementById("sle-num1").value;
    var num2 = document.getElementById("sle-num2").value;
    var num3 = document.getElementById("sle-num3").value;
    
    var strSorted = sortnumbers(num1, num2, num3);
    
    document.getElementById("div-result").innerHTML = "<b>" + strSorted + "</b>";
}

/* Business Logic function */
function sortnumbers(num1, num2, num3) {
    var retval = "Sorted: ";
    if (num1 >= num2) {
        if (num3 >= num1) {
            /* num3 >= num1 >= num2 */
            retval += num3 + ", " + num1 + ", " + num2;
        } else if (num2 >= num3) {
            /* num1 >= num2 >= num3 */
            retval += num1 + ", " + num2 + ", " + num3;
        } else {
            /* num1 >= num3 >= num2 */
            retval += num1 + ", " + num3 + ", " + num2;
        }
    } else {
        /* num2 >= num1 */
        if (num3 >= num2) {
            /* num3 >= num2 >= num1 */
            retval += num3 + ", " + num2 + ", " + num1;
        } else if (num1 >= num3) {
            /* num2 >= num1 >= num3 */
            retval += num2 + ", " + num1 + ", " + num3;
        } else {
            /* num2 >= num3 >= num1 */
            retval += num2 + ", " + num3 + ", " + num1;
        }
    }
    
    alert(retval);
    return retval;
}
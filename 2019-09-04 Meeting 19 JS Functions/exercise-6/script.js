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

function splitStrings() {
    var strings = [
        "keyword-1.1,keyword-1.2,keyword-1.3,keyword-1.4,keyword-1.5",
        "keyword-2.1, keyword-2.2, keyword-2.3, keyword-2.4, keyword-2.5",
        "keyword-3.1;keyword-3.2;keyword-3.3;keyword-3.4;keyword-3.5",
        "keyword-4.1; keyword-4.2; keyword-4.3; keyword-4.4; keyword-4.5",
        "",
        undefined
    ];
    console.log(strings);
    for(var i=0;i<strings.length;i++){
        if(strings[i]) {
            var str = strings[i].replaceAll("; ", ",").replaceAll(";", ",").replaceAll(", ", ",");
            let keywords = str.split(",", 3);
            console.log(" * " + strings[i]);
            console.log("   " + str);
            console.log("   " + keywords + "\n");
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
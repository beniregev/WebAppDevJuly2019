$(function () {
    console.log("Java Script Variables: Arrays");
    var str = "Hello World";
    var strArr = [...str];

    console.log("strArr1 = [ " + strArr + " ], " + strArr[4]);
    var reverseStr = "";
    for (var i = strArr.length-1; i >= 0; i-- ) {
        reverseStr += strArr[i];
    }
    console.log("str = '" + str + "' ==> reverseStr = '" + reverseStr + "'");
});
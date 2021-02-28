/* Presentation Logic Function */
function getArgsAndDisplayResult() {
    var wordToSearch = document.getElementById("sle-word").value;
    var charToFind = document.getElementById("sle-char").value;
        
    var strSorted = findCharInWord(wordToSearch, charToFind);
    
    document.getElementById("div-result").innerHTML = "<b>" + strSorted + "</b>";
}

/* Business Logic function */
function findCharInWord(wordToSeach, charToFind, num3) {
    var count = 0;
    var charArray = wordToSeach.toLowerCase().split("");

    for (var i=0; i < charArray.length; i++) {
        if (charArray[i] === charToFind) 
            count++;
    }

    return "The word [ " + charArray + " ] contains the character '" + charToFind + "' a total of " + count + " times.";
}
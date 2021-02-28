/* Presentation Logic Functions */
function myOnClick(element) {
    console.log("myOnClick(element)");
    var elementId = element.id;
    elementId = elementId.replace("-img", "-txt");
    var txtElement = document.getElementById(elementId);
    $(txtElement).toggleClass("active");
}

function myMouseOut(element) {
    console.log("myMouseOut(element)");
    var elementId = element.id;
    elementId = elementId.replace("-img", "-txt");
    var txtElement = document.getElementById(elementId);
    $(txtElement).removeClass("active");
}

function myMouseOver(element) {
    console.log("myMouseOver(element)");
    var elementId = element.id;
    elementId = elementId.replace("-img", "-txt");
    var txtElement = document.getElementById(elementId);
    $(txtElement).addClass("active");
}

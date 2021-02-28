function windowFunction() {
    var image = document.getElementById('img-window');
    console.log("img-window = " + image);

    var buttonText = document.getElementById('btn-change-window-state');
    console.log("button = " + buttonText);

    if (buttonText.innerHTML == 'Close Window') {
        image.setAttribute("src", "window-closed.png");
        image.setAttribute("alt", "and now the window is closed again");
        buttonText.innerHTML="Open Window";
        console.log("element is null, window is open - close it");
    } else {
        image.setAttribute("src", "window-open.jpg");
        image.setAttribute("alt", "now the window is open");
        buttonText.innerHTML="Close Window";
        console.log("element is not null, window is closed - open it");
    }
}
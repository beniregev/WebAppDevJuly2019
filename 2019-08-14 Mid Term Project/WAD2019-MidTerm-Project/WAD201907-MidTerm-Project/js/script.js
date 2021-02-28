/* declaring GLOBAL variables */

var timerInterval;
var picNumber = 0;  //  The picture number currently displayed
var images = [ "images/cube_change_1_goat.jpg", "images/cube_change_2_commerce.jpg", 
            "images/cube_change_3_lavazza.jpg", "images/cube_hange_4_start_saving.jpg" ];


/*
    Changes the middle picture of the second 
    row of picture by an interval sets 
    When we will learn about arrays and how 
    to use them in JavaScript I will use an 
    array to hold the pictures names and 
    the next picture to display will be the 
    one in picturesArray[picNumber] AFTER 
    advancing pictureNumber.
 */

/*
    Sets the interval to change the middle picture of the second row of picture. 
    The interval is given in milliseconds, e.g. 2500 equals to 3 seconds.
 */
function setChangePictureInterval() {
    timerInterval = setInterval(function() { changePicture() }, 2500);
}

function changePicture() {
    picNumber = (picNumber === images.length - 1) ? 0 : picNumber + 1;
    document.getElementById("changeImg").src = images[picNumber];
}

function stop() {
    clearInterval(timerInterval);
}
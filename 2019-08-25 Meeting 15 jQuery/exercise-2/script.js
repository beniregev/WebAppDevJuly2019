$(document).ready(function() {
    $("#brand-logo").click(function() {
        /* load main.html */
        loadMainHtml();
    });

    $("#menu-about").click(function() {
        /* load about.html */
        loadAboutHtml();
    });

    $("#menu-contact").click(function() {
        /* load contact.html */
        loadContactHtml();
    });

    function loadMainHtml() {
        $.get("main.html", function(strResponse, strStatus, xhr) {
            if (strStatus == "error") {
                alert("Error: " + xhr.status + ": " + xhr.statusText);
            } else {
                // Display the returned data in browser
                $("#loadHtml").html(strResponse);
            }
        });
    }

    function loadAboutHtml() {
        $.get("about.html", function(strResponse, strStatus, xhr) {
            if (strStatus == "error") {
                alert("Error: " + xhr.status + ": " + xhr.statusText);
            } else {
                // Display the returned data in browser
                $("#loadHtml").html(strResponse);
            }
        });
    }

    function loadContactHtml() {
        $.get("contact.html", function(strResponse, strStatus, xhr) {
            if (strStatus == "error") {
                alert("Error: " + xhr.status + ": " + xhr.statusText);
            } else {
                // Display the returned data in browser
                $("#loadHtml").html(strResponse);
            }
        });
    }

    /*  *************************************************
        Uncommenting any of the following code sections 
        will make the page to reload again and again
        ************************************************* */
    /* Option 1: calling the same function that is used in clicking on the "Logo" the left-most item in the top Navbar */
    loadMainHtml();
    
    /* Option 2: using $.get(): */
    // $.get("main.html", function(strResponse, strStatus, xhr) {
    //     if (strStatus == "error") {
    //         alert("Error: " + xhr.status + ": " + xhr.statusText);
    //     } else {
    //         // Display the returned data in browser
    //         $("#loadHtml").html(strResponse);
    //     }
    // });

    /* Option 3: Using $.ajax(): */
    // $.ajax({
    //     url: "main.html", 
    //     success: function(result) {
    //         $("#loadHtml").html(result);
    //     }
    // });

});

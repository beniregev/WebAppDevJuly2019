$(document).ready(function() {
    $("#hide-p").click(function() {
        $("p.hide").hide();
        $("main>article>section>div").hide();
    });

    $("#show-p").click(function() {
        $("p.hide").show();
        $("main>article>section>div").show();
    });

    $("#toggle-footer").click(function() {
        $("footer").toggle();
    });

    $("#change-p").click(function() {
        $("#aboutCats").text("Ganan Gidel Dagan Bagan");
    });

    $("#change-img").click(function() {
        $("#imgCat").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDYWbE2jz0KlosG_xDT4cD-qQxL-rYHvdYKpbjlW0iFfFZdegXA")
        $("#imgCat").attr("alt", "Hairless cat")
    });

    $("#change-body-bg-color").click(function() {
        $("body").css("background-color", "#909090");
    });

    $("#toggle-class-p").click(function() {
        $("#aboutCats").toggleClass("hide");
    });
});
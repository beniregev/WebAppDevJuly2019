$(function () {
    console.log("Java Script Variables: Objects");
    var beni = {
        fullName: "Beni Regev",
        height: 190,
        eyeColor: "Dark-Brown",
        location: {
            israel: true,
            city: "Ramat-Gan"
        }
    };
    console.log("object beni = " + JSON.stringify(beni));
    
    beni.eyeColor = "Green";
    console.log("object beni = " + JSON.stringify(beni));

    beni.languages = new Object();
    beni.languages.hebrew = true;
    beni.languages.arabic = false;
    beni.languages.english = true;
    beni.languages.russian = false;
    console.log("object beni = " + JSON.stringify(beni));
    console.log("Property beni.languages.hebrew = " + beni.languages.hebrew);
});
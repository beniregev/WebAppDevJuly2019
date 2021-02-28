$(function () {
    console.log("Java Script Variables: Arrays");
    var evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    console.log("evenNumbers = " + evenNumbers);
    console.log("Array evenNumbers.length = " + evenNumbers.length);
    console.log("Display the 1st, 3rd and 6th elements in evenNumbers array: " + evenNumbers[0] + ", " + evenNumbers[2] + ", " + evenNumbers[5]);
    console.log("The element with value 10 located in index " + evenNumbers.indexOf(10));
    evenNumbers.splice(evenNumbers.length - 2);
    console.log("evenNumbers = " + evenNumbers);

    var numbersAndNames = [2, "שתיים", 3, "שלוש", 5, "חמש", 7, "שבע", 11, "אחד עשרה", 17, "שבע עשרה", 19, "תשע עשרה"];
    console.log("numbersAndNames = " + numbersAndNames);

    var participants = [
        { name: "Keren", eyeColor: "gray", height: 168 },
        { name: "Boaz", eyeColor: "green", height: 175 },
        { name: "Michal", eyeColor: "black", height: 180 },
        { name: "Elad", eyeColor: "brown", height: 173 },
        { name: "Avi", eyeColor: "orange", height: 175 },
        { name: "Olga", eyeColor: "blue", height: 168 }
    ];
    console.log("participants array of objects: " + JSON.stringify(participants));

    participants.shift();
    console.log("participants array after deleting the first element: " + JSON.stringify(participants));

    participants.unshift({ name: "Nir", eyeColor: "silver", height: 175 });
    console.log("participants array after adding new first element: " + JSON.stringify(participants));
        
    delete participants[0].eyeColor;
    participants[0].face = { eyes: { color: "brown" } };
    console.log("First element of participants array: " + JSON.stringify(participants[0]));
});
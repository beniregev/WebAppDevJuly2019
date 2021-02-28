function myFunction(item, index) {
    console.log("Height of " + item.name + " is " + item.height + "cm");
}

var participants = [
    { name: "Riva", eyeColor: "gray", height: 168 },
    { name: "Boaz", eyeColor: "green", height: 175 },
    { name: "Michal", eyeColor: "black", height: 174 },
    { name: "Elad", eyeColor: "brown", height: 165 },
    { name: "Avi", eyeColor: "orange", height: 175 },
    { name: "Olga", eyeColor: "blue", height: 168 }
];


participants.forEach(myFunction);

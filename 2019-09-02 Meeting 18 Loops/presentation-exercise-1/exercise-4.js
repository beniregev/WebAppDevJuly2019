function changeEveryoneIsHeightTo175cm(item, index) {
    console.log("Height of " + item.name + " is " + item.height + "cm changing to 175cm");
    item.height = 175;
}

function showEveryoneIsHeight(item, index) {
    console.log("Height of " + item.name + " is " + item.height + "cm");
}

var participants = [
    { name: "Riva", eyeColor: "gray", height: 168 },
    { name: "Boaz", eyeColor: "green", height: 178 },
    { name: "Michal", eyeColor: "black", height: 173 },
    { name: "Elad", eyeColor: "brown", height: 165 },
    { name: "Avi", eyeColor: "orange", height: 182 },
    { name: "Olga", eyeColor: "blue", height: 168 }
];

participants.forEach(changeEveryoneIsHeightTo175cm);
participants.forEach(showEveryoneIsHeight);

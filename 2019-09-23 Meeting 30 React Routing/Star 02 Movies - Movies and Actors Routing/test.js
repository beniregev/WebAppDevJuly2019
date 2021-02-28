let fullname = "James Earl Jones";
let names = fullname.split(' ');
let firstName = fullname.substring(0, fullname.lastIndexOf(' ')) + "***";
let lastName = fullname.substring(fullname.lastIndexOf(' ')) + "***";
console.log("firstName=" + firstName);
console.log("firstName=" + lastName);
console.log("firstName=" + names[0]);
console.log("middleName=" + names[1]);
console.log("lastName=" + names[names.length - 1]);

let today = new Date();
let monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log("today=" + today);
let dayOfMonth = today.getUTCDate();
let monthIndex = today.getUTCMonth();
let year = today.getUTCFullYear();
console.log("Date Format dd.M.YYYY = " + dayOfMonth + '.' + (monthIndex + 1) + '.' + year );

let mm = '' +(100 + (monthIndex + 1));
console.log("MM = " + mm.substring(1));

console.log("Date Format dd.MM.YYYY = " + today.getUTCDate() + '.' + (''+ (100 + (today.getUTCMonth() + 1))).substring(1) + '.' + today.getUTCFullYear() );

console.log("Month Name = " + monthes[today.getUTCMonth()]);
console.log("MMMM d, yyyy = " + monthes[today.getUTCMonth()] + ' ' + today.getUTCDate() + ', ' + today.getUTCFullYear());


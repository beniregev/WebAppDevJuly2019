class Car {
    // Constructor with all class properties
    constructor(brand, model, color, year, km) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
        this.km = km;
    }

    get carBrand() {
        return this.brand;
    }
    set carBrand(x) {
        this.brand = x;
    }
    get carModel() {
        return this.model;
    }
    set carModel(x) {
        this.model = x;
    }
    get carColor() {
        return this.color;
    }
    set carColor(x) {
        this.color = x;
    }
    get carYear() {
        return this.year;
    }
    set carYear(x) {
        this.year = x;
    }
    get carKm() {
        return this.km;
    }
    set carKm(x) {
        this.km = x;
    }

    /*  Calculate average distance in Kilometers 
        per year and allowing only 2 decimal digits */
    static calcKmPerYear(car) {
        var currentYear = new Date().getFullYear();
        var carAge = currentYear - car.year + 1;
        var kmPerYear = Math.trunc((car.km / carAge) * 100) / 100;
        return kmPerYear;
    }

    /*  Returns this class reoresentaion as a string in JSON format.
        Important:  The value of km/yaer is a computed field and NOT 
                    part of the class, it's not included in the string. */
    toString() {
        return "{ \"brand\": \"" + this.brand + "\", \"model\": \"" + this.model + "\", \"color\": \"" + this.color + "\", \"year\": " + this.year + ", \"km\": " + this.km + " }";
    }
};

function findCarWithHighestKmPerYear() {
    var output = "";
    if (cars.length > 1) {
        //  Initial values: The first car in the array index and km/year
        var carIndex = 0;
        var carKmPerYear = Car.calcKmPerYear(cars[carIndex])
        var highestKmPerYear = carKmPerYear;
        console.log("\t   Initial highest km/year: " + highestKmPerYear + ", cars[" + i + "] = " + carKmPerYear);
        //  Scan the cars array in sequence ==> O(N)
        for (var i = 1; i < cars.length; i++) {
            carKmPerYear = Car.calcKmPerYear(cars[i]);
            console.log("\t   Current highest km/year: " + highestKmPerYear + ", cars[" + i + "] = " + carKmPerYear);
            if (carKmPerYear > highestKmPerYear) {
                highestKmPerYear = carKmPerYear;
                carIndex = i;
            }
        }
        output += "Highest Km/Year is the car in index " + carIndex + ": " + cars[carIndex].toString() + " ==> km/year: " + highestKmPerYear + ".\n";
    } else if (cars.length === 1) {
        output += "Highest Km/Year is car in index 0: " + cars[0].toString() + " ==> km/year: " + Car.calcKmPerYear(cars[0]) + ".\n";
    } else {
        //  cars.length === 0 
        output += "The array is empty. Cannot determine highest Km/Year.\n";
    }
    return output;
}

/*  Print all the cars currently in the array  */
function pringCarsArray() {
    for (var i = 0; i < cars.length; i++) {
        console.log("cars[" + i + "] = " + cars[i].toString());
    }
}

var cars = [];

/* Presentation Logic Function */
function addCar() {
    var brand = document.getElementById("sle-brand").value;
    var model = document.getElementById("sle-model").value;
    var color = document.getElementById("sle-color").value;
    var year = document.getElementById("sle-year").value;
    var km = document.getElementById("sle-km").value;

    var newCar = addCar(brand, model, color, year, km);
    document.getElementById("div-result").innerHTML = "<b>" + newCar + "</b>";

    return newCar != null;
}

function createNewCar(brand, model, color, year, km) {
    newCar = new Car(brand, model, color, year, km);
    return newCar;
}

/* Business Logic function */
function addCar(brand, model, color, year, km) {
    console.log("addCar('" + brand + "', '" + model + "', '" + color + "', " + year + ", " + km + ")");
    var newIndex = cars.length;
    var newCar = createNewCar(brand, model, color, year, km);
    cars[newIndex] = newCar;
    return true;
}

console.log("-------------------------------------");
console.log("Find the car with the highest km/year");
console.log("-------------------------------------");
console.log("In an empty array:");
console.log("\t" + findCarWithHighestKmPerYear());

addCar("Toyota", "Corola", "Black", 2018, 12345);
console.log("\nIn an array containing 1 car:");
console.log("\t" + findCarWithHighestKmPerYear());

addCar("Toyata", "CH-R", "Cyan", 2017, 45678);
addCar("Subaro", "Liana", "White", 1987, 987654);
addCar("Kia", "Sportage", "Dark Green", 2018, 34567);
addCar("Hammer", "H2", "Black", 2008, 654321);
addCar("Ford", "Focus", "Silver", 2015, 123456);
console.log("\nIn an array containing more than 1 car:");
console.log("\t" + findCarWithHighestKmPerYear());

console.log("-------------------- ");
console.log("Printing cars array: ");
console.log("-------------------- ");
pringCarsArray();

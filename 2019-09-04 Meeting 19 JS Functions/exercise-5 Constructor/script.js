$(function () {
    var counter = 0;
    var cars = [];

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

    $("#btn-addCar").click(function () {
        addNewCar();
    })

    /* Add a new row to the table and a DELETE button on the right-most column */
    $("#btn-addRow").on("click", function () {
        var year = new Date().getFullYear();
        addRowToHtmlTable(newCar);
    });

    /* Clicking on of the DELETE buttons will delete the row  */
    $("table.order-list").on("click", ".ibtnDel", function (event) {
        ////    If only DELETE the row from the table I can use .remove()
        //$(this).closest("tr").remove();
        var index = parseInt($(this).attr("id").substring(10));
        console.log("Delete item in index " + index);
        cars.splice(index, 1);
        counter-- ;
        refreshCarsTable();
    });

    function importCarsJson() {
        $.getJSON("cars-part1.json", function (data) {
            console.log(data);
            $.each(data.cars, function () {
                addCar(this["brand"], this["model"], this["color"], this["year"], this["km"]);
                refreshCarsTable();
            });
            console.log("It worked, JSON imported.");
        });

        /*  Importing cars data from JSON file with a little more control over what I am doing:
                url: "Location-and-name-of-the-resource",
                dataType: "what-type-of-data-I-expect-to-get",
                type: "request-method-type",  //one of the following: { get, post, put, delete, fetch, etc. }
                cache: true/false,  //  true = use cache, false = don't use cache, constantly refresh.
                success: function(data) { ... }   //  same as in $.getJSON
        */
        $.ajax({
            url: "cars-part2.json",
            dataType: "json",
            type: "get",
            cache: false,
            success: function (data) {
                console.log(data);
                $(data.cars).each(function (index, value) {
                    addCar(this["brand"], this["model"], this["color"], this["year"], this["km"]);
                    refreshCarsTable();
                });
            }
        });
    }

    function buildCarTableRow(car) {
        var newRow = $("<tr id=\"row" + counter + "\" titie=\"" + car.toString() + "\">");
        var cols = "";

        cols += '<td class="col-md-1">' + car.brand + '</td>';
        cols += '<td class="col-md-1">' + car.model + '</td>';
        cols += '<td class="col-md-1">' + car.color + '</td>';
        cols += '<td class="col-md-1">' + car.year + '</td>';
        cols += '<td class="col-md-1">' + car.km + '</td>';
        cols += '<td class="col-md-1">' + Car.calcKmPerYear(car) + '</td>';
        cols += '<td class="col-md-1"><input type="button" id="btn-delete' + counter + '" class="ibtnDel btn btn-md btn-danger" titie="' + car.toString() + '" value="Delete"></td>';

        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
        $("#h5-statusLine").html("There are " + counter + " cars in the cars list");
    }

    function addRowToHtmlTable(car) {
        //  Does <tbody> tag exists in cars <table>
        if ($("#tbl-cars tbody").length == 0) {
            $("#tbl-cars").append("<tbody></tbody>");
        }

        // Append car to table (append ==> add to the end of the table)
        $("#tbl-cars tbody").append( buildCarTableRow(car) );
    }

    /* Presentation Logic Function */
    function addNewCar() {
        var brand = $("#sle-brand").val();
        var model = $("#sle-model").val();
        var color = $("#sle-color").val();
        var year = $("#sle-year").val();
        var km = $("#sle-km").val();

        var newCar = null;
        //  Verify all properties has values before creating a new Car instance 
        if (brand != null && brand != undefined && brand != '' &&
            model != null && model != undefined && model != '' &&
            color != null && color != undefined && color != '' &&
            year != null && year != undefined && year >= 1900 &&
            km != null && km != undefined && km > 0) {

            newCar = addCar(brand, model, color, year, km);
            if (newCar != null && newCar != undefined) {
                addRowToHtmlTable(newCar);
            }
            $("#div-result").html("<b>New Car = " + newCar.toString() + "KM / Year: " + Car.calcKmPerYear(newCar) + "</b>");
        }

        //  Clear data from input fields of Modal window
        $("#sle-brand").val('');
        $("#sle-model").val('');
        $("#sle-color").val('');
        $("#sle-year").val('');
        $("#sle-km").val('');

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
        return newCar;
    }

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
    function printCarsArray() {
        for (var i = 0; i < cars.length; i++) {
            console.log("cars[" + i + "] = " + cars[i].toString());
        }
    }

    function refreshCarsTable() {
        clearCarsTable();
        addCarsArrayToTable();
    }

    function clearCarsTable() {
        if (counter > 0) {
            $("#tbl-cars tbody").empty();
        }
        counter = 0;
    }

    function addCarsArrayToTable() {
        if (cars.length > 0) {
            for (var i = 0; i < cars.length; i++) {
                addRowToHtmlTable(cars[i]);
            }
        }
    }

    console.log("-------------------------------------");
    console.log("Find the car with the highest km/year");
    console.log("-------------------------------------");
    console.log("In an empty array:");
    console.log("\t" + findCarWithHighestKmPerYear());

    addCar("Renault", "Clio", "Red", 1994, 543210);
    console.log("\nIn an array containing 1 car:");
    console.log("\t" + findCarWithHighestKmPerYear());

    addCar("Siat", "Ibiza", "Blue", 2012, 345678);
    addCar("Subaro", "Crime", "White", 1987, 987654);
    console.log("\nIn an array containing more than 1 car:");
    console.log("\t" + findCarWithHighestKmPerYear());

    console.log("-------------------- ");
    console.log("Printing cars array: ");
    console.log("-------------------- ");

    printCarsArray();

    importCarsJson();
    refreshCarsTable();
});

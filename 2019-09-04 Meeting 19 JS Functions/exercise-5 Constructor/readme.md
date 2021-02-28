# JS Functions - Class Constructor
## Step 1

    JavaScript *step-1_script.js* has the code for step 1 of the assignment. The same code is also exists in the main program, just run the *index.html* and check the console.

## step 2:
### **Features:**
#### When page is loading the cars are loaded into the array in 3 ways:
1. Hard coded in *script.js* (also demostrating finding the car with the highest km/year ratio) on an empty array, array with 1 car and array with more than 1 car.
2. Loading rows from *cars-part1.json* using ***$.getJSON(url, callback)***.
3. Loading rows from *cars-part2.json* using ***$.ajax({..})***.

#### After cars are loaded to the array, the cars table is filled in the HTML.
    on every car created the table is refreshed (the entire table is cleared and re-created). This is done to keep the data in the array synchronized with the data shown in the table.

#### Clicking the "*Add New Car*" button at the bottom of the table will open a modal window to enter data of a car. The new car will be created at the end of the table, the status line at the bottom will show how any cars there are in the list and the line below it will show the details of the new car that was added.
    Note: All fields in the model window are required (mandatory).

#### When a 

#### Clicking one of the "*Delete*" buttons will delete the car in that row and the table will refresh.
    The table is emptied and all rows are recreated according to the items in the array). This is done to keep the data in the array synchronized with the data shown in the table.
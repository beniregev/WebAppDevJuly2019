function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var result = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    result = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (result % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return result;
}

smallestCommons([1, 5]);    //  60
smallestCommons([5, 1]);    //  60
smallestCommons([2, 10]);   //  2520
smallestCommons([1, 13]);   //  360360
smallestCommons([23, 18]);  //  6056820
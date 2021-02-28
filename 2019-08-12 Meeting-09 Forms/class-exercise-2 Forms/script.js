// Add your code here

function updateGradeValue() {
  // 1) read the grade from the input
  var grade = document.getElementById("grade").value;

  // 2) write the grade to the span
  document.getElementById("gradeValue").innerHTML = grade;
}
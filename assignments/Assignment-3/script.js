// Assignment 3: Conditional Logic Implementation
const output = document.getElementById("output");
function show(line) {
  output.textContent += line + "\n";
  console.log(line);
}

const score = 85;
let gradeKey;

if (score >= 90) {
  gradeKey = "A";
} else if (score >= 80) {
  gradeKey = "B";
} else if (score >= 70) {
  gradeKey = "C";
} else if (score >= 60) {
  gradeKey = "D";
} else {
  gradeKey = "F";
}

let grade;
switch (gradeKey) {
  case "A":
    grade = "A";
    break;
  case "B":
    grade = "B";
    break;
  case "C":
    grade = "C";
    break;
  case "D":
    grade = "D";
    break;
  default:
    grade = "F";
}

const status = score >= 60 ? "Passed" : "Failed";

show(`Score: ${score}`);
show(`Grade: ${grade}`);
show(`Status: ${status}`);

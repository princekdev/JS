// Assignment 1: Variables, Data Types, and Console Operations
const output = document.getElementById("output");
function show(line) {
  output.textContent += line + "\n";
  console.log(line);
}

var name = "Alice";
let age = 25;
const isEmployed = true;
const skills = ["HTML", "CSS", "JavaScript"];

show(`Name: ${name} (Type: ${typeof name})`);
show(`Age: ${age} (Type: ${typeof age})`);
show(`Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`);
show(`Skills: ${JSON.stringify(skills).replace(/,/g, ", ")} (Type: ${typeof skills})`);

// Assignment 4: Loop Control Structures
const output = document.getElementById("output");
function show(line) {
  output.textContent += line + "\n";
  console.log(line);
}

show("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
  show(`5 x ${i} = ${5 * i}`);
}

show("\n-- First number > 10 divisible by 6 --");
let n = 11;
while (true) {
  if (n % 6 === 0) {
    show(`Found: ${n}`);
    break;
  }
  n++;
}

show("\n-- do...while with continue (skipping even numbers) --");
let j = 0;
do {
  j++;
  if (j % 2 === 0) {
    continue;
  }
  show(`Odd number: ${j}`);
} while (j < 5);

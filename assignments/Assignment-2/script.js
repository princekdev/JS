// Assignment 2: Operators, Expressions, and Input Handling
const output = document.getElementById("output");
function show(line) {
  output.textContent += line + "\n";
  console.log(line);
}

document.getElementById("runBtn").addEventListener("click", () => {
  output.textContent = "";

  const subtotal = Number(prompt("Enter the bill amount:", "100"));
  const tipPercentage = Number(prompt("Enter the tip percentage:", "15"));

  const tip = (subtotal * tipPercentage) / 100;
  let total = subtotal;
  total += tip;

  show(`Subtotal: $${subtotal}`);
  show(`Tip Percentage: ${tipPercentage}%`);
  show(`Calculated Tip: $${tip}`);
  show(`Total Amount to Pay: $${total}`);
});

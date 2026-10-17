// Assignment 5: Function Architecture and Scope
const output = document.getElementById("output");
function show(line) {
  output.textContent += line + "\n";
  console.log(line);
}

function areaStandard(length = 5, width = 4) {
  return length * width;
}

const areaArrow = (length = 5, width = 4) => length * width;

show(`Standard Function Area (Default 5x4): ${areaStandard()}`);
show(`Arrow Function Area (Custom 10x3): ${areaArrow(10, 3)}`);

// Block scope demonstration
{
  let blockVar = "I exist only inside this block";
}

try {
  show(blockVar);
} catch (error) {
  show(`Scope Test Error: ${error.name}: ${error.message}`);
}

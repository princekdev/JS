// Assignment 6: Arrays, Objects, and Core Methods
const output = document.getElementById("output");
function show(line) {
  output.textContent += line + "\n";
  console.log(line);
}

const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 },
];

show("-- All Products (forEach) --");
products.forEach((product) => {
  show(`Item: ${product.name} - Price: $${product.price}`);
});

show("\n-- Filtered Products (Price < $50) --");
const cheapProducts = products.filter((product) => product.price < 50);
show(`[ ${cheapProducts.map((p) => `{ name: '${p.name}', price: ${p.price} }`).join(", ")} ]`);

show("\n-- Mapped Product Tags (map) --");
const tags = products.map((product) => `${product.name.toUpperCase()} costs $${product.price}`);
show(`[ ${tags.map((t) => `"${t}"`).join(", ")} ]`);

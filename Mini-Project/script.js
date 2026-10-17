// Mini Project: Interactive Product Inventory & Analytics Dashboard
const output = document.getElementById("output");

// Dynamic price thresholds
const BUDGET_MAX = 50;
const PREMIUM_MIN = 500;

const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
];
const log = [];

// Regular function: validate input (if...else)
function isValidProduct(name, price) {
  if (!name || name.trim() === "") {
    return false;
  } else if (Number.isNaN(price) || price <= 0) {
    return false;
  } else {
    return true;
  }
}

// Regular function: assign category badge (switch)
function getCategory(price) {
  switch (true) {
    case price < BUDGET_MAX:
      return "Budget";
    case price >= PREMIUM_MIN:
      return "Premium";
    default:
      return "Standard";
  }
}

// Regular function: search inventory (loop + break)
function findProduct(name) {
  let found = null;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === name.toLowerCase()) {
      found = inventory[i];
      break;
    }
  }
  return found;
}

// Arrow function: custom tax/discount; all values are local to the call
const applyAdjustments = (price, taxRate = 0, discountRate = 0) => {
  const discounted = price - (price * discountRate) / 100;
  return discounted + (discounted * taxRate) / 100;
};

// Regular function: total inventory statistics
function calculateTotalValue(items, taxRate = 0, discountRate = 0) {
  let total = 0;
  for (const item of items) {
    total += applyAdjustments(item.price, taxRate, discountRate);
  }
  return total;
}

const formatList = (list) => `[${list.map((s) => `"${s}"`).join(", ")}]`;

// Prompt for a new product: continue on bad input, break when done
function addProduct() {
  let attempts = 0;
  while (attempts < 3) {
    attempts++;
    const name = prompt("Enter new product name:", "Monitor");
    if (name === null) {
      break; // user cancelled
    }
    const priceInput = prompt("Enter product price:", "$150");
    if (priceInput === null) {
      break;
    }
    const price = Number(priceInput.replace("$", ""));

    if (!isValidProduct(name, price)) {
      log.push("Invalid or missing input, please try again.");
      continue;
    }
    if (findProduct(name)) {
      log.push(`"${name.trim()}" already exists in the inventory.`);
      break;
    }
    inventory.push({ name: name.trim(), price: price });
    log.push(`[Prompt executed: User adds "${name.trim()}" at "$${price}"]`);
    break;
  }
  render();
}

function render() {
  const lines = ["--- Initializing Inventory System ---", ...log];

  lines.push("", "--- Processing Inventory Roster (forEach) ---");
  inventory.forEach((item) => {
    lines.push(`* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`);
  });

  const affordable = inventory.filter((item) => item.price < 200).map((item) => item.name);
  const report = inventory.map((item) => `${item.name.toUpperCase()}: $${item.price}`);

  lines.push("", "--- Financial Analytics ---");
  lines.push(`Total Inventory Value: $${calculateTotalValue(inventory)}`);
  lines.push(`Filtered Affordable Items (Under $200): ${formatList(affordable)}`);
  lines.push(`Formatted Report List: ${formatList(report)}`);

  output.textContent = lines.join("\n");
  console.log(output.textContent);
}

document.getElementById("addBtn").addEventListener("click", addProduct);
render();

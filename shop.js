const products = ["Apple", "Banana", "Orange"];
const prices = [6, 9, 7];

//products and prices
function displayProducts() {
  console.log("Available Products:");
  for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}. ${products[i]} - R${prices[i]}`);
  }
}

function calculateTotalCost(selectedItems) {
  let totalCost = 0;
  for (let i = 0; i < selectedItems.length; i++) {
    totalCost += prices[selectedItems[i]];
  }
  return totalCost;
}

// to buy
function shop(budget) {
  displayProducts();
  let selectedItems = [0, 1]; // selected products
  let totalCost = calculateTotalCost(selectedItems);
  if (totalCost > budget) {
    console.log("Sorry, Insufficient Funds.");
  } else {
    let change = budget - totalCost;
    console.log(`Total cost: R${totalCost}`);
    console.log(`Change Remaining: R${change}`);
  }
}

let budget = 50;
shop(budget);
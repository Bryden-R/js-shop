const products = ["Apple", "Banana", "Orange"];
const prices = [6, 9, 7];
const userBudget = 50;

// products with prices
function getProductList() {
  let productList = "Available Products:\n";
  for (let i = 0; i < products.length; i++) {
    productList += `${i + 1}. ${products[i]} - R${prices[i]}\n`;
  }
  return productList;
}

// calculating total cost
function calculateTotalCostAndItems(selectedIndices) {
  let total = 0;
  let purchasedItems = {};

  for (let i = 0; i < selectedIndices.length; i++) {
    let index = selectedIndices[i];
    if (index >= 0 && index < products.length) {
      total += prices[index];
      let product = products[index];
      purchasedItems[product] = (purchasedItems[product] || 0) + 1;
    } else {
      alert(`Invalid: ${index}`);
    }
  }

  return { total, purchasedItems };
}

// purchasing
function shop() {
  const productList = getProductList();

  const selectedProducts = [];

  while (true) {
    let productIndexInput = prompt(
      `${productList}\nEnter the number for the fruits you wish to purchase (or press 0 if selection is complete):`
    );
    let productIndex = +productIndexInput - 1;

    if (productIndex === -1) {
      break;
    }

    if (
      productIndex < 0 ||
      productIndex >= products.length ||
      productIndex != productIndex
    ) {
      alert("Invalid Number. Please Try Again.");
    } else {
      selectedProducts.push(productIndex);
    }
  }

  const { total, purchasedItems } =
    calculateTotalCostAndItems(selectedProducts);

  if (userBudget < total) {
    alert(`Insufficient Funds. Your budget is R${userBudget}.`);
  } else {
    const change = userBudget - total;
    let purchasedSummary = "You purchased:\n";
    for (let item in purchasedItems) {
      purchasedSummary += `${purchasedItems[item]} x ${item}\n`;
    }
    alert(`${purchasedSummary}Total cost: R${total}\nChange: R${change}`);
  }
}

shop();
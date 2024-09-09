// products and priceing
const products = ["apple", "banana", "orange"];
const prices = [6, 9, 7];

// Display available products and their prices
function displayProducts() {
    console.log("Products available:");
    for (let i = 0; i < products.length; i++) {
        console.log(`${i + 1}. ${products[i]} - R${prices[i]}`);
    }
}

// Calculation of total products
function calculateTotal(selectedProducts) {
    let total = 0;
    for (let i = 0; i < selectedProducts.length; i++) {
        total += prices[selectedProducts[i] - 1]; 
    }
    return total;
}

// purchasing products
function runShopSimulation() {
    const budget = 50;
    const selectedProducts = [1, 2]; 

    displayProducts();

    //total cost
    let totalCost = calculateTotal(selectedProducts);
    
    // Check if the buye can afford
    if (totalCost > budget) {
        console.log("You don't have enough money.");
    } else {
        let change = budget - totalCost;
        console.log(`Total cost: R${totalCost}`);
        console.log(`Remaining change: R${change}`);
    }
}



const storeInventory = {
    "item1": 25,   // Price in USD
    "item2": 50,   // Price in USD
    "item3": 10    // Price in USD
};

const exchangeRate = 80; // 1 USD to 80 INR

function convertToRupees(priceUSD) {
    return priceUSD * exchangeRate;
}

const convertedInventory = Object.entries(storeInventory).map(([item, price]) => {
    const convertedPrice = convertToRupees(price);
    return { item, priceUSD: price, priceINR: convertedPrice };
});

console.log("Converted Inventory:");
console.log(convertedInventory);

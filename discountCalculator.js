function calculateDiscountedPrice(quantity, pricePerItem) {
    debugger;  // Helpful for testing edge cases
    
    // Validate inputs
    if (quantity < 0 || pricePerItem < 0) {
        return 0;
    }
    
    // Calculate total (no loop needed)
    let totalPrice = quantity * pricePerItem;
    
    // Apply discount for bulk purchases
    if (quantity >= 10) {
        totalPrice = totalPrice * 0.9;  // 10% discount
    }
    
    return totalPrice;
}

module.exports = calculateDiscountedPrice;
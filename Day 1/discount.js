function calculateDiscount(price, discount) {
    if (isNaN(price) || isNaN(discount)) {
        console.error("price and discount should be numbers!");
        return;
    }
    let discounted = price - discount;
    return discounted;
}

console.log(calculateDiscount(100, "80"));
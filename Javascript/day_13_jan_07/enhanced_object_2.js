function createLaptop(brand, model, price, madeYear) {
    // es_5
    return {
        brand: brand,
        model: model,
        price: price,
        madeYear: madeYear,
    }
}
console.log(createLaptop('HP', 'ProBook', 50000, 2024))

function makeLaptop(brand, model, price, madeYear) {
    // es_6
    return {brand, model, price, madeYear}
}
console.log(makeLaptop('HP', 'ProBook', 50000, 2024))
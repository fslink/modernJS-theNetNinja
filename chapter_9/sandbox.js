// const prices = [50,30,50,80,40,60];

// const salePrices = prices.map((price) => {
//     return price / 2;
// });

// console.log(salePrices);
// console.log(prices);

const products = [
    {name: 'carapace verte', price: 30},
    {name: 'carapace bleue', price: 100},
    {name: 'carapace rouge', price: 50},
    {name: 'banana skin', price: 10},
];

const saleProducts = products.map((product) => {
    if(product.price > 30){
        return {name: product.name, price: product.price / 2};

    } else {
        return product;
    }
});

console.log(saleProducts);
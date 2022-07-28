/** Assignment 3 : Function, Array, and Object
 * calculate the total price of all products after applying a discount */

function calculate(data){
    let totalSum=0;
    for(let i=0;i<data.products.length;i++){
        totalSum += data.products[i]['price']-(data.products[i]['price']*data.discount);
    }
    return totalSum;
}

const discountedPrice = calculate({
    discount: 0.1,
    products: [
        {
            name: 'Product 1',
            price: 100
        },
        {
            name: 'Product 2',
            price: 700
        },
        {
            name: 'Product 3',
            price: 250
        }
    ]
});
console.log(discountedPrice);

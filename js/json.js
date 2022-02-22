const user = {id: 23, name: 'Arif', job: 'nai'};
const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

const shop = {
    name: 'hamara shop',
    address: 'nunu road',
    products: ['laptop', 'jangua', 'cocacola'],
    money: '3000',
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);
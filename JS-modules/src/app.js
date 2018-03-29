console.log('-app.js-');

// import {itemName,itemPrice} from './hotel/menu';
// console.log(itemName);
// console.log(itemPrice); 


// import {itemName as name,itemPrice as price} from './hotel/menu'
// console.log(name);
// console.log(price);

// import * as item from './hotel/menu.js';
// console.log(item.itemName);
// console.log(item.itemPrice);

//----------------------------------------------------------------



import item,{drink,sweet} from './hotel/menu';

// item=null; // we cannot mutate imported member reference..

// item.price=300; // mutate data

console.log(item.name);
console.log(item.price);
console.log(drink.name);
console.log(sweet.name);






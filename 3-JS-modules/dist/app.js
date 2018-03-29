'use strict';

var _menu = require('./hotel/menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


// item=null; // we cannot mutate imported member reference..

// item.price=300; // mutate data

console.log(_menu2.default.name);
console.log(_menu2.default.price);
console.log(_menu.drink.name);
console.log(_menu.sweet.name);
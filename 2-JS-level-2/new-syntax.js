
//------------------------------------------------------
// obj-literal enhancements
//------------------------------------------------------

// var name = "Nag";
// var age = 34;

// var dynamicField = 'office'; // office | vacaion

// // ES5
// var person = {
//     name: name,
//     age: age,
//     sayName: function () {
//         console.log('im ' + this.name);
//     },
//     address: 'chennai'
// };

// ES6
// let newPerson = {
//     name,
//     age,
//     sayName() {
//         console.log('im ' + this.name);
//     },
//     [dynamicField + "-address"]: 'chennai',
//     [10 + 20]: 'some value',
//     1: 'one',
//     2: 'Two',
//     ['do someThing']() {
//         console.log('doing something...');
//     }
// };


//------------------------------------------------------
// destructuring
//------------------------------------------------------


//  a. Array destructuring

// let arr = [10, 20, 30,400,50,60,[70,80]];

// // ES5 
// // let n1=arr[0];
// // let n2=arr[1];
// // let n3=arr[2];

// // ES6
// let [n1, n2, n3,n4=40,,,[n7,n8]] = arr; 



// b. object destructuring

// let person={
//     name:'Nag',
//     age:34
// };

// Es5
// let myName=person.name;
// let myAge=person.myAge;

// Es6
// let {name:myName,age:myAge}=person;

// let {name:name,age:age}=person;
// or
// let {name,age}=person;

// let myName;
// let myAge;

// ({name:myName,age:myAge}=person);




//------------------------------------------------------
// spread operator
//------------------------------------------------------


// function func(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// let nums=[10,20,30];

// ES5
// func(nums[0],nums[1],nums[2]);

// es6
// func(...nums);


// let arr1=[1,2,3];
// let arr2=[7,8,9];
// let str="IBM";

// let newArr=[...arr1,4,5,6,...arr2,...str];




//------------------------------------------------------
// symbol-data type ( new primitive )
//------------------------------------------------------

/*

    unique & immutable value,
    used as object's property for identity purpose

    how to create symbols in .js-lang ?

    var symbol=Symbol.for('key');

*/

// let symbol1=Symbol.for('key1');
// let symbol2=Symbol.for('key1');

// e.g

// let javaSymbol = Symbol.for('java');
// let jsSymbol = Symbol.for('js');

// let e1 = { name: 'A', [javaSymbol]: 'java,spring,scala' }
// let e2 = { name: 'B', [jsSymbol]: 'js,ng,node.js' }
// let e3 = { name: 'C', [javaSymbol]: 'java' }


// if(e1[javaSymbol]){
//     console.log('welcome my java friend...');
//     console.log(e1[javaSymbol]);
// }

//--------------------------------------------------------------
// for-of loop  : to iterate , iterable object
//--------------------------------------------------------------


// e.g

// let menu = ['idly', 'dosa', 'vada', 'poori'];

// let it=menu[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


// for(let item of menu){
//     console.log(item);
// }

// let newMenu = [...menu, 'biryani']
// let [item1, item2, item3, item4] = menu;



//--------------------------------------------------------------
// custom iterabel objects
//--------------------------------------------------------------


// let idMaker={
//     [Symbol.iterator]:function(){
//         let id=0;
//         return {
//             next:function(){
//                 id++;
//                 return {value:id<=10?id:undefined,done:id<=10?false:true};
//             }
//         };
//     }
// };

// for(let id of idMaker){
//     console.log(id);
// }
// let ids=[...idMaker];
// let [id1,id2,id3]=idMaker;




//--------------------------------------------------------------
// collections
//--------------------------------------------------------------


// till ES5   , array is the only collection we had

// ES6  ==> set, map

// let set=new Set();
// set.add("idly");
// set.add("vada");
// set.add("vada");
// set.add("poori");

// let ow1={name:'Nag'}
// let ow2={name:'Ria'}

// let car1={name:'fortuner'}
// let car2={name:'toy-car'}

// let map=new Map();
// map.set(ow1,car1);
// map.set(ow2,car2);





//--------------------------------------------------------------
//  arrow-function
//--------------------------------------------------------------


/*

  we can create function .js-lang in 3 ways

   a. function declaration
   b. function expression
   c. arrow-funtion

*/


// function expression
//--------------------------------

// let getPrice = function () {
//     return 100 + 200;
// }

//   syntax of arrow-function
//--------------------------------

// let getPrice = () => {
//     return 100 + 200;
// }

// let getPrice = (count) => {
//     return count * (100 + 200);
// }
// or
// let getPrice = count => {
//     return count * (100 + 200);
// }

// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax;
// }
// or
// let getPrice = (count, tax) => count * (100 + 200) + tax;

// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200)
//     let total = cost + tax;
//     return total;
// }


// why/where we need 'arrow-function' in .js-lang ?

/*

    ==> to make compact function-arguments
    ==> to capture 'this'  ( real use )

*/

// e.g

// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// // nums.sort(function (a, b) {
// //     return a - b;
// // });
// nums.sort((a, b) => a - b);

// e.g


/*

    by default, regular-function(s)

        ==> bound to global-object
        or
        => statically/dynamically bind to any other object


    advantages of arrow-function(s)
    
        ==> they always bound to creator(this)
        and
        ==> we cannot bind( statically/dynamically) arrow-functions to any other object

*/

// let trainer={
//     name:'Nag',
//     doTeach:function(){
//         console.log(this.name+" teaching .js");
//         // let askQues=function(q){
//         //     console.log(this.name +" answering "+q);
//         // }
//         // or
//         let askQues=(q)=>{
//             console.log(this.name +" answering "+q);
//         }
//         console.log('teaching end...');
//         return askQues;
//     }
// };

// let askQues=trainer.doTeach();
// askQues("Q1");

// let newTnr={name:'Praveen'}
// askQues.call(newTnr,"Q2");


//-------------------------------------------------------

// Quiz 



// let invoice={
//     num:123,
//     process:function(){
//         console.log('INV-'+this.num +" processed..");
//     }
// };


// let invoice={
//     num:123,
//     process:()=>{
//         console.log('INV-'+this.num +" processed..");
//     }
// };


// let invoice={
//     num:123,
//     process:function(){
//         console.log('INV-'+this.num +" processed partially");
//         return function(){
//             console.log('INV-'+this.num +" processed completly");
//         }
//     }
// };

// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('INV-' + this.num + " processed partially");
//         return () => {
//             console.log('INV-' + this.num + " processed completly");
//         }
//     }
// };


// let complete = invoice.process();
// complete();



// Quiz

/*

imp-note:
-----------

all event-handler(s) always bound to event-emitter objects

i.e  event-handler always executed by event-emiiter ( we cant change rule )

*/


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        // let self=this;
        // setInterval(function () {
        //     console.dir(this);
        //     self.age++;
        //     console.log(self.name + " : " + self.age);
        // }, 1000);

        // or

        setInterval(() => {
            console.dir(this);
            this.age++;
            console.log(this.name + " : " + this.age);
        }, 1000);


    }
}

let p = new Person('Ria', 3);









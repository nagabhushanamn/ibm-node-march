

// 1.
// function foo(b) {
//     var a = 10;
//     return a + b + 11;
// }

// function bar(x) {
//     var y = 3;
//     return foo(x * y);
// }

// console.log(bar(7)); //returns 42

// 2.

// function foo(){}
// function bar(){foo()}
// function baz(){bar()}
// baz();

// 3.


// function foo(){throw new Error('hate .js');}
// function bar(){foo()}
// function baz(){bar()}
// baz();

// 4.

// function foo(){
//     foo();
// }
// foo();

// 5.

// function longRunning(){
//     var i=0;
//     while(i<10){
//         console.log('long....');
//         i++;
//     }
// }
// function shortRunning(){
//     console.log('short...');
// }

// longRunning();
// shortRunning();


// imp-note : .js-runtime can execute one function at a time


//---------------------------------------------------------------



// Event-Queue & Event-Loop

/*

    <button class="veg"> button-1 </button>
    <button class="non-veg"> button-2 </button>

*/

// console.log('start...');

// $.on('.veg','click',function vegHandler(e){
//     console.log(' handling click event on .veg elements');
// });

// $.on('.non-veg','click',function nonVegHandler(e){
//     console.log(' handling click event on .non-veg elements');
// });

// console.log('cont.. other work....');

// function longRunning(){
//     var i=0;
//     while(i<10){
//         console.log('long....');
//         i++;
//     }
// }
// longRunning();


//---------------------------------------------------



// Non Blocking IO

// IO 

// ==> ( in browser IO means - API calls  (AJAX calls ) , dealing HTML5 APIs )
// ==> ( in Node.js IO means - reading file system , crud operatiosn with DB , web service calls )



// console.log('start....');

// IO1  ( e.g API calll)  , XHR
setTimeout(function timeoutCallback(){
    console.log('handle IO outcome');
},1000);

console.log('cont.. with other work...')

function longRunning(){
    var i=0;
    while(i<1000){
        console.log('long....');
        i++;
    }
}
longRunning();


// imp-note : all IO operations are handled by browser APIs



//---------------------------------------------------

// function f1(){

// }

// function f2(){
//     f1();  // sync
//     //.....
// }

// setTimeout(f1,5000); // async

// // ........


//---------------------------------------------------
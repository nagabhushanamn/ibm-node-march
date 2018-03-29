(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
console.log('-app.js-');


//----------------------------------------------------------------------

// var ibmApp = ibmApp || {};
// ibmApp.mod1.doWork();

//----------------------------------------------------------------------

// let m1=require('./pack1');
// m1.greet('en');
// m1.greet('ka');
// m1.greet();

//----------------------------------------------------------------------

let ibmGreet=require('ibm-nag-greet-march');
ibmGreet.greet('en');
ibmGreet.greet('ka');
ibmGreet.greet();

//----------------------------------------------------------------------
},{"ibm-nag-greet-march":2}],2:[function(require,module,exports){

//----------------------------------------------------------------------
// var ibmApp = ibmApp || {};

// (function () {

//     ibmApp.mod2.doWork();
//     ibmApp.mod3.doWork();

//     var o = {
//         doWork: function () {
//             console.log('im mod1');
//         }
//     };
//     ibmApp.mod1 = o;  // export 

// })();

//----------------------------------------------------------------------

console.log('-pack1/mod1.js-');

let en = require('./mod2');
let ka = require('./mod3');

// var message="good noon";
function greet(lang) {
    //console.log(message);
    if (lang === "en") {
        en();return;
    }
    if (lang === "ka") {
        ka();return;
    }
    console.log('give me lang, for regional greetings');
};
// greet();

module.exports = {
    greet
};
},{"./mod2":3,"./mod3":4}],3:[function(require,module,exports){

//----------------------------------------------------------------------
// var ibmApp = ibmApp || {};
// (function () {
//     var o = {
//         doWork: function () {
//             console.log('im mod2');
//         }
//     };
//     ibmApp.mod2=o;
// })();
//----------------------------------------------------------------------

function greet(){
    console.log('Hellooo');
}
module.exports=greet;
},{}],4:[function(require,module,exports){

//----------------------------------------------------------------------
// var ibmApp = ibmApp || {};
// (function () {
//     var o = {
//         doWork: function () {
//             console.log('im mod3');
//         }
//     };
//     ibmApp.mod3 = o;
// })();
//----------------------------------------------------------------------


function greet(){
    console.log('Namskara..');
}
module.exports=greet;
},{}]},{},[1]);

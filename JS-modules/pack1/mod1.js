
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
    if (lang === "es") {
        console.log('ola');return;
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
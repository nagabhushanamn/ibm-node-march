/**
 * http://usejsdoc.org/
 */


/*

	data-types
	-----------
	
	a. simple/primitives  ==> values
	
		1. string
		2. number
		3. boolean
		4. undefined
	
	b. complex/reference  ==> objects


*/

//---------------------------------------------------
//a. simple/primitives  ==> values
//---------------------------------------------------
// 1. string
var name = "Nag";
var selection = 'abc';
// string interpolation  ( es6 )
var dynamicString = `the value is ${2 + 2}`;
var multiLineString = `
	line 1
	line 2
	line ${10 + 10}
`;
//---------------------------------------------------
// 2. Number
var count = 12;
var cost = 12.12;
//---------------------------------------------------
// 3. boolean
var found = true;
/*
 *   falsy values in .js-lang
 *   
 *   ==> false,0,"",null,undefined,NAN
 *   
 *   ref : https://dorey.github.io/JavaScript-Equality-Table/
 * 
 */
//---------------------------------------------------
// 4. undefined
var v;
//---------------------------------------------------



//---------------------------------------------------
//b. complex/reference  ==> objects
//---------------------------------------------------


/*
 *  how to create object in .js-lang ?
 *  
 *  syntax:
 *  
 *  var ref=new Constructor();
 *  
 *  imp-note:
 *  
 *  	by default, all .js-objects are
 *  
 *  		- extensible ( i.e we can add any property at any time )
 *      - configurable ( i.e we can delete property if not required ) 
 */

//var config = new Object();
//config.url = "http://";
//config.httpMethod="GET";
//config.success=function(){
//	console.log('executing on success');
//};
//delete config.httpMethod;
//

//---------------------------------------------------
//==> literal-style objects
//we can create objects without 'new' keyword 

//---------------------------------------------------


// 1. Object

var config = new Object();
config.url = "http://";
config.httpMethod="GET";
config.success=function(){
	console.log('executing on success');
};

// or ( literal-style )

var newConfig={
		url:'http://',
		httpMethod:'GET',
		success:function(){
			//...
		}
};

//---------------------------------------------------

// 2. Array / List


var arr=new Array();
arr.push("item1");
arr.push("item2");
arr.push("item3");

// or literal-style

var newArr=[
	"item1",
	"item2",
	"item3"
];


//---------------------------------------------------

// 3. RegExp

var adharPattern=new RegExp("\\d{4}-\\d{4}-\\d{4}");

// or ( literal style )

var newAdharPattern=/\d{4}-\d{4}-\d{4}/;


//---------------------------------------------------

// 4. Function

/*
 * imp-note:
 * 
 * ==> every function in .js-lang is an object
 * 
 */

var add=new Function("n1","n2","var result=n1+n2;return result;")

// or ( literal style )

function newAdd(n1,n2){
	var result=n1+n2;
	return result;
}


//---------------------------------------------------


// How to access obj's properties ?

/*
 *  2 ways
 *  
 *  1. '.' notation , if property is valid identifier ( i.e without '-' or 'space' )
 *  else
 *  2. '[]' notation
 * 
 */

var person={
		name:'Nag',
		'home-address':'chennai'
};

person.name="Nag N";
console.log(person.name);

person['home-address']="bengalore";
console.log(person['home-address']);














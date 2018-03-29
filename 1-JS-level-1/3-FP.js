/**
 * http://usejsdoc.org/
 */


/*

 Functional Programming ( FP )
 -----------------------------
 
 
	- A function can be stored in a variable or value
	- The return value of a function can be a function
	- A parameter of a function can be a function
	
	------------------------------------------------
	
	
	how to create function(s) in .js-language ?
	
	3 ways
	
	- function declaration
	
			- Named function
			- function-obj created at context-creation phase
			- always get hoist with function-obj
			
			when to use ?
			
			- to keep function-obj always within context
			
	- function expression
			
			- Anonymous function
			- function-obj created at context-execution phase
	
			when to use ?
			
			- to create object based on input/condition
			
	
	- arrow-function  ( es6 )

	


*/

//------------------------------------------------

//- function declaration

//console.log(add(12,13));
//
//function add(n1,n2){
//	return n1+n2;
//}

//console.log(add(12,13));

//------------------------------------------------

//- function expression
//console.log(add(12,13));  // Error
//
//var add=function(n1,n2){
//	return n1+n2;
//};

//console.log(add(12,13));

//------------------------------------------------

//e.g
//
//let userType;
//let userAction;
//function login(){
//	userType="admin";  // guest
//}
//login();
//
//if(userType==="admin"){
//	userAction=function(){
//		console.log('admin...');
//	}
//}else{
//	userAction=function(){
//		console.log('guest.. ');
//	}
//}
//userAction();



//------------------------------------------------


//- A function can be stored in a variable or value
//
//function greet(){
//	console.log('Hello...');
//}
//
//let sayHello=greet;

//------------------------------------------------

//- A parameter of a function can be a function
//
//function greet(f){
//	if(f){
//		f();return;
//	}
//	console.log('Hello ...');
//}
//
//greet();
//greet(function(){console.log('Ola..');});

//e.g
//
//let nums = [ 1, 3, 5, 7, 9, 2, 4, 6, 8, 10 ];
////nums.sort();
//let asc = function(a, b) {
//	return a - b;
//};
//let desc = function(a, b) {
//	return b - a;
//};
//nums.sort(desc);


//------------------------------------------------

//- The return value of a function can be a function
//
//
//function teach(){
//	console.log('teaching...');
//	let learn=function(){
//		console.log('learning...');
//	}
//	//learn();
//	return learn;
//}
//
//let learnFunc=teach();
//learnFunc();
//learnFunc();
//

//------------------------------------------------

/*
 * imp-note : 
 * 
 * to .js-function , we can pass 0 or n-number of params
 * 
 *  ==> every function-obj , has 1 implicit 'arguments' to hold given params
 * 
 */
//
//function func(a,b,c,d){

//	console.dir(arguments[0]);
//	console.dir(arguments[1]);
//	console.dir(arguments[2]);

//}
//func(1,2,3,4);



//e.g

//
//
//function sum(){
//	let result=0,
//	    len=arguments.length,
//	    i=0;
//	while(i<len){
//		result+=arguments[i];
//		i++;
//	}    
//	return result;
//}

//------------------------------------------------

// can we overload function .js-lang by params? No


//
//function getFood(){
//	return "No Food";
//}
////let getFood=new Function('...');
//
//function getFood(pay){
//	//if(arguments.length===0)return "No Food";
//	return "biryani";
//}
////getFood=new Function('...');
//
//console.log(getFood());
//


//------------------------------------------------


// Es6

/*
 *  - function with default-params
 *  - function with rest-param
 * 
 */


//- function with  default-params

//
//function func(a = 1, b = 2) {
//
//	// Es5
//	//	if(!a)a=1;
//	//	if(!b)b=2;
//
//	//	a = a || 1;
//	//	b = b || 2;
//
//	console.log(a);
//	console.log(b);
//}
//
//func(undefined, 20);


//------------------------------------------------


// - function with rest-param

//
//function func(a,b,...restParam){
//	console.log(a);
//	console.log(b);
//	console.log(restParam); // rest params
//	console.log(arguments); // all params
//}
//func(1,2,3,4,5,6,7,8,9)



//------------------------------------------------


// Function Closure
//-----------------------

/*
 * A closure is a function having access to the parent scope,
 * even after the parent function has closed.
 * 
 * 
 *  why/where we need these closures?
 *  
 *  use1 : to abstract public behav of any modules
 *  use2 : while executing func async , to access parent-scoped data
 * 
 */
//
//function teach(sub){
//	console.log('teaching '+sub);
//	let notes=sub+"-notes";
//	let stories="bla bla";
//	function learn(){
//		console.log('learning with '+notes);
//	}
//	//learn();
//	console.log('teaching end...');
//	return learn;
//}
//
//
//
//let learnFunc=teach('.js'); // teach-context with given args & notes
//
//learnFunc();
//learnFunc();
//learnFunc();
//learnFunc=null;
//
//


//use1 : to abstract public behav of any module



/*
 *  e.g counter module
 *  
 *  		- count
 *      - doCount() 
 *      - getCount()
 * 
 */

// self-executable function  or IIFE ( Immdiatly Invok.. FUnc.. Expres.. )


// Module design pattern

const counter=(function(){
	let count=0;     // private
	// public
	function doCount(){
		count++;
	}
	function getCount(){
		return count;
	}
	let wrapper={
			inc:doCount,
			get:getCount
	};
	return wrapper;
})();

//
//let counter1=init();
//let counter2=init();







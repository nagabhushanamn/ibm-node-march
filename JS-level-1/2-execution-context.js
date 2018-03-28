/**
 * 
 */

/*
 *  Execution-context / scope
 *  -----------------------------
 * 
 * 	memory/stack-frame with given args & locals 
 *  to execute instructions
 *  
 *  		2 phases
 *      ---------- 
 *  
 *  		phase-1 : creation-phase / push
 *  
 *  			=> any variable declared with 'var' keyword,
 *     		   will get hoisted to top of context with default value ( undefined )
 *  
 *  		phase-2 : execution-phase / pop
 *  
 *  			=> instructions execute in seq.
 *  
 *  
 *      imp-note : 
 *      
 *      	==> every .js-runtime, has one global-context
 *      ==> global-context always executed by 'global-object'
 *      
 *      global-object:
 *      
 *      		browser-envi  ==> window
 *      	    Node.js       ==> process
 * 
 * 
 */


//------------------------------------------------------

//console.log(v); 
//var v=12;  // belongs to global-context

//------------------------------------------------------

/*
 *  imp-note : every function invocation also creates new-context,
 *             which is child-context of in-which context has declared.
 * 
 */
//------------------------------------------------------
//
//var v=12;
//
//function f1(){
//	console.log(v);
//	var v=13;
//}
//
//f1(); // f1-context <--- global-context


//------------------------------------------------------
//// Quiz
//
//var v=12;
//function f1(){
//	function f2(){
//		console.log(v);
//	}
//	//f2(); // f2-context <--- f1-context
//	var v=13;
//}
//f1(); // f1-context <--- global-context
//
//
//


//------------------------------------------------------
//
//var v=12;
//var v=13;

//------------------------------------------------------
//
//var v=100;
//if(true){
//	var v=200;
//}
//console.log(v);

//------------------------------------------------------

// problems with 'var' keyword :

/*
 * 
 * -> variable always get hoist
 * -> can re-declare same-variable within context
 * -> no block-scope to 'var' variables 
 * 
 */

//soln : using 'let' & 'const' keywords with block-scope ( Es6 )


//------------------------------------------------------

//
//console.log(v); // Error
//let v=12;


//------------------------------------------------------
//
//let v=12;
//let v=13; // Error

//------------------------------------------------------
//
//let v=100;
//if(true){
//	let v=200;  // Block-scoped
//}
//console.log(v);


//------------------------------------------------------
//

// const
//
//const trainer={
//		name:'Nag'
//};
//
////trainer=null; //can't mutate the reference
//
//trainer.name="New Trainer";



//------------------------------------------------------
//
// summary :

// use 'let' keyword for mutable reference

// use 'const' keyword for immutable reference

// best practice : Avoid using 'var' keyword

//------------------------------------------------------
//








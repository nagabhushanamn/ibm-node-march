/**
 * 
 */

/*
	this ==> current context's owner
	
	imp-note :
	
	=> in .js function any variable without reference, 
	    always reads context's hierarchy  data , with reference reads obj's property
	 
*/

// why we need 'this' keyword?
//
////let pName="Global";
//let person={
//		pName:'Nag', // obj's property
//		sayName:function(){
//			let pName="Local"; // context data
//			console.log('im '+pName);// context's hierarchy data
//			console.log('im '+person.pName); // obj's property
//			console.log('im '+this.pName); // context's owner data 
//		}
//};
////person.sayName();
//
//let oldPerson=person;
//person={
//		pName:'Ria',
//		sayName:function(){
//			console.log('im '+person.pName); // obj's property
//		}
//};
//oldPerson.sayName();

//-------------------------------------------------------------


//Function Binding

/*
 * => every function must be binded to an object
 *    before invocation.
 *    
 *    
 *    2 types of function-binding
 *    
 *    a. static
 *    b. dynamic
 * 
 */
//-------------------------------------------------------------

// 1. static function binding
//
//let p1 = {
//	name : 'Nag',
//	sayName : function() {
//		console.log('im ' + this.name);
//	}
//}
//
//let p2 = {
//	name : 'Ria',
//	sayName : function() {
//		console.log('im ' + this.name);
//	}
//}

// or

//
//function sayNameForAll(){
//	console.dir(this);
//	console.log('im '+this.name);
//}
//
//
//let p1 = {
//	name : 'Nag',
//	sayName : sayNameForAll // static function-binding
//}
//
//let p2 = {
//	name : 'Ria',
//	sayName : sayNameForAll
//}
//
//
//sayNameForAll(); // im ??
//p1.sayName(); // im Nag
//p2.sayName(); // im Ria


//-------------------------------------------------------------

// Quiz
//
//let greetLib={
//		name:'greet-lib',
//		sayName:function(){
//			console.log('im '+this.name);
//		}
//};
//greetLib.sayName();
//let person={name:'Nag',sayName:greetLib.sayName}; // static function-binding
//person.sayName();

//-------------------------------------------------------------

//b. Dynamic Function Binding
//
//
//let greetLib={
//		name:'greet-lib',
//		sayName:function(message,from){
//			console.log(message +' im '+this.name+" - "+from);
//		}
//};
//
//let person={name:'Nag'};
//let employee={name:'IBM'}

//way-1 : call()  => if we have individual params
//greetLib.sayName.call(person,"Hello","chennai");
//greetLib.sayName.call(employee,"hey","bengalore")

//way-2 : apply()   =>  if we have array of params
//greetLib.sayName.apply(person,["Hello","chennai"]);
//greetLib.sayName.apply(employee,["hey","bengalore"])

//way3  : bind()    => bind once(now), invoke later(as many times )
//let personSayName=greetLib.sayName.bind(person,"hello","chennai");
//personSayName();
//personSayName();
//let employeeSayName=greetLib.sayName.bind(employee);
//employeeSayName('hey',"bengalore");
//employeeSayName('dude',"universe");



//-------------------------------------------------------------


// how to create many similar objects ?


/*
 *     In ES5
 *     -------
 *     function as constructor          ===> instance(s)
 * 
 * 	   from ES6
 *     --------- 	
 *     define 'class' with constructor   ===> instance(s)
 * 
 * 
 */

// class ( in Es5 )
//
//function Person(name,age){
//	this.name=name;
//	this.age=age;
//	
//	this.sayName=function(){
//		console.log('im '+this.name);
//	}
//	this.sayAge=function(){
//		console.log('im '+this.age +" old");
//	}
//}
//
//let p1=new Person('Nag',34)
//let p2=new Person('Ria',3)


//-------------------------------------------------

// summary

/*
 * 
 *  in .js-lang, we can invoke function(s) in 4 ways
 *  
 *  
 *  1. function-invocation   ( this ==> global-object )
 *  2. method-invocation / static function-binding ( this ==> invoker object )
 *  3. call/apply/bind  / dynamic function-binding ( this ==> arg-obj )
 *  4. constructor invocation    ( this ==> new-object )
 *  
 *  base-line : every function must bind to an object, before invocation
 *  
 */


//-------------------------------------------------

// Quiz :

// best practice : never call constructor without 'new' keyword
//
//function Person(name,age){
//	this.name=name;
//	this.age=age;
//}
//
//let p=Person('Nag',34);



//-------------------------------------------------

// Quiz

//
//let tnr={
//		name:'Nag',
//		doTeach:function(){
//			console.log(this.name +" teaching .js");
//			let self=this;
//			let doLearn=function(){
//				console.log(this.name+" learning .js from "+self.name);
//			}
//			//doLearn();
//			let emp={name:'IBM'};
//			doLearn.call(emp);
//			console.log("teaching .js ends");
//		}
//};
//
//tnr.doTeach();
//let newTnr={name:'Praveen'};
//tnr.doTeach.call(newTnr);








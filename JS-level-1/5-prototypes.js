/**
 * 
 */

// without prototypes...
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


/*
 *  how to avoid duplicates/ how to implement inheritance in .js-lang ?
 *  
 *   ==> using prototypes
 *   
 *   obj  <------- parent-object ( prototype )
 * 
 * 
 */

// with prototypes  ( ES5 - class ) ==> OOP
//
//function Person(name,age){
//	this.name=name;
//	this.age=age;
//}
//Person.prototype.sayName=function(){
//	console.log('im '+this.name);
//}
//Person.prototype.sayAge=function(){
//	console.log('im '+this.age +" old");
//}
//
//let p1=new Person('Nag',34)
//let p2=new Person('Ria',3)

//---------------------------------------------------------

//  OOP in ES6   ( class-syntax )


class Person{
	constructor(name,age) {
		this.name=name;
		this.age=age;
		console.log('Person:constructor');
    }
	sayName(){
		console.log('im '+this.age +" old");
	}
	sayAge(){
		console.log('im '+this.age +" old");
	}
}
//let p1=new Person('Nag',34)

class Employee extends Person{
	constructor(name,age,salary) {
		super(name,age);
		this.salary=salary;
		console.log('Employee:constructor');
    }
	askForRaise(){
		return this.salary*0.02;
	}
}

//let e=new Employee('Nag',34,1000.00);

class Boss extends Employee {
	
	askForRaise(){
		return this.salary*0.2 + super.askForRaise();
	}
	
}

let boss=new Boss('Nag',34,1000);

class Abc{
	static staMethod(){
		console.log('sta method...');
	}
}
Abc.staVar=123;













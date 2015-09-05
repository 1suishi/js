function person(name,age){

	this.name = name;
	this.age = age;			
}
person.sayName = function(){
	console.log(this.name);
}

//person.sayName();

console.log(person);
console.log(new person);

 //var person1 = new person("lzw",25);
 //person1.sayName();

// console.log(person1);	

// var f={};
// console.log(f);
// f.name = "lzw";
// console.log(f);


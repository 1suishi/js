function Parent(hello){ 
	this.hello = hello; 
} 

Parent.prototype.sayHello = function(){ 
	console.log(this.hello); 
} 

function Child(hello,world){ 
	Parent.call(this,hello);//将父类的属性继承过来 
	this.world = world;//新增一些属性 
} 

Child.prototype = new Parent();//将父类的方法继承过来 

Child.prototype.sayWorld = function(){//新增一些方法 
	console.log(this.world); 
} 

var c = new Child("zhangsan","lisi"); 
c.sayHello(); 
c.sayWorld();

console.log(new Child);
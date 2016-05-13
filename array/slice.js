var a = [1,2,3];
console.log(a.slice())
console.log(a.slice(2))
console.log(a.slice(3))

function employee(name,job,born){
	this.name=name;
	this.job=job;
	this.born=born;
}

var bill=new employee("Bill Gates","Engineer",1985);

console.log(bill.toSource);
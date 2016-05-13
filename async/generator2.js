var fs = require('fs');
function * generator (){
	yield inner();
	console.log("over")
}



function inner(){
	var s;
	function(){
		if(s){
			s.apply(null,arguments);
		}
	}
	fs.readFile('if.html', 'utf8',);
}

var g = generator();
var a = g.next();
console.log(a);
var b = g.next();

console.log(b);
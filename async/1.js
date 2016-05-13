var fs = require('fs');

var pending = (function () {
  var count = 0;
  return function (callback) {
  	return function(){
	  		count++;
	  		console.log(count)
		    return function () {
					count--;
					console.log(count)
						if (count === 0) {
					callback();
				}
	    };
  	}  
  };
}());
var done = pending(function () {
  console.log('all is over');
});


fs.readFile('if.html', 'utf8', done());
fs.readFile('learn.html', 'utf8', done());
fs.readFile('play.html', 'utf8', done());
fs.readFile('learn2.html', 'utf8', done());
var fs = require('fs');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);


function run(fn){
  var g = fn();
  function next(err,data){
    var ret  = g.next(data);
    if(ret.done) return;
    ret.value(next)
  }
  next();
}

var gen = function* (){
  var r1 = yield readFile('1.js');
  console.log(r1.toString());
  var r2 = yield readFile('if.html');
  console.log(r2.toString());
};

run(gen)
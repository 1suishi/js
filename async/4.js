var fs = require('fs');

function f() {
  var pass;
  fs.readFile('if.html', 'utf8', function () {
    console.log("###################");
    console.log(pass);
    if (pass) {
      console.log("***************************");
      pass.apply(null, arguments);
    }
    console.log("++++++++++++++++++++++++");
  });
  return function (fn) {
    pass = fn;
  };
};

var ret = f();

setTimeout(function(){
  ret(function (err, data) {
    if (err) {
      throw err;
    }
    console.log(data);
  });
},1);
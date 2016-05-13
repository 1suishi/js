var fs = require('fs');

var helper = function (fn) {
  return function () {
    var args = [].slice.call(arguments);
    var pass;
    args.push(function () { // 在回调函数中植入收集逻辑

      if (pass) {
        pass.apply(null, arguments);
      }
    });
    fn.apply(null, args);

    return function (fn) { // 传入一个收集函数
      pass = fn;
    };
  };
};

var readFile = helper(fs.readFile);

var flow = function* () {
  var txt = yield readFile('1.js', 'utf8');
  console.log(txt);
};

var generator = flow();
var ret = generator.next(); // 执行readFile('file1.txt', 'utf8');


// setTimeout(function(){
//   ret.value(function (err, data) {
//     if (err) {
//       throw err;
//     }
//     console.log(data);
//   });
// },1000);

ret.value(function (err, data) {
  if (err) {
    throw err;
  }
  generator.next(data);
});
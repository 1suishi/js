var compute = function* (a, b) {
  var sum = a + b;
  console.log(sum);
  var c = a - b;
  console.log(c);
  var d = a * b;
  console.log(d);
  var e = a / b;
  console.log(e);
};

var g = compute(1,2);
g.next();

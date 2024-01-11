// Map Operation

var a = [10, 20, 30, 40, 50, 60, 70];
// a.forEach(x => console.log(x));
// a.filter(x => x > 30).forEach(x => console.log(x));
var v = a.find(x => x > 20);
console.log(v);
a.map(x => x * 3).forEach(x => console.log(x));
a.forEach(x => console.log(x));
var b = a.map(x => x * 2);
console.log("Printing b");
b.forEach(x => console.log(x));
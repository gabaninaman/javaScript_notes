var a = [10, 20, 30, 40, 50, 60, 70];
// Printing array
// a.forEach(x => console.log(x));
// // printing filtered array
// a.filter(x => x > 30).forEach(x => console.log(x));
// // printing the element found with find.function
// var v = a.find(x => x > 20);
// console.log(v);
// // printing the altered array.
// a.map(x => x * 3).forEach(x => console.log(x));
// // printing back the original array.
// a.forEach(x => console.log(x));
// //printing a new array b
// var b = a.map(x => x * 2);
// console.log("Printing b");
// b.forEach(x => console.log(x));

console.log("Printing result of reduce");
console.log(a.reduce((acc,v) => acc + v));
console.log("Printed result of reduce");
// var k = 5;
// a.map(x => x + 1).map(y => y + k).map(x => x - 1).forEach(x => console.log(x));
// var result = a.map(x => x * 2).reduce((acc, v) => acc + v, 0);
// console.log("result = " + result);
// Using Closure Object

var a = [10, 20, 30, 40, 50, 60, 70];
// Printing Array
a.forEach(x => console.log(x));
// filtering array and printing the filtered elements
a.filter(x => x > 30).forEach(x => console.log(x));
// Finding element and printing the element
var v = a.find(x => x > 20);
console.log(v);
// printing array using map function and miltiplying each original element by 3 and storing in new array.
a.map(x => x * 3).forEach(x => console.log(x));
// Printitng back the original arary
a.forEach(x => console.log(x));
// creating a new array b and storing the elements of array a mupltiplied by 2.
var b = a.map(x => x * 2);
// Priniting the new array b
console.log("Printing b");
b.forEach(x => console.log(x));
// console.log("the ------------------------");

// var k = 5;
// a.map(x => x*4).forEach(x => console.log(x));
